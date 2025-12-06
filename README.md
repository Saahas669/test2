# 🌍 Random Country Facts

A Flask web application that displays random facts about countries from around the world. Click a button to discover interesting information about different nations!

## Elevator Pitch

**Random Country Facts** is a lightweight, zero-setup geography learning tool that serves random country information with one click. No logins, no databases, no complexity—just instant facts about 50+ countries spanning all continents. Perfect for learning, trivia, or satisfying your curiosity about the world!

## Features

- 🌐 50+ countries with diverse information
- 🎯 Random country selection with one click
- 📱 Fully responsive design for all devices
- ⚡ Fast and lightweight interface
- 🎨 Beautiful gradient UI with smooth animations

## Tech Stack

- **Backend**: Flask (Python 3.12)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Data**: JSON

## Setup Instructions

### 1. Create Virtual Environment
```bash
cd test2
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Application
```bash
python app.py
```

Visit `http://localhost:5000` in your browser.

## Project Structure

```
test2/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── data/
│   └── countries.json    # Country facts database
├── static/
│   ├── css/
│   │   └── style.css     # Styling
│   └── js/
│       └── main.js       # Frontend logic
└── templates/
    └── index.html        # HTML template
```

## How to Use

1. Open the application in your browser
2. Read the current country's facts
3. Click "Get Random Fact" to see another country
4. Explore facts about 50+ countries!

## How It Works (Tutorial)

### Frontend Flow
1. **Page Loads** → JavaScript automatically fetches a random country from the backend
2. **Display** → The country card shows all information: capital, population, area, language, continent, currency, and a fun fact
3. **Click Button** → User clicks "Get Random Fact" button
4. **Fetch Request** → JavaScript sends a request to `/api/random-country` endpoint
5. **New Country** → Backend returns a random country object
6. **Update Display** → JavaScript updates the card with smooth animations

### Backend Flow
- **Flask Routes**: 
  - `/` serves the HTML template
  - `/api/random-country` returns a random country from the JSON database as JSON
- **Data Loading**: When the endpoint is called, it reads `countries.json`, randomly selects one country, and returns it
- **Special Handling**: UTF-8 encoding ensures special characters (¥, €, ₹) display correctly on all platforms

### Code Architecture
```
Browser (HTML/CSS/JS)
    ↓
    → Button Click → Fetch API
    ↓
Flask Server
    ↓
    → /api/random-country → random.choice(countries)
    ↓
    → Returns JSON object
    ↓
JavaScript DOM Update → Display Country Card
```

## Country Data Included

Each country entry contains:
- Country name
- Capital city
- Population
- Land area
- Primary language(s)
- Continent
- Currency
- Interesting unique fact

## License

Feel free to use and modify this project!
