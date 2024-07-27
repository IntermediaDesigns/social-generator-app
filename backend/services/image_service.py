from PIL import Image, ImageDraw, ImageFont
import io


def add_watermark(image_data, watermark_text):
    image = Image.open(io.BytesIO(image_data))
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype("arial.ttf", 36)
    draw.text((10, 10), watermark_text, font=font, fill=(255, 255, 255, 128))

    output = io.BytesIO()
    image.save(output, format="PNG")
    return output.getvalue()
