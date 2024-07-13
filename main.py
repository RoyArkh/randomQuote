import requests

url = "https://api.quotable.io/quotes/random"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    quote = data[0]['content']
    author = data[0]['author']
    print(f'"{quote}" - {author}')
else:
    print("Failed to retrieve quote")
