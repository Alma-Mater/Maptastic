// Mapping from map data names to canonical country names
const mapToCanonicalName = {
  "Afghanistan": "Afghanistan",
  "Albania": "Albania",
  "Algeria": "Algeria",
  "American Samoa": "Samoa",
  "Andorra": "Andorra",
  "Angola": "Angola",
  "Antigua and Barb.": "Antigua & Barbuda",
  "Argentina": "Argentina",
  "Armenia": "Armenia",
  "Australia": "Australia",
  "Austria": "Austria",
  "Azerbaijan": "Azerbaijan",
  "Bahamas": "Bahamas",
  "Bahrain": "Bahrain",
  "Bangladesh": "Bangladesh",
  "Barbados": "Barbados",
  "Belarus": "Belarus",
  "Belgium": "Belgium",
  "Belize": "Belize",
  "Benin": "Benin",
  "Bhutan": "Bhutan",
  "Bolivia": "Bolivia",
  "Bosnia and Herz.": "Bosnia & Herzegovina",
  "Botswana": "Botswana",
  "Brazil": "Brazil",
  "Brunei": "Brunei",
  "Bulgaria": "Bulgaria",
  "Burkina Faso": "Burkina",
  "Burundi": "Burundi",
  "Cabo Verde": "Cape Verde",
  "Cambodia": "Cambodia",
  "Cameroon": "Cameroon",
  "Canada": "Canada",
  "Central African Rep.": "Central African Republic",
  "Chad": "Chad",
  "Chile": "Chile",
  "China": "China",
  "Colombia": "Colombia",
  "Comoros": "Comoros",
  "Congo": "Republic of the Congo",
  "Costa Rica": "Costa Rica",
  "Côte d'Ivoire": "Ivory Coast",
  "Croatia": "Croatia",
  "Cuba": "Cuba",
  "Cyprus": "Cyprus",
  "Czechia": "Czech Republic",
  "Dem. Rep. Congo": "Democratic Republic of Congo",
  "Denmark": "Denmark",
  "Djibouti": "Djibouti",
  "Dominica": "Dominica",
  "Dominican Rep.": "Dominican Republic",
  "Ecuador": "Ecuador",
  "Egypt": "Egypt",
  "El Salvador": "El Salvador",
  "Eq. Guinea": "Equatorial Guinea",
  "Eritrea": "Eritrea",
  "Estonia": "Estonia",
  "eSwatini": "Swaziland",
  "Ethiopia": "Ethiopia",
  "Fiji": "Fiji",
  "Finland": "Finland",
  "France": "France",
  "Gabon": "Gabon",
  "Gambia": "Gambia",
  "Georgia": "Georgia",
  "Germany": "Germany",
  "Ghana": "Ghana",
  "Greece": "Greece",
  "Grenada": "Grenada",
  "Guatemala": "Guatemala",
  "Guinea": "Guinea",
  "Guinea-Bissau": "Guinea-Bissau",
  "Guyana": "Guyana",
  "Haiti": "Haiti",
  "Honduras": "Honduras",
  "Hungary": "Hungary",
  "Iceland": "Iceland",
  "India": "India",
  "Indonesia": "Indonesia",
  "Iran": "Iran",
  "Iraq": "Iraq",
  "Ireland": "Ireland",
  "Israel": "Israel",
  "Italy": "Italy",
  "Jamaica": "Jamaica",
  "Japan": "Japan",
  "Jordan": "Jordan",
  "Kazakhstan": "Kazakhstan",
  "Kenya": "Kenya",
  "Kiribati": "Kiribati",
  "Kosovo": "Kosovo",
  "Kuwait": "Kuwait",
  "Kyrgyzstan": "Kyrgyzstan",
  "Laos": "Laos",
  "Latvia": "Latvia",
  "Lebanon": "Lebanon",
  "Lesotho": "Lesotho",
  "Liberia": "Liberia",
  "Libya": "Libya",
  "Liechtenstein": "Liechtenstein",
  "Lithuania": "Lithuania",
  "Luxembourg": "Luxembourg",
  "Macedonia": "North Macedonia",
  "Madagascar": "Madagascar",
  "Malawi": "Malawi",
  "Malaysia": "Malaysia",
  "Maldives": "Maldives",
  "Mali": "Mali",
  "Malta": "Malta",
  "Marshall Is.": "Marshall Islands",
  "Mauritania": "Mauritania",
  "Mauritius": "Mauritius",
  "Mexico": "Mexico",
  "Micronesia": "Micronesia",
  "Moldova": "Moldova",
  "Monaco": "Monaco",
  "Mongolia": "Mongolia",
  "Montenegro": "Montenegro",
  "Morocco": "Morocco",
  "Mozambique": "Mozambique",
  "Myanmar": "Myanmar",
  "N. Cyprus": "Cyprus",
  "Namibia": "Namibia",
  "Nauru": "Nauru",
  "Nepal": "Nepal",
  "Netherlands": "Netherlands",
  "New Zealand": "New Zealand",
  "Nicaragua": "Nicaragua",
  "Niger": "Niger",
  "Nigeria": "Nigeria",
  "North Korea": "North Korea",
  "Norway": "Norway",
  "Oman": "Oman",
  "Pakistan": "Pakistan",
  "Palau": "Palau",
  "Palestine": "Palestine",
  "Panama": "Panama",
  "Papua New Guinea": "Papua New Guinea",
  "Paraguay": "Paraguay",
  "Peru": "Peru",
  "Philippines": "Philippines",
  "Poland": "Poland",
  "Portugal": "Portugal",
  "Qatar": "Qatar",
  "Romania": "Romania",
  "Russia": "Russia",
  "Rwanda": "Rwanda",
  "S. Sudan": "South Sudan",
  "Saint Lucia": "St Lucia",
  "Samoa": "Samoa",
  "San Marino": "San Marino",
  "São Tomé and Principe": "Sao Tome & Principe",
  "Saudi Arabia": "Saudi Arabia",
  "Senegal": "Senegal",
  "Serbia": "Serbia",
  "Seychelles": "Seychelles",
  "Sierra Leone": "Sierra Leone",
  "Singapore": "Singapore",
  "Slovakia": "Slovakia",
  "Slovenia": "Slovenia",
  "Solomon Is.": "Solomon Islands",
  "Somalia": "Somalia",
  "South Africa": "South Africa",
  "South Korea": "South Korea",
  "Spain": "Spain",
  "Sri Lanka": "Sri Lanka",
  "St. Kitts and Nevis": "St Kitts & Nevis",
  "St. Vin. and Gren.": "St Vincent & the Grenadines",
  "Sudan": "Sudan",
  "Suriname": "Suriname",
  "Sweden": "Sweden",
  "Switzerland": "Switzerland",
  "Syria": "Syria",
  "Taiwan": "Taiwan",
  "Tajikistan": "Tajikistan",
  "Tanzania": "Tanzania",
  "Thailand": "Thailand",
  "Timor-Leste": "East Timor",
  "Togo": "Togo",
  "Tonga": "Tonga",
  "Trinidad and Tobago": "Trinidad & Tobago",
  "Tunisia": "Tunisia",
  "Turkey": "Turkey",
  "Turkmenistan": "Turkmenistan",
  "Uganda": "Uganda",
  "Ukraine": "Ukraine",
  "United Arab Emirates": "United Arab Emirates",
  "United Kingdom": "United Kingdom",
  "United States of America": "United States",
  "Uruguay": "Uruguay",
  "Uzbekistan": "Uzbekistan",
  "Vanuatu": "Vanuatu",
  "Vatican": "Vatican City",
  "Venezuela": "Venezuela",
  "Vietnam": "Vietnam",
  "Yemen": "Yemen",
  "Zambia": "Zambia",
  "Zimbabwe": "Zimbabwe",
};

// Canonical list of countries (user-facing names from mapping)
const canonicalCountries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nauru (manual)",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent & the Grenadines",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

// State management
let currentSelection = null;
let previousSelections = new Set();
let countriesData = [];
let tooltipTimeout = null;

// DOM elements
const svg = d3.select('#map');
const tooltip = document.getElementById('country-tooltip');
const searchInput = document.getElementById('country-search');
const searchBtn = document.getElementById('search-btn');
const suggestionMessage = document.getElementById('suggestion-message');
const resetBtn = document.getElementById('reset-btn');

// Map dimensions
const width = window.innerWidth;
const height = window.innerHeight - 100; // Leave space for search

// Set SVG dimensions
svg.attr('width', width).attr('height', height);

// Projection and path
const projection = d3.geoMercator()
    .scale(150)
    .translate([width / 2, height / 1.5]);

const path = d3.geoPath().projection(projection);

console.log('SVG dimensions:', width, height);


// Stats box elements
const statsBox = document.getElementById('stats-box');
const countriesLeftSpan = document.getElementById('countries-left');
const countriesPercentSpan = document.getElementById('countries-percent');

// Zoom behavior
const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', (event) => {
        svg.selectAll('g').attr('transform', event.transform);
    });

svg.call(zoom);

function updateStatsBox() {
    const totalCountries = canonicalCountries.length;
    const guessed = previousSelections.size + (currentSelection ? 1 : 0);
    const left = totalCountries - guessed;
    const percent = totalCountries > 0 ? Math.round((guessed / totalCountries) * 100) : 0;
    if (countriesLeftSpan) countriesLeftSpan.textContent = `Countries left: ${left}`;
    if (countriesPercentSpan) countriesPercentSpan.textContent = `Guessed: ${percent}%`;
}

// Load world map data
const worldDataUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

console.log('Loading map data...');

d3.json(worldDataUrl).then(data => {
    console.log('Map data loaded successfully', data);
    
    const countries = topojson.feature(data, data.objects.countries);
    console.log('Countries processed:', countries.features.length);
    
    // Filter and map countries using our mapping
    countriesData = countries.features
        .filter(d => {
            const mapName = d.properties.name || 'Unknown';
            return mapToCanonicalName.hasOwnProperty(mapName);
        })
        .map(d => ({
            geometry: d,
            mapName: d.properties.name || 'Unknown',
            canonicalName: mapToCanonicalName[d.properties.name] || 'Unknown',
            id: d.id
        }));
    
    console.log('Filtered canonical countries:', countriesData.length);
    console.log('Canonical names:', Array.from(new Set(countriesData.map(c => c.canonicalName))).sort());

    // Draw map
    const g = svg.append('g');

    g.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', d => {
            const mapName = d.properties.name || 'Unknown';
            return mapToCanonicalName.hasOwnProperty(mapName) ? 'country' : 'country excluded';
        })
        .attr('d', path)
        .attr('data-map-name', d => d.properties.name || 'Unknown')
        .attr('data-canonical-name', d => mapToCanonicalName[d.properties.name] || '')
        .attr('data-id', d => d.id)
        .on('click', handleCountryClick)
        .on('mouseenter', handleCountryHover)
        .on('mouseleave', hideTooltip);
    
    console.log('Map rendered successfully!');

}).catch(error => {
    console.error('Error loading map data:', error);
    alert('Error loading map. Please check console and ensure you have internet connection.');
});

// Handle country click
function handleCountryClick(event, d) {
    event.stopPropagation();
    
    const mapName = d.properties.name || 'Unknown';
    const canonicalName = mapToCanonicalName[mapName];
    
    // Only handle if this is a mapped country
    if (!canonicalName) return;
    
    const countryElement = event.currentTarget;
    
    // Check if this country is already selected
    const isCurrentSelection = countryElement.classList.contains('current-selection');
    const isPreviousSelection = countryElement.classList.contains('previous-selection');
    
    if (isCurrentSelection || isPreviousSelection) {
        // Toggle off - remove selection
        countryElement.classList.remove('current-selection', 'previous-selection');

        // Remove label
        svg.select(`text[data-country="${canonicalName}"]`).remove();

        if (currentSelection === canonicalName) {
            currentSelection = null;
        }
        previousSelections.delete(canonicalName);
        updateStatsBox();
    } else {
        // Show tooltip temporarily
        showTooltipTemporarily(event, canonicalName);
    }
}

// Handle country hover (show name temporarily)
function handleCountryHover(event, d) {
    const mapName = d.properties.name || 'Unknown';
    const canonicalName = mapToCanonicalName[mapName];
    
    // Only show tooltip for mapped countries
    if (!canonicalName) return;
    
    // Only show tooltip on hover if not already selected
    if (!event.currentTarget.classList.contains('current-selection') && 
        !event.currentTarget.classList.contains('previous-selection')) {
        showTooltipTemporarily(event, canonicalName);
    }
}

// Show tooltip temporarily
function showTooltipTemporarily(event, canonicalName) {
    clearTimeout(tooltipTimeout);
    
    tooltip.textContent = canonicalName;
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY - 30 + 'px';
    tooltip.classList.remove('hidden');
    tooltip.classList.add('visible');
    
    // Hide after 2 seconds
    tooltipTimeout = setTimeout(() => {
        hideTooltip();
    }, 2000);
}

// Hide tooltip
function hideTooltip() {
    tooltip.classList.remove('visible');
    setTimeout(() => {
        if (!tooltip.classList.contains('visible')) {
            tooltip.classList.add('hidden');
        }
    }, 300);
}

// Select country by canonical name
function selectCountry(canonicalName) {
    // Move current selection to previous selections
    if (currentSelection) {
        previousSelections.add(currentSelection);
        const prevElements = svg.selectAll(`path[data-canonical-name="${currentSelection}"]`);
        prevElements.classed('current-selection', false);
        prevElements.classed('previous-selection', true);
        
        // Update label class
        const prevLabel = svg.select(`text[data-country="${currentSelection}"]`);
        if (!prevLabel.empty()) {
            prevLabel.classed('current', false).classed('previous', true);
        }
    }
    
    // Set new current selection
    currentSelection = canonicalName;
    const elements = svg.selectAll(`path[data-canonical-name="${canonicalName}"]`);
    elements.classed('previous-selection', false);
    elements.classed('current-selection', true);
    
    // Add country label
    const node = elements.node();
    if (node) {
        const centroid = path.centroid(node.__data__);
        const g = svg.select('g');
        
        // Remove existing label if any
        g.select(`text[data-country="${canonicalName}"]`).remove();
        
        // Add new label
        g.append('text')
            .attr('class', 'country-label current')
            .attr('data-country', canonicalName)
            .attr('x', centroid[0])
            .attr('y', centroid[1])
            .text(canonicalName);
        
        // Slight zoom to show context (minimal zoom, keep most of map visible)
        const bounds = path.bounds(node.__data__);
        const dx = bounds[1][0] - bounds[0][0];
        const dy = bounds[1][1] - bounds[0][1];
        const x = (bounds[0][0] + bounds[1][0]) / 2;
        const y = (bounds[0][1] + bounds[1][1]) / 2;
        const scale = Math.min(2, 0.9 / Math.max(dx / width, dy / height)); // Max scale of 2
        const translate = [width / 2 - scale * x, height / 2 - scale * y];
        
        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
    }
    
    // Clear search
    searchInput.value = '';
    suggestionMessage.classList.add('hidden');
    updateStatsBox();
}

// Find closest country match using Levenshtein distance
function findClosestCountry(query) {
    if (!query) return null;
    
    const queryLower = query.toLowerCase();
    let bestMatch = null;
    let bestScore = Infinity;
    
    countriesData.forEach(country => {
        const nameLower = country.name.toLowerCase();
        
        // Exact match
        if (nameLower === queryLower) {
            return country;
        }
        
        // Calculate similarity score (simple distance)
        const distance = levenshteinDistance(queryLower, nameLower);
        const startsWith = nameLower.startsWith(queryLower) ? -10 : 0; // Bonus for starts with
        const score = distance + startsWith;
        
        if (score < bestScore) {
            bestScore = score;
            bestMatch = country;
        }
    });
    
    // Only suggest if reasonably close (within 40% of query length difference)
    if (bestMatch && bestScore <= Math.max(3, query.length * 0.4)) {
        return bestMatch;
    }
    
    return null;
}

// Levenshtein distance algorithm for typo detection
function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix = [];
    
    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    
    return matrix[len1][len2];
}

// Handle search - using canonical names
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (query.length === 0) {
        suggestionMessage.classList.add('hidden');
        return;
    }
    
    const queryLower = query.toLowerCase();
    
    // Try to find exact match in canonical names (case insensitive)
    const exactMatch = canonicalCountries.find(
        name => name.toLowerCase() === queryLower
    );
    
    if (exactMatch) {
        selectCountry(exactMatch);
        suggestionMessage.classList.add('hidden');
        return;
    }
    
    // Try partial match (starts with)
    const partialMatch = canonicalCountries.find(
        name => name.toLowerCase().startsWith(queryLower)
    );
    
    if (partialMatch) {
        selectCountry(partialMatch);
        suggestionMessage.classList.add('hidden');
        return;
    }
    
    // No exact match - suggest closest using Levenshtein distance
    let bestMatch = null;
    let bestScore = Infinity;
    
    for (const canonicalName of canonicalCountries) {
        const distance = levenshteinDistance(queryLower, canonicalName.toLowerCase());
        const startsWith = canonicalName.toLowerCase().startsWith(queryLower) ? -10 : 0;
        const score = distance + startsWith;
        
        if (score < bestScore) {
            bestScore = score;
            bestMatch = canonicalName;
        }
    }
    
    // Only suggest if reasonably close (within 40% of query length difference)
    if (bestMatch && bestScore <= Math.max(3, query.length * 0.4)) {
        suggestionMessage.innerHTML = `Did you mean <span class="suggestion-link" data-name="${bestMatch}">${bestMatch}</span>?`;
        suggestionMessage.classList.remove('hidden');
        
        // Add click handler to suggestion
        const suggestionLink = suggestionMessage.querySelector('.suggestion-link');
        suggestionLink.addEventListener('click', () => {
            selectCountry(bestMatch);
            suggestionMessage.classList.add('hidden');
        });
    } else {
        suggestionMessage.innerHTML = `Country "${query}" not found. Please try again.`;
        suggestionMessage.classList.remove('hidden');
    }
}

// Search button click handler
searchBtn.addEventListener('click', handleSearch);

// Handle Enter key
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    } else if (e.key === 'Escape') {
        searchInput.value = '';
        suggestionMessage.classList.add('hidden');
    }
});

// Reset button handler
resetBtn.addEventListener('click', () => {
    // Clear all selections
    currentSelection = null;
    previousSelections.clear();
    
    // Remove all highlight classes
    svg.selectAll('.country')
        .classed('current-selection', false)
        .classed('previous-selection', false);
    
    // Remove all country labels
    svg.selectAll('.country-label').remove();
    
    // Reset zoom
    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
    
    // Clear search
    searchInput.value = '';
    suggestionMessage.classList.add('hidden');
    updateStatsBox();
});

// Close suggestion message when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionMessage.contains(e.target) && !searchBtn.contains(e.target)) {
        suggestionMessage.classList.add('hidden');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight - 100;
    
    svg.attr('width', newWidth).attr('height', newHeight);
    projection.translate([newWidth / 2, newHeight / 1.5]);
    svg.selectAll('path').attr('d', path);
});
