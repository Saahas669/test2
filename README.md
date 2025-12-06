# 🌍 Random Country Facts

A Flask web application that displays random facts about countries from around the world. Click a button to discover interesting information about different nations!

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
