from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import requests,time,json
import requests,base64,json

from .apis_func import *
# Create your views here.

def kroger_call(request):
    access_token()
    return HttpResponse("Sucess")


KROGER_ACCESS_TOKEN = ''
ACCESS_TOKEN_LIFETIME  = 0
# ACCESS_TOKEN_LIFETIME  = time.time()+10

def getAccessToken(): 
    print("** Generating Token ")
    global KROGER_ACCESS_TOKEN
    global ACCESS_TOKEN_LIFETIME
    client_id =  "mypantrytest-d04ea2bb830f8945fa9aee593069d3476339740537354243872"
    client_secret = "H9H5mg2XTCRFu3DIrzCDk2CKc7v3i8dkzsr0cquv"
    userpass = client_id+':'+client_secret 
    encoded_client_token = base64.b64encode(userpass.encode()).decode()
    API_URL = 'https://api.kroger.com/v1'
    url = API_URL + '/connect/oauth2/token'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': f'Basic {encoded_client_token}',
        'Cookie': '_abck=4D57707F817920E09298A947AC7A668E~-1~YAAQXh0gF6wq0x6EAQAASv0gLQgWJaIbzlwFSUeSooTIlaExS0UGFeRPvBQFFb9nqQHqr9PPW03SEKtUEn/nD8vSw5mX4cnnUxIvtPYJoNnEWnFeCCIqB0iUv0X/h6oEXqlZjvbGddHp+a7ZKpbTrgXhHR5NEuuiNU3pRbBbX3lIp2jXKp2jCTszU1nHVoyx01Ij+SsnIJ2UeueJLXLuJ7F958cXzciAmmiOz7hi0iQ0Ku+GqX+L+pob/yDT3Ljo72m4CIY4Trj1R0PJ+PkZrMJ2iQZawxf9cxx792iKU1iPl4iyyHxoPZP2Vfs2q4ZSK2hS82jNzikK8fYhtc2H+sstd9aFyjja3zcfq7dfIGHUE4/9z+tqjy0foZ8=~-1~-1~-1; bm_sz=B37657F6058BC35078FFFAC5A0306A23~YAAQXh0gF60q0x6EAQAASv0gLREuN723qvnnqTKOx8Hbfyc/xKnnsVVsLItHHLtHMqMZR7PnceQ2aENDKbsTKAogaQziufSub65nQTqH4finuf8pRJOZ0NR5VcJ3gdOlkp1XEt+95tlJWM7SKjgvxduFtuOrHLUkB19Lnx0mgVq9IApdRIYDrLoDDOWeRWdZr5+9bPH7Dnlsqvm5DvRZsb8iFEhzfSj5h1ZMW938acuDtoVGip1FGs5bpdpF4L/fn9xysaalyIlQm/EJKCq9irZbwrFt0mAt29w5jJ9kZvqOKXXxwVsYMqfALI5MQDuaaYvoZJwTGtdfjcu3SCqTViei5tz1mbexNdTexxpz/5QKOsMpL7fbzFyDyip700VKMD8=~4403766~3556417; akaalb_Digital_ALB_API=~op=KT_Digital_API_Apigee:api-apigee|~rv=82~m=api-apigee:0|~os=75b4a9ec926d2a9e67035451773cec6c~id=de6444c83893dccbb3ba54cf1d872063'
        
    }
    payload = {
        "grant_type":"client_credentials",
        "scope":["product.compact"],
    }
    response = requests.post(url, headers=headers, data=payload)
    access_token = response.json().get('access_token')
    KROGER_ACCESS_TOKEN = access_token
    ACCESS_TOKEN_LIFETIME = int(time.time())+1800  
    return access_token




def fetchProducts(request):
    print("fetchProducts = ", "fetchProducts")
    global KROGER_ACCESS_TOKEN
    global ACCESS_TOKEN_LIFETIME   
    if int(time.time())>=ACCESS_TOKEN_LIFETIME:
        getAccessToken()
    
    global KROGER_ACCESS_TOKEN
    
    # print("KROGER_ACCESS_TOKEN = ", KROGER_ACCESS_TOKEN)
    url = 'https://api.kroger.com/v1/products'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {KROGER_ACCESS_TOKEN}',
        'Cookie': '_abck=4D57707F817920E09298A947AC7A668E~-1~YAAQXh0gF6wq0x6EAQAASv0gLQgWJaIbzlwFSUeSooTIlaExS0UGFeRPvBQFFb9nqQHqr9PPW03SEKtUEn/nD8vSw5mX4cnnUxIvtPYJoNnEWnFeCCIqB0iUv0X/h6oEXqlZjvbGddHp+a7ZKpbTrgXhHR5NEuuiNU3pRbBbX3lIp2jXKp2jCTszU1nHVoyx01Ij+SsnIJ2UeueJLXLuJ7F958cXzciAmmiOz7hi0iQ0Ku+GqX+L+pob/yDT3Ljo72m4CIY4Trj1R0PJ+PkZrMJ2iQZawxf9cxx792iKU1iPl4iyyHxoPZP2Vfs2q4ZSK2hS82jNzikK8fYhtc2H+sstd9aFyjja3zcfq7dfIGHUE4/9z+tqjy0foZ8=~-1~-1~-1; bm_sz=B37657F6058BC35078FFFAC5A0306A23~YAAQXh0gF60q0x6EAQAASv0gLREuN723qvnnqTKOx8Hbfyc/xKnnsVVsLItHHLtHMqMZR7PnceQ2aENDKbsTKAogaQziufSub65nQTqH4finuf8pRJOZ0NR5VcJ3gdOlkp1XEt+95tlJWM7SKjgvxduFtuOrHLUkB19Lnx0mgVq9IApdRIYDrLoDDOWeRWdZr5+9bPH7Dnlsqvm5DvRZsb8iFEhzfSj5h1ZMW938acuDtoVGip1FGs5bpdpF4L/fn9xysaalyIlQm/EJKCq9irZbwrFt0mAt29w5jJ9kZvqOKXXxwVsYMqfALI5MQDuaaYvoZJwTGtdfjcu3SCqTViei5tz1mbexNdTexxpz/5QKOsMpL7fbzFyDyip700VKMD8=~4403766~3556417; akaalb_Digital_ALB_API=~op=KT_Digital_API_Apigee:api-apigee|~rv=82~m=api-apigee:0|~os=75b4a9ec926d2a9e67035451773cec6c~id=de6444c83893dccbb3ba54cf1d872063'
        
    }
    
    products = [] 
    filter_term = request.GET.get('filter_term')
    if filter_term:
        filter_term = filter_term.strip()
        
        params =  {'filter.term': filter_term, 'filter.locationId': '02600848',  'filter.product_id': None, 'filter.brand': None, 'filter.fulfillment': 'csp'} 
        response = requests.get(url, headers=headers, params=params)
        
        if response.status_code==200: 
            products = response.json()
            products = products['data']
        else:
            products = [] 
 
    return JsonResponse({"products":products})