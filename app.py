from flask import Flask, render_template, jsonify
import json
import random
import os

app = Flask(__name__, template_folder='templates', static_folder='static')

# Load countries data
def load_countries():
    data_path = os.path.join(os.path.dirname(__file__), 'data', 'countries.json')
    with open(data_path, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/random-country')
def get_random_country():
    try:
        data = load_countries()
        countries = data.get('countries', [])
        if not countries:
            return jsonify({'error': 'No countries data available'}), 500
        random_country = random.choice(countries)
        return jsonify(random_country)
    except Exception as e:
        print(f"ERROR: {str(e)}")  # Log to console for debugging
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
