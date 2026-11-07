import urllib.request

urls = [
    ("Homepage", "http://localhost:3000/"),
    ("Services", "http://localhost:3000/services"),
    ("Work", "http://localhost:3000/work"),
    ("ScanTaker Detail", "http://localhost:3000/work/scantaker"),
    ("MedLearnings Detail", "http://localhost:3000/work/medlearnings"),
    ("About", "http://localhost:3000/about"),
    ("Process", "http://localhost:3000/process"),
    ("Contact", "http://localhost:3000/contact"),
    ("Admin Studio", "http://localhost:3000/admin"),
    ("3D Brand Video", "http://localhost:3000/media/hero/codube_3d_brand_animation.mp4")
]

print("=== CHECKING ENDPOINTS ===")
for name, url in urls:
    try:
        req = urllib.request.urlopen(url)
        print(f"[PASS {req.status}] {name}: {url}")
    except Exception as e:
        print(f"[FAIL] {name}: {url} -> {e}")

print("\n=== VERIFYING CONTENT ON HOMEPAGE ===")
html = urllib.request.urlopen("http://localhost:3000/").read().decode("utf-8")

checks = [
    ("Brand Tagline (SOFTWARE • AI • AUTOMATION)", "SOFTWARE" in html and "AUTOMATION" in html),
    ("Headline (Products That Move)", "Products That Move" in html or "Business Forward" in html),
    ("3D Brand Animation Video", "codube_3d_brand_animation.mp4" in html),
    ("CODUBE vs Typical Agency Comparison Table", "Typical Agency" in html or "HEAD-TO-HEAD COMPARISON" in html),
    ("Abhishek Jain (1st Rank Hackathon Winner)", "Abhishek Jain" in html and "Hackathon" in html),
    ("Dynamic Projects (ScanTaker & MedLearnings)", "ScanTaker" in html and "MedLearnings" in html),
    ("Preloader Logic", "Preloader" in html or "SYSTEM INIT" in html or "CODUBE." in html),
]

for label, passed in checks:
    status = "PASS" if passed else "FAIL"
    print(f"[{status}] {label}")
