import urllib.request

boundary = "----WebKitFormBoundaryXYZ123"
body = (
    f"--{boundary}\r\n"
    f'Content-Disposition: form-data; name="file"; filename="test_logo.png"\r\n'
    f"Content-Type: image/png\r\n\r\n"
    f"fake-png-data-bytes\r\n"
    f"--{boundary}--\r\n"
).encode("utf-8")

req = urllib.request.Request("http://localhost:3000/api/admin/upload", data=body)
req.add_header("Content-Type", f"multipart/form-data; boundary={boundary}")

try:
    res = urllib.request.urlopen(req)
    print("STATUS:", res.status)
    print("RESPONSE:", res.read().decode())
except Exception as e:
    print("FAILED:", e)
    if hasattr(e, "read"):
        print(e.read().decode())
