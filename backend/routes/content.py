from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.ai_service import generate_content
from services.image_service import add_watermark

bp = Blueprint('content', __name__)

@bp.route('/generate', methods=['POST'])
@jwt_required()
def generate():
    data = request.get_json()
    prompt = data.get('prompt')
    content = generate_content(prompt)
    return jsonify(content=content), 200

@bp.route('/watermark', methods=['POST'])
@jwt_required()
def watermark():
    # Implement image watermarking logic here
    pass