// Store the current country data
let currentCountry = null;

// DOM Elements
const factButton = document.getElementById('factButton');
const cardContent = document.getElementById('cardContent');

// Event Listeners
factButton.addEventListener('click', fetchRandomCountry);

// Fetch random country from backend
async function fetchRandomCountry() {
    factButton.disabled = true;
    cardContent.innerHTML = '<div class="loading">Loading country facts...</div>';

    try {
        const response = await fetch('/api/random-country');
        
        if (!response.ok) {
            throw new Error('Failed to fetch country data');
        }

        const country = await response.json();
        currentCountry = country;
        displayCountry(country);
    } catch (error) {
        console.error('Error:', error);
        cardContent.innerHTML = `<div class="loading" style="color: #e74c3c;">Error loading country. Please try again.</div>`;
    } finally {
        factButton.disabled = false;
    }
}

// Display country information on the card
function displayCountry(country) {
    const html = `
        <div class="country-name">${country.name}</div>
        
        <div class="fact-item">
            <div class="fact-label">Capital</div>
            <div class="fact-value">${country.capital}</div>
        </div>
        
        <div class="fact-item">
            <div class="fact-label">Population</div>
            <div class="fact-value">${country.population}</div>
        </div>
        
        <div class="fact-item">
            <div class="fact-label">Area</div>
            <div class="fact-value">${country.area}</div>
        </div>
        
        <div class="fact-item">
            <div class="fact-label">Language</div>
            <div class="fact-value">${country.language}</div>
        </div>
        
        <div class="fact-item">
            <div class="fact-label">Continent</div>
            <div class="fact-value">${country.continent}</div>
        </div>
        
        <div class="fact-item">
            <div class="fact-label">Currency</div>
            <div class="fact-value">${country.currency}</div>
        </div>
        
        <div class="interesting-fact">
            ✨ ${country.interestingFact}
        </div>
    `;
    
    cardContent.innerHTML = html;
    cardContent.style.animation = 'fadeIn 0.5s ease';
}

// Load initial country on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchRandomCountry();
});
