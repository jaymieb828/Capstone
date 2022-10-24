from email import header
from django.shortcuts import render
import requests
from requests.auth import HTTPBasicAuth
import base64

import json
 

CLIENT_ID = "mypantrytest-d04ea2bb830f8945fa9aee593069d3476339740537354243872"
CLIENT_SECRET = "Q090brTqLiZc7JhAQGUCn0J-2ecUD65v7jdpmVMR"
REDIRECT_URI = 'http://127.0.0.1:8000/'


API_URL = 'https://api.kroger.com/v1'




def access_token():
    url = f'https://api.kroger.com/v1/connect/oauth2/authorize'
 
     
    sample_string = f"{CLIENT_ID}:{CLIENT_SECRET}"
    
    sample_string_bytes = sample_string.encode("ascii")
  
    base64_bytes = base64.b64encode(sample_string_bytes)
    base64_string = base64_bytes.decode("ascii")
    print(base64_string)
    get_client_access_token(base64_string)
    


def get_client_access_token(encoded_client_token):
    url = API_URL + '/connect/oauth2/token'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': f'Basic {encoded_client_token}',
    }
    payload = {
        'grant_type':"client_credentials",
        'scope':['product.compact'],
    }
    response = requests.post(url, headers=headers, data=payload)
    print(json.loads(response.text).get('access_token'))
    return json.loads(response.text).get('access_token')


 
def identity():
    url = f'https://api.kroger.com/v1/identity/profile'
    token = access_token()
    headers= {
    'Accept': 'application/json',
   'Authorization':f'Bearer {token}'
   }
    
    data = {"client_id":  CLIENT_ID,
    "client_secret": CLIENT_SECRET,
    "grant_type": "client_credentials",
        "scope": "profile.compact"
    }
    
    r = requests.get(url,headers=headers, data=data).json()
    print(r["data"["id"]])
    return r["data"["id"]]



 
 
 
from .client import (
    KrogerCustomerClient,
    KrogerServiceClient,
)

 

def add_to_items(items, product, quantity):
    """ Adds specified item to list of items with given quantity and returns items
    Arguments:
        items {array} -- An array of items to purchase
        product {Product} -- The product we want to buy
        quantity {int} -- How much of the product we want to buy
    """
    item_to_add = {
        "upc": product.upc,
        "quantity": quantity
    }
    items.append(item_to_add)
    return items


 


 