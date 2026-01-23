// Pre-fill mapping template with best matches from canonical list
const fs = require('fs');
const https = require('https');

const canonicalCountries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","North Korea","South Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","St Kitts & Nevis","St Lucia","Saint Vincent & the Grenadines","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

// Known aliases
const knownAliases = {
  "Côte d'Ivoire": "Ivory Coast",
  "Czechia": "Czech Republic",
  "Cabo Verde": "Cape Verde",
  "Timor-Leste": "East Timor",
  "United States of America": "United States",
  "Macedonia": "North Macedonia",
  "eSwatini": "Swaziland",
  "São Tomé and Principe": "Sao Tome & Principe",
  "Sao Tome and Principe": "Sao Tome & Principe",
  "St. Kitts and Nevis": "St Kitts & Nevis",
  "Saint Lucia": "St Lucia",
  "St. Lucia": "St Lucia",
  "St. Vin. and Gren.": "Saint Vincent & the Grenadines",
  "St. Vincent and the Grenadines": "Saint Vincent & the Grenadines",
  "Trinidad and Tobago": "Trinidad & Tobago",
  "Marshall Is.": "Marshall Islands",
  "Solomon Is.": "Solomon Islands",
  "Bosnia and Herz.": "Bosnia Herzegovina",
  "Central African Rep.": "Central African Republic",
  "Dem. Rep. Congo": "Congo",
  "Eq. Guinea": "Equatorial Guinea",
  "Dominican Rep.": "Dominican Republic",
  "N. Cyprus": "Cyprus",
  "Falkland Is.": "",
  "Fr. S. Antarctic Lands": "",
  "Greenland": "",
  "New Caledonia": "",
  "Puerto Rico": "",
  "W. Sahara": "",
  "Somaliland": "",
};

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
  return countries.features.map(f => f.properties.name).sort();
}

function findBestMatch(mapName) {
  // Check known aliases first
  if (knownAliases.hasOwnProperty(mapName)) {
    return knownAliases[mapName];
  }
  
  // Try exact match (case-insensitive)
  const exactMatch = canonicalCountries.find(c => c.toLowerCase() === mapName.toLowerCase());
  if (exactMatch) return exactMatch;
  
  // Try contains match (map name contains canonical or vice versa)
  const mapLower = mapName.toLowerCase();
  const containsMatch = canonicalCountries.find(c => {
    const cLower = c.toLowerCase();
    return (mapLower.includes(cLower) || cLower.includes(mapLower)) && 
           Math.abs(mapLower.length - cLower.length) < 10;
  });
  if (containsMatch) return containsMatch;
  
  // No match found
  return "";
}

(async () => {
  const mapData = await fetchMapData(mapUrl);
  const mapNames = getMapCountryNames(mapData);
  
  let csv = 'Map Data Name,Your Canonical Name,Notes\n';
  let matchedCount = 0;
  let unmatchedCount = 0;
  
  for (const mapName of mapNames) {
    const canonicalMatch = findBestMatch(mapName);
    csv += `"${mapName}","${canonicalMatch}",""\n`;
    if (canonicalMatch) {
      matchedCount++;
    } else {
      unmatchedCount++;
    }
  }
  
  fs.writeFileSync('mapping_template.csv', csv);
  console.log('mapping_template.csv created with pre-filled matches!');
  console.log(`Total map entries: ${mapNames.length}`);
  console.log(`Pre-matched: ${matchedCount}`);
  console.log(`Need manual review: ${unmatchedCount}`);
  console.log('\nPlease review and edit:');
  console.log('- Check all pre-filled matches are correct');
  console.log('- Fill in blank entries if they should be included');
  console.log('- Leave blank to exclude territories/dependencies');
})();
