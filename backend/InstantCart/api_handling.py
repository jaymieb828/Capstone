 
from django.shortcuts import render
import requests
from .models import ShippingDetails
from .utils import id_generator

# Create your views here.
Instacart_development_domain = ''
client_id = ''
client_secret = ''

def access_token():
    
    url = f'https://{Instacart_development_domain}/v2/oauth/token'
    headers ={ 'Accept': 'application/json',
    'Content-Type': 'application/json' }
    
    data = {"client_id":  client_id,
    "client_secret": client_secret,
    "grant_type": "client_credentials"}
    
    
    res = requests.post(url,headers=headers, data=data).json()
    token = res['access_token']
    return token




def create_connect(request):
    user = request.user
    token = access_token()
    url = f'https://{Instacart_development_domain}/v2/fulfillment/users' 
    
    
    header = {'Accept': 'application/json',
  'Authorization': f'Bearer {token}',
   'Content-Type': 'application/json' }
    
    
    data = {
    "user_id": user.username,
    "first_name": user.first_name,
    "last_name": user.last_name,
     
    }
    
    res = requests.post(url,headers=header, data=data).json()
    if res.status_code == '200':
        return 1
    if res.status_code == '400':
        return 2
    else:
        return 0
    
    
    
    
def find_near_store(request):
    user = request.user
    shipping = ShippingDetails.objects.get(user=user)
    
    token = access_token()
    url =f'https://{Instacart_development_domain}/v2/fulfillment/stores/delivery' 
    header= {'Accept': 'application/json',
     'Authorization': f'Bearer {token}',
     'Content-Type': 'application/json' }
    
    data ={
    "find_by": {
        "address_line_1":shipping.address,
        "postal_code": shipping.zip_code
        }
    }      
    
    res = requests.post(url,headers=header, data=data).json()

    return res['stores']
    
    
def reserve_slot(request,location_code, items):
    
    user = request.user
    shipping = ShippingDetails.objects.get(user=user)
    
      
    token = access_token()
    url =f'https://{Instacart_development_domain}/v2/fulfillment/users/{user.username}/service_options/cart/delivery' 
    header= {'Accept': 'application/json',
     'Authorization': f'Bearer {token}',
     'Content-Type': 'application/json' }
    
    data = {
    "address": {
      "address_line_1": shipping.address,
      "postal_code": shipping.zip_code
    },
    
    "items": items,  # could be list including dicts in it
    
    "location_code":  location_code
    }
    
    res = requests.post(url,headers=header, data=data).json()

    return res['service_options']
    
    
    
def hold_service_option(request, service_option_id):
    
    token = access_token()
    user = request.user
    url = f'https://{Instacart_development_domain}/v2/fulfillment/users/{user.username}/service_options/{service_option_id}/reserve' 
    
    header= {'Accept': 'application/json',
     'Authorization': f'Bearer {token}',
     'Content-Type': 'application/json' }
    
    
    res = requests.post(url,headers=header).json()
    
    return res['service_option_hold']





def create_delivery(request,service_option_hold_id, location_code, items):
    
    user = request.user
    shipping = ShippingDetails.objects.get(user=user)
    
 
    token = access_token()
    url =f'https://{Instacart_development_domain}/v2/fulfillment/users/{user.username}/orders/delivery'
    header= {'Accept': 'application/json',
     'Authorization': f'Bearer {token}',
     'Content-Type': 'application/json' }
    
    data = {
    "order_id": id_generator(),
    "service_option_hold_id": service_option_hold_id,
    "initial_tip_cents": 1000,
    "leave_unattended": True,
    "special_instructions": "Ring the doorbell on delivery.",
    "location_code": location_code,
    "paid_with_ebt": False,
    "locale": "en-US",
    "user": {
        "phone_number": shipping.phone_number,
        "sms_opt_in": True
    },
    "address": {
        "address_line_1": shipping.address,
        "postal_code":shipping.zio_code
    },
    "items": items
}
    
    res = requests.post(url,headers=header, data=data).json()
    
    order_id = res['id']
 
    return {'order_id':order_id, 'res':res}
