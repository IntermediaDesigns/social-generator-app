from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.services.content_generator import generate_content
from app.services.image_processor import add_watermark
from app.utils.social_media import share_to_social_media

bp = Blueprint('main', __name__)

@bp.route('/generate', methods=['POST'])
@jwt_required()
def generate():
    data = request.json
    content = generate_content(data['prompt'], data['brand_guidelines'])
    return jsonify(content)

@bp.route('/process-image', methods=['POST'])
@jwt_required()
def process_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image file"}), 400
    image_file = request.files['image']
    watermarked_image = add_watermark(image_file)
    return jsonify({'image_url': watermarked_image})

@bp.route('/share', methods=['POST'])
@jwt_required()
def share():
    data = request.json
    result = share_to_social_media(data['platform'], data['content'])
    return jsonify(result)