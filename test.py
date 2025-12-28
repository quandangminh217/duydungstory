import os

TARGET_DIR = "assets/img/thumb/ourlovelyguests/momentofjoy"  # đổi thành thư mục của bạn

for root, _, files in os.walk(TARGET_DIR):
    for file in files:
        if file.lower().endswith(".webp"):
            new_name = file.replace("_", "")
            if new_name != file:
                old_path = os.path.join(root, file)
                new_path = os.path.join(root, new_name)

                if not os.path.exists(new_path):
                    os.rename(old_path, new_path)
                    print(f"✔ {file} → {new_name}")
                else:
                    print(f"⚠ Bỏ qua (trùng tên): {new_name}")
