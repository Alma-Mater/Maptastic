// Parse the mapping CSV and generate code for app.js
const fs = require('fs');

const csvContent = fs.readFileSync('mapping_template.csv', 'utf-8');
const lines = csvContent.split('\n');

// Skip header
const dataLines = lines.slice(1).filter(line => line.trim());

const mapToCanonical = {};
const canonicalSet = new Set();

for (const line of dataLines) {
  // Simple CSV parsing - handle quoted fields
  const match = line.match(/^"?([^"]*)"?,\s*"?([^"]*)"?,/);
  if (match) {
    const mapName = match[1];
    const canonicalName = match[2].trim();
    
    if (canonicalName) {
      mapToCanonical[mapName] = canonicalName;
      canonicalSet.add(canonicalName);
    }
  }
}

console.log(`Total map entries with canonical mapping: ${Object.keys(mapToCanonical).length}`);
console.log(`Unique canonical countries: ${canonicalSet.size}`);

// Generate the mapping object as JavaScript code
let jsCode = '// Mapping from map data names to canonical country names\n';
jsCode += 'const mapToCanonicalName = {\n';

const sortedEntries = Object.entries(mapToCanonical).sort((a, b) => a[0].localeCompare(b[0]));
for (const [mapName, canonicalName] of sortedEntries) {
  // Escape special characters
  const escapedMapName = mapName.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const escapedCanonical = canonicalName.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  jsCode += `  "${escapedMapName}": "${escapedCanonical}",\n`;
}

jsCode += '};\n\n';

// Generate the canonical countries array
jsCode += '// Canonical list of countries (user-facing names)\n';
jsCode += 'const canonicalCountries = [\n';
const sortedCanonical = Array.from(canonicalSet).sort();
jsCode += '  ' + sortedCanonical.map(name => `"${name.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`).join(',\n  ');
jsCode += '\n];\n';

fs.writeFileSync('mapping_code.js', jsCode);
console.log('\nmapping_code.js created!');
console.log('This file contains the mapping object and canonical countries array.');
console.log('\nCanonical countries found:');
console.log(sortedCanonical.join(', '));
