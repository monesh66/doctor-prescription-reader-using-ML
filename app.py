from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
import mysql.connector
from flask_session import Session



app = Flask(__name__,static_url_path='/static')


#==================================== /home page =================================================
@app.route('/')
@app.route('/home')
def home():
    
    return render_template('home.html',logined=0,username="monesh");



#app.run(debug=True, port=5003)