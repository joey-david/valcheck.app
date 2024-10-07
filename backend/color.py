import re

def extract_rgb(color):
    if color.startswith("#"):
        return hex_to_rgb(color)
    elif color.startswith("rgb("):
        return tuple(map(int, re.findall(r"\d+", color)))
    else:
        raise ValueError("Invalid color format")

def rgb_to_hex(r, g, b):
    return "#{:02x}{:02x}{:02x}".format(int(r), int(g), int(b))

def hex_to_rgb(hex_color):
    return tuple(int(hex_color[i:i+2], 16) for i in (1, 3, 5))

def invert_hex_color(color):
    r, g, b = extract_rgb(color)
    r, g, b = invert_rgb_color(r, g, b)
    return rgb_to_hex(r, g, b)

def invert_rgb_color(r, g, b):
    mean = (r + g + b) / 3
    r_diff = r - mean
    g_diff = g - mean
    b_diff = b - mean
    r = 255 - mean - r_diff
    g = 255 - mean - g_diff
    b = 255 - mean - b_diff
    return int(r), int(g), int(b)

if __name__ == "__main__":
    while True:
        color = input("Enter a hex color (or 'exit' to quit): ")
        if color.lower() in ['q', 'exit', 'quit']:
            break
        try:
            inverted_color = invert_hex_color(color)
            print(f"Inverted color: {inverted_color}")
        except ValueError as e:
            print(e)