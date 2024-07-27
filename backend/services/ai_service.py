import requests
from app import app

def generate_content(prompt):
    api_key = app.config['HUGGINGFACE_API_KEY']
    url = "https://api-inference.huggingface.co/models/gpt2"
    headers = {"Authorization": f"Bearer {api_key}"}
    payload = {"inputs": prompt}
    response = requests.post(url, headers=headers, json=payload)
    return response.json()[0]['generated_text']