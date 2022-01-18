from flask import Flask, request, flash, url_for, redirect, render_template, Request
from flask_sqlalchemy import SQLAlchemy
from flask import json
import key
#import requests
#import pandas as pd

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/search', methods=['GET', 'POST'])
def search():
    return render_template('home.html')


@app.route('/merge')
def mergedResults():
    return 0


if __name__ == '__main__':
    app.run()
