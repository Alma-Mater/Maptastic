// Update app.js with mapping from mapping_template.csv
const fs = require('fs');

console.log('Reading mapping_template.csv...');
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

console.log(`Parsed ${Object.keys(mapToCanonical).length} map entries`);
console.log(`Found ${canonicalSet.size} unique canonical countries`);

// Generate the mapping object as JavaScript code
let mappingCode = '// Mapping from map data names to canonical country names\n';
mappingCode += 'const mapToCanonicalName = {\n';

const sortedEntries = Object.entries(mapToCanonical).sort((a, b) => a[0].localeCompare(b[0]));
for (const [mapName, canonicalName] of sortedEntries) {
  // Escape special characters
  const escapedMapName = mapName.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const escapedCanonical = canonicalName.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  mappingCode += `  "${escapedMapName}": "${escapedCanonical}",\n`;
}

mappingCode += '};\n\n';

// Generate the canonical countries array
mappingCode += '// Canonical list of countries (user-facing names from mapping)\n';
mappingCode += 'const canonicalCountries = [\n';
const sortedCanonical = Array.from(canonicalSet).sort();
mappingCode += '  ' + sortedCanonical.map(name => `"${name.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`).join(',\n  ');
mappingCode += '\n];';

// Read app.js
console.log('Reading app.js...');
const appJs = fs.readFileSync('app.js', 'utf-8');

// Find and replace the mapping section
const mappingStart = appJs.indexOf('// Mapping from map data names to canonical country names');
const mappingEnd = appJs.indexOf('// State management', mappingStart);

if (mappingStart === -1 || mappingEnd === -1) {
  console.error('ERROR: Could not find mapping section in app.js');
  console.error('Make sure app.js has the correct structure with mapping comments');
  process.exit(1);
}

// Replace the mapping section
const before = appJs.substring(0, mappingStart);
const after = appJs.substring(mappingEnd);
const newAppJs = before + mappingCode + '\n\n' + after;

// Write back to app.js
fs.writeFileSync('app.js', newAppJs, 'utf-8');
console.log('✓ app.js updated successfully!');
console.log(`\nStats:`);
console.log(`  - ${Object.keys(mapToCanonical).length} map entries mapped`);
console.log(`  - ${canonicalSet.size} canonical countries`);
console.log(`\nYou can now reload your app to see the changes.`);
