import os
from PIL import Image

output_dir = os.path.join("public", "images")
os.makedirs(output_dir, exist_ok=True)

uploaded = r"C:\Users\Asus\.gemini\antigravity\brain\8f6949a2-478e-41e7-96dc-42f0f1c4bc12\.user_uploaded"

# 1. ScanTaker showcase from media_1793889745547_13a4f40c.jpg (1024x682)
im_scan = Image.open(os.path.join(uploaded, "media_1793889745547_13a4f40c.jpg"))
w, h = im_scan.size
print("ScanTaker image size:", w, h)
# Laptop + Phone is on the right side: roughly x: 420 to 980, y: 130 to 570
crop_scan = im_scan.crop((390, 140, 990, 580))
crop_scan.save(os.path.join(output_dir, "scantaker-mockup.png"))
print("Saved scantaker-mockup.png", crop_scan.size)

# 2. MedLearnings showcase from media_1793889745543_4242ba24.jpg (1024x682)
im_med = Image.open(os.path.join(uploaded, "media_1793889745543_4242ba24.jpg"))
w, h = im_med.size
print("MedLearnings image size:", w, h)
crop_med = im_med.crop((390, 50, 990, 580))
crop_med.save(os.path.join(output_dir, "medlearnings-mockup.png"))
print("Saved medlearnings-mockup.png", crop_med.size)

# 3. Process Laptop on rock from media_1793889745574_492970d5.jpg (1024x682)
im_proc = Image.open(os.path.join(uploaded, "media_1793889745574_492970d5.jpg"))
w, h = im_proc.size
print("Process image size:", w, h)
crop_proc = im_proc.crop((520, 100, 1010, 420))
crop_proc.save(os.path.join(output_dir, "process-laptop.png"))
print("Saved process-laptop.png", crop_proc.size)

# 4. Hero Laptop from media_1793889836066_991d0455.jpg (682x1024)
im_home = Image.open(os.path.join(uploaded, "media_1793889836066_991d0455.jpg"))
w, h = im_home.size
print("Home image size:", w, h)
crop_hero = im_home.crop((310, 45, 670, 225))
crop_hero.save(os.path.join(output_dir, "hero-laptop.png"))
print("Saved hero-laptop.png", crop_hero.size)

# 5. Lightning bolt from media_1793889745517_fe60eb34.jpg (935x1024)
im_serv = Image.open(os.path.join(uploaded, "media_1793889745517_fe60eb34.jpg"))
w, h = im_serv.size
print("Services image size:", w, h)
crop_bolt = im_serv.crop((70, 720, 270, 900))
crop_bolt.save(os.path.join(output_dir, "lightning-bolt.png"))
print("Saved lightning-bolt.png", crop_bolt.size)

# 6. Logo from Home top navbar
crop_logo = im_home.crop((28, 5, 120, 36))
crop_logo.save(os.path.join(output_dir, "codube-logo-raw.png"))
print("Saved codube-logo-raw.png", crop_logo.size)

print("All asset extractions complete!")
