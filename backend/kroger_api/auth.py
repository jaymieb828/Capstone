import json

import requests
 
 
 
 
redirect_uri = 'http://127.0.0.1:8000/api/kroger'
client_id = ''

API_URL = 'https://api.kroger.com/v1'
AUTH_URL = "https://api.kroger.com/v1/connect/oauth2/authorize?client_id={client_id}&response_type=code&redirect_uri={redirect_uri}&scope=cart.basic:write product.compact"
 
def get_customer_access_token(encoded_client_token, redirect_uri, customer_username, customer_password):
    # customer_auth_code = get_customer_authorization_code(customer_username, customer_password)
    url = API_URL + '/connect/oauth2/token'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': f'Basic {encoded_client_token}',
    }
    payload = {
        'grant_type':"authorization_code",
         
        'redirect_uri': redirect_uri,
    }
    response = requests.post(url, headers=headers, data=payload)
    return json.loads(response.text).get('access_token')
 
 
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
    return json.loads(response.text).get('access_token')
