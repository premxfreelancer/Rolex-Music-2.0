import os

folder_path = 'images'
files = os.listdir(folder_path)

for index, file in enumerate(files):
    new_name = f"image{index + 1}.png"
    os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_name))
