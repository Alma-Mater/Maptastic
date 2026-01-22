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
    const totalCountries = countriesData.length || 196;
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
    
    // Create countries array with names
    countriesData = countries.features.map(d => ({
        geometry: d,
        name: d.properties.name || 'Unknown',
        id: d.id
    }));
    
    console.log('Available countries:', countriesData.map(c => c.name).sort());

    // Draw map
    const g = svg.append('g');

    g.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('data-name', d => d.properties.name || 'Unknown')
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
    
    const countryName = d.properties.name || 'Unknown';
    const countryElement = event.currentTarget;
    
    // Check if this country is already selected
    const isCurrentSelection = countryElement.classList.contains('current-selection');
    const isPreviousSelection = countryElement.classList.contains('previous-selection');
    
    if (isCurrentSelection || isPreviousSelection) {
        // Toggle off - remove selection
        countryElement.classList.remove('current-selection', 'previous-selection');

        // Remove label
        svg.select(`text[data-country="${countryName}"]`).remove();

        if (currentSelection === countryName) {
            currentSelection = null;
        }
        previousSelections.delete(countryName);
        updateStatsBox();
    } else {
        // Show tooltip temporarily
        showTooltipTemporarily(event, countryName);
    }
}

// Handle country hover (show name temporarily)
function handleCountryHover(event, d) {
    const countryName = d.properties.name || 'Unknown';
    // Only show tooltip on hover if not already selected
    if (!event.currentTarget.classList.contains('current-selection') && 
        !event.currentTarget.classList.contains('previous-selection')) {
        showTooltipTemporarily(event, countryName);
    }
}

// Show tooltip temporarily
function showTooltipTemporarily(event, countryName) {
    clearTimeout(tooltipTimeout);
    
    tooltip.textContent = countryName;
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

// Select country by name
function selectCountry(countryName) {
    // Move current selection to previous selections
    if (currentSelection) {
        previousSelections.add(currentSelection);
        const prevElement = svg.select(`path[data-name="${currentSelection}"]`);
        prevElement.classed('current-selection', false);
        prevElement.classed('previous-selection', true);
        
        // Update label class
        const prevLabel = svg.select(`text[data-country="${currentSelection}"]`);
        if (!prevLabel.empty()) {
            prevLabel.classed('current', false).classed('previous', true);
        }
    }
    
    // Set new current selection
    currentSelection = countryName;
    const element = svg.select(`path[data-name="${countryName}"]`);
    element.classed('previous-selection', false);
    element.classed('current-selection', true);
    
    // Add country label
    const node = element.node();
    if (node) {
        const centroid = path.centroid(node.__data__);
        const g = svg.select('g');
        
        // Remove existing label if any
        g.select(`text[data-country="${countryName}"]`).remove();
        
        // Add new label
        g.append('text')
            .attr('class', 'country-label current')
            .attr('data-country', countryName)
            .attr('x', centroid[0])
            .attr('y', centroid[1])
            .text(countryName);
        
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

// Handle search
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (query.length === 0) {
        suggestionMessage.classList.add('hidden');
        return;
    }
    
    // Try to find exact match (case insensitive)
    const exactMatch = countriesData.find(
        country => country.name.toLowerCase() === query.toLowerCase()
    );
    
    if (exactMatch) {
        selectCountry(exactMatch.name);
        suggestionMessage.classList.add('hidden');
        return;
    }
    
    // Try partial match (starts with)
    const partialMatch = countriesData.find(
        country => country.name.toLowerCase().startsWith(query.toLowerCase())
    );
    
    if (partialMatch) {
        selectCountry(partialMatch.name);
        suggestionMessage.classList.add('hidden');
        return;
    }
    
    // No exact match - suggest closest
    const closestMatch = findClosestCountry(query);
    
    if (closestMatch) {
        suggestionMessage.innerHTML = `Did you mean <span class="suggestion-link" data-name="${closestMatch.name}">${closestMatch.name}</span>?`;
        suggestionMessage.classList.remove('hidden');
        
        // Add click handler to suggestion
        const suggestionLink = suggestionMessage.querySelector('.suggestion-link');
        suggestionLink.addEventListener('click', () => {
            selectCountry(closestMatch.name);
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
