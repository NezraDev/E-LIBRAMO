from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template('landingpage.html')

@app.route('/login')
def login_page():
    return render_template('login-page.html')