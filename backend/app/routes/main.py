from flask import Blueprint, request, jsonify
from ..services.content_generator import generate_content
from ..services.image_processor import add_watermark
from ..utils.social_media import share_to_social_media

main = Blueprint('main', __name__)

@main.route('/generate', methods=['POST'])
def generate():
    data = request.json
    content = generate_content(data['prompt'], data['brand_guidelines'])
    return jsonify(content)

@main.route('/process-image', methods=['POST'])
def process_image():
    image_data = request.files['image']
    watermarked_image = add_watermark(image_data)
    return jsonify({'image_url': watermarked_image})

@main.route('/share', methods=['POST'])
def share():
    data = request.json
    result = share_to_social_media(data['platform'], data['content'])
    return jsonify(result)