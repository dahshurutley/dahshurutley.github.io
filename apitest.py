import requests 

def json():

    response = requests.get('https://cataas.com/cat?json=true')
    json_data = response.json()
    kitties = json_data['url']
    return f'https://cataas.com{kitties}'

print(json())
