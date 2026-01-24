// Tester script for Maptastic
// This script simulates a very fast user entering all canonical countries
// Load this script in index.html to automatically test all countries

(function() {
    console.log('Maptastic Tester loaded');
    
    // Wait for the DOM and app.js to be ready
    function waitForApp() {
        if (typeof canonicalCountries === 'undefined' || 
            !document.getElementById('country-search') ||
            !document.getElementById('search-btn')) {
            console.log('Waiting for app to load...');
            setTimeout(waitForApp, 100);
            return;
        }
        startTest();
    }
    
    function startTest() {
        console.log('Starting automated test...');
        console.log('Total countries to test:', canonicalCountries.length);
        
        const searchInput = document.getElementById('country-search');
        const searchBtn = document.getElementById('search-btn');
        
        let index = 0;
        let successCount = 0;
        let failedCountries = [];
        
        function testNextCountry() {
            if (index >= canonicalCountries.length) {
                // Test complete
                console.log('=== TEST COMPLETE ===');
                console.log('Total countries:', canonicalCountries.length);
                console.log('Successfully marked:', successCount);
                console.log('Failed:', failedCountries.length);
                
                if (failedCountries.length > 0) {
                    console.log('Failed countries:', failedCountries);
                }
                
                // Show alert
                alert(`Test Complete!\n\nTotal: ${canonicalCountries.length}\nSuccessfully marked: ${successCount}\nFailed: ${failedCountries.length}\n\n${failedCountries.length > 0 ? 'Failed countries: ' + failedCountries.join(', ') : 'All countries matched!'}`);
                return;
            }
            
            const country = canonicalCountries[index];
            console.log(`Testing [${index + 1}/${canonicalCountries.length}]: ${country}`);
            
            // Set input value
            searchInput.value = country;
            
            // Trigger input event (in case app listens to it)
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            
            // Click search button
            searchBtn.click();
            
            // Check if the country was successfully selected after a brief delay
            setTimeout(() => {
                // Check if country is now in previousSelections or is currentSelection
                if (previousSelections.has(country) || currentSelection === country) {
                    successCount++;
                    console.log(`✓ ${country} successfully marked`);
                } else {
                    failedCountries.push(country);
                    console.log(`✗ ${country} FAILED to mark`);
                }
                
                index++;
                testNextCountry();
            }, 50); // Small delay between tests
        }
        
        testNextCountry();
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForApp);
    } else {
        waitForApp();
    }
})();
