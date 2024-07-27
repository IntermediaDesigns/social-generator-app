from transformers import pipeline

def generate_content(prompt, brand_guidelines):
    generator = pipeline('text-generation', model='gpt2')
    content = generator(f"{prompt} {brand_guidelines}", max_length=100)[0]['generated_text']
    return content