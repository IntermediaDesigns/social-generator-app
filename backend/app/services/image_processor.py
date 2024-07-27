from PIL import Image, ImageDraw, ImageFont
import os


def add_watermark(image_file):
    image = Image.open(image_file)
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype("arial.ttf", 36)
    draw.text((10, 10), "Watermark", font=font, fill=(255, 255, 255, 128))

    watermarked_image_path = os.path.join(
        "static", "watermarked_images", f"watermarked_{image_file.filename}"
    )
    image.save(watermarked_image_path)
    return watermarked_image_path
