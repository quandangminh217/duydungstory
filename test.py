from pathlib import Path

# ====== CONFIG ======
CATEGORY = "photoboothmoment"

THUMB_DIR = Path("assets/img/thumb/photoboothmoment")
FULL_DIR  = Path("assets/img/full/photoboothmoment")

OUTPUT_FILE = "photoboothmoment.html"
IMG_EXTS = {".webp", ".jpg", ".jpeg", ".png"}
# ====================


def natural_sort_key(path: Path):
    import re
    return [
        int(text) if text.isdigit() else text.lower()
        for text in re.split(r"(\d+)", path.name)
    ]


thumb_files = sorted(
    [f for f in THUMB_DIR.iterdir() if f.suffix.lower() in IMG_EXTS],
    key=natural_sort_key
)

html_blocks = []

for thumb in thumb_files:
    full = FULL_DIR / thumb.name

    if not full.exists():
        print(f"⚠️  Missing full image: {full.name}")
        continue

    block = f"""<a href="{full.as_posix()}"
    class="glightbox"
    data-category="{CATEGORY}">
    <img src="{thumb.as_posix()}" loading="lazy" alt="">
</a>
"""
    html_blocks.append(block)

html_output = "\n".join(html_blocks)

Path(OUTPUT_FILE).write_text(html_output, encoding="utf-8")

print(f"✅ Generated {len(html_blocks)} items → {OUTPUT_FILE}")
