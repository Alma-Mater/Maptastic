// Script to create a comprehensive mapping between canonical country names and map data names
const fs = require('fs');
const https = require('https');

// Your canonical list of 196 countries
const canonicalCountries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","North Korea","South Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","St Kitts & Nevis","St Lucia","Saint Vincent & the Grenadines","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const mapUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

function fetchMapData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function getMapCountryNames(mapData) {
  const topojson = require('topojson-client');
  const countries = topojson.feature(mapData, mapData.objects.countries);
  return countries.features.map(f => f.properties.name);
}

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
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[len1][len2];
}

(async () => {
  const mapData = await fetchMapData(mapUrl);
  const mapNames = getMapCountryNames(mapData);
  
  let csv = 'Canonical Name,Map Data Name,Match Type,Distance\n';
  
  for (const canonical of canonicalCountries) {
    // Try exact match first (case-insensitive)
    let exactMatch = mapNames.find(mn => mn.toLowerCase() === canonical.toLowerCase());
    
    if (exactMatch) {
      csv += `"${canonical}","${exactMatch}","EXACT",0\n`;
      continue;
    }
    
    // Try partial match (map name contains canonical or vice versa)
    let partialMatch = mapNames.find(mn => 
      mn.toLowerCase().includes(canonical.toLowerCase()) || 
      canonical.toLowerCase().includes(mn.toLowerCase())
    );
    
    if (partialMatch) {
      const distance = levenshteinDistance(canonical.toLowerCase(), partialMatch.toLowerCase());
      csv += `"${canonical}","${partialMatch}","PARTIAL",${distance}\n`;
      continue;
    }
    
    // Find closest match by Levenshtein distance
    let bestMatch = null;
    let bestDistance = Infinity;
    
    for (const mapName of mapNames) {
      const distance = levenshteinDistance(canonical.toLowerCase(), mapName.toLowerCase());
      if (distance < bestDistance) {
        bestDistance = distance;
        bestMatch = mapName;
      }
    }
    
    if (bestMatch && bestDistance <= 10) {
      csv += `"${canonical}","${bestMatch}","FUZZY",${bestDistance}\n`;
    } else {
      csv += `"${canonical}","","NO_MATCH",999\n`;
    }
  }
  
  fs.writeFileSync('country_name_mapping.csv', csv);
  console.log('country_name_mapping.csv created successfully!');
  console.log(`Total canonical countries: ${canonicalCountries.length}`);
  console.log(`Total map countries: ${mapNames.length}`);
})();
