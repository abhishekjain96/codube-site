import urllib.request

html = urllib.request.urlopen('http://localhost:3000/').read().decode('utf-8')

checks = [
    ('Abhishek Jain', 'Abhishek Jain' in html),
    ('Hackathon mention', 'Hackathon' in html),
    ('hello@codube.com', 'hello@codube.com' in html),
    ('9672660338', '9672660338' in html),
    ('Project Estimator', ('Estimate' in html or 'Cost Estimator' in html)),
    ('ScanTaker Project', 'ScanTaker' in html),
    ('MedLearnings Project', 'MedLearnings' in html),
    ('Real Logo Path', '1793895229487_codube_logo.png' in html),
    ('Real Photo Path', '1793899163489_IMG_20230305_232551_148.jpg' in html),
    ('Theme Toggle Absent', 'Toggle theme' not in html and 'Dark/Light' not in html)
]

for name, passed in checks:
    status = 'PASS' if passed else 'FAIL'
    print(f'[{status}] {name}')
