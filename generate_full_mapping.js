// Generate a CSV with ALL map data entries for manual editing
const fs = require('fs');
const https = require('https');

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

(async () => {
  const mapData = await fetchMapData(mapUrl);
  const mapNames = getMapCountryNames(mapData);
  
  let csv = 'Map Data Name,Your Canonical Name,Notes\n';
  
  for (const mapName of mapNames) {
    csv += `"${mapName}","",""\n`;
  }
  
  fs.writeFileSync('mapping_template.csv', csv);
  console.log('mapping_template.csv created successfully!');
  console.log(`Total map entries: ${mapNames.length}`);
  console.log('\nInstructions:');
  console.log('1. Fill in "Your Canonical Name" column with one of your 196 country names');
  console.log('2. Leave blank to EXCLUDE that map entry (territories, dependencies, etc.)');
  console.log('3. Multiple map entries can map to the same canonical name');
  console.log('4. Save the file when done');
})();
