from email import header
from django.shortcuts import render
import requests
import base64


CLIENT_ID = "mypantrytest-d04ea2bb830f8945fa9aee593069d3476339740537354243872"
CLIENT_SECRET = 'Q090brTqLiZc7JhAQGUCn0J-2ecUD65v7jdpmVMR'
REDIRECT_URI = 'http://127.0.0.1:8000/'

def access_token():
    url = f'https://api.kroger.com/v1/connect/oauth2/token'
    
    headers= {
    "Content-Type": "application/x-www-form-urlencoded",
   'Content-Type': 'application/json' }
    
    data = {"client_id":  CLIENT_ID,
    "client_secret": CLIENT_SECRET,
    "grant_type": "client_credentials",
        "scope": "profile.compact"
    }
    
    r = requests.post(url,headers=headers, data=data).json()
    print(r)
     
    
    return r['access_token']

 
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



 