from PIL import Image, ImageDraw, ImageFont


def add_watermark(image_data):
    image = Image.open(image_data)
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype("arial.ttf", 36)
    draw.text((10, 10), "Watermark", font=font, fill=(255, 255, 255, 128))

    # Save and return the watermarked image
    watermarked_image_path = "path/to/save/watermarked_image.jpg"
    image.save(watermarked_image_path)
    return watermarked_image_path
