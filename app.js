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
  "Greenland": "Denmark",
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
  "Somaliland": "Somalia",
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
  "W. Sahara": "Morocco",
  "Yemen": "Yemen",
  "Zambia": "Zambia",
  "Zimbabwe": "Zimbabwe",
};

// Fun facts for each country
const countryFunFacts = {
  "Afghanistan": "Afghanistan 🏏 - Afghanistan's national cricket team rose from refugee camps to qualify for multiple Cricket World Cups in just two decades.",
  "Albania": "Albania 🏰 - Albania has more bunkers per capita than any other country, with over 750,000 concrete bunkers built during the Cold War.",
  "Algeria": "Algeria 🏜️ - Algeria is the largest country in Africa, and over 90% of it is covered by the Sahara Desert.",
  "Andorra": "Andorra ☮️ - Andorra has no army and has been at peace for over 700 years, making it one of the world's most peaceful nations.",
  "Angola": "Angola 💎 - Angola is one of the world's top diamond producers and the Lulo Rose, one of the largest pink diamonds ever found, was discovered here in 2022.",
  "Antigua & Barbuda": "Antigua & Barbuda 🏖️ - Antigua boasts 365 beaches—one for every day of the year.",
  "Argentina": "Argentina 🛣️ - Argentina is home to the world's widest avenue, Avenida 9 de Julio in Buenos Aires, which spans about 140 meters across.",
  "Armenia": "Armenia 🍷 - Armenia is home to the world's oldest known winery, dating back over 6,000 years.",
  "Australia": "Australia 🐕 - Australia has the world's longest fence, the Dingo Fence, stretching over 5,600 kilometers.",
  "Austria": "Austria 🎵 - Austria has produced more famous classical composers per capita than any other country, including Mozart, Strauss, and Schubert.",
  "Azerbaijan": "Azerbaijan 🔥 - Azerbaijan is known as the \"Land of Fire\" due to natural gas fires that blaze continuously on hillsides.",
  "Bahamas": "Bahamas 🐷 - The Bahamas is home to swimming pigs on Big Major Cay, where feral pigs swim in the crystal-clear waters.",
  "Bahrain": "Bahrain 🌳 - Bahrain is home to the \"Tree of Life,\" a 400-year-old mesquite tree thriving alone in the desert with no apparent water source.",
  "Bangladesh": "Bangladesh 🐅 - Bangladesh is home to the Sundarbans, the largest mangrove forest in the world and habitat of the Royal Bengal Tiger.",
  "Barbados": "Barbados 🥃 - Barbados is the birthplace of rum, and Mount Gay Rum, established in 1703, is the world's oldest rum brand.",
  "Belarus": "Belarus 🦬 - Belarus is home to Białowieża Forest, one of Europe's last primeval forests and home to the European bison.",
  "Belgium": "Belgium 🍫 - Belgium produces over 220,000 tons of chocolate per year and has more than 2,000 chocolatiers.",
  "Belize": "Belize 🕳️ - Belize is home to the Great Blue Hole, a giant marine sinkhole over 300 meters wide and 125 meters deep.",
  "Benin": "Benin 🔮 - Benin is the birthplace of Voodoo, which is still practiced as an official religion today.",
  "Bhutan": "Bhutan 😊 - Bhutan is the only country in the world that measures Gross National Happiness instead of GDP.",
  "Bolivia": "Bolivia 🧂 - Bolivia's Salar de Uyuni is the world's largest salt flat, spanning over 10,000 square kilometers and creating mirror-like reflections.",
  "Bosnia & Herzegovina": "Bosnia & Herzegovina ⛪ - Bosnia has a town called Međugorje that reportedly experiences daily apparitions of the Virgin Mary, attracting millions of pilgrims.",
  "Botswana": "Botswana 🐘 - Botswana has the world's largest elephant population, with over 130,000 elephants.",
  "Brazil": "Brazil ⚽ - Brazil has won the FIFA World Cup 5 times, more than any other nation.",
  "Brunei": "Brunei 🕌 - Brunei's Sultan has a car collection worth over $5 billion with more than 7,000 vehicles.",
  "Bulgaria": "Bulgaria 🌹 - Bulgaria is the world's leading producer of rose oil, used in perfumes worldwide.",
  "Burkina": "Burkina Faso 🎬 - Burkina Faso hosts Africa's largest film festival, FESPACO, celebrating African cinema.",
  "Burundi": "Burundi 🥁 - Burundi's traditional drumming has been recognized by UNESCO as part of the world's intangible cultural heritage.",
  "Cambodia": "Cambodia 🏛️ - Cambodia's Angkor Wat is the largest religious monument in the world.",
  "Cameroon": "Cameroon ⚽ - Cameroon was the first African nation to reach the FIFA World Cup quarterfinals in 1990.",
  "Canada": "Canada 🍁 - Canada has more lakes than the rest of the world combined, with over 3 million lakes.",
  "Cape Verde": "Cape Verde 🎵 - Cape Verde is the birthplace of morna music, made famous by singer Cesária Évora.",
  "Central African Republic": "Central African Republic 🦋 - Central African Republic has some of the world's rarest butterflies in its rainforests.",
  "Chad": "Chad 🏜️ - Chad is home to the Ennedi Plateau, featuring stunning rock formations and ancient cave paintings.",
  "Chile": "Chile 🌶️ - Chile is the longest north-south country in the world, stretching over 4,300 kilometers.",
  "China": "China 🐼 - China is home to giant pandas, found nowhere else in the wild, with only about 1,800 remaining.",
  "Colombia": "Colombia ☕ - Colombia produces some of the world's best coffee and is the third-largest coffee producer globally.",
  "Comoros": "Comoros 🌺 - Comoros is known as the \"Perfume Islands\" and produces ylang-ylang, a key ingredient in many perfumes.",
  "Republic of the Congo": "Republic of the Congo 🦍 - The Congo is home to lowland gorillas and bonobo apes found nowhere else.",
  "Costa Rica": "Costa Rica 🌿 - Costa Rica has no standing army and dedicates its resources to education and conservation instead.",
  "Croatia": "Croatia ⚽ - Croatia, with a population of just 4 million, finished as runners-up in the 2018 FIFA World Cup.",
  "Cuba": "Cuba 🚗 - Cuba has thousands of classic American cars from the 1950s still running on its streets.",
  "Cyprus": "Cyprus 🏖️ - Cyprus is the birthplace of Aphrodite, the Greek goddess of love and beauty.",
  "Czech Republic": "Czech Republic 🍺 - Czech Republic has the highest beer consumption per capita in the world.",
  "Democratic Republic of Congo": "Democratic Republic of Congo 🦍 - DRC is home to mountain gorillas and bonobos, our closest living relatives.",
  "Denmark": "Denmark 🚴 - Denmark is one of the happiest countries in the world and has more bicycles than cars.",
  "Djibouti": "Djibouti 🌊 - Djibouti's Lake Assal is the lowest point in Africa and one of the saltiest bodies of water on Earth.",
  "Dominica": "Dominica 🦜 - Dominica is home to the rare Sisserou parrot, found nowhere else in the world.",
  "Dominican Republic": "Dominican Republic ⚾ - The Dominican Republic has produced more Major League Baseball players than any other country outside the US.",
  "East Timor": "East Timor 🏝️ - East Timor is one of the world's youngest countries, gaining independence in 2002.",
  "Ecuador": "Ecuador 🐢 - Ecuador's Galápagos Islands inspired Charles Darwin's theory of evolution.",
  "Egypt": "Egypt 🏛️ - Egypt's pyramids are the only remaining Wonder of the Ancient World.",
  "El Salvador": "El Salvador 🌋 - El Salvador has over 20 volcanoes and is known as the \"Land of Volcanoes.\"",
  "Equatorial Guinea": "Equatorial Guinea 🌴 - Equatorial Guinea is the only Spanish-speaking country in Africa.",
  "Eritrea": "Eritrea 🚴 - Eritrea has a strong cycling culture, and its national team competes internationally.",
  "Estonia": "Estonia 💻 - Estonia is one of the most digitally advanced countries, offering e-residency to anyone in the world.",
  "Swaziland": "Swaziland 👑 - Eswatini (Swaziland) is one of the world's last absolute monarchies.",
  "Ethiopia": "Ethiopia ☕ - Ethiopia is the birthplace of coffee, and the coffee ceremony is an important cultural tradition.",
  "Fiji": "Fiji 🏝️ - Fiji is made up of over 300 islands, and its waters are home to some of the world's best coral reefs.",
  "Finland": "Finland 🎅 - Finland is officially the home of Santa Claus, who lives in Rovaniemi in Lapland.",
  "France": "France 🗼 - France is the most visited country in the world, attracting over 90 million tourists annually.",
  "Gabon": "Gabon 🦍 - Gabon has created 13 national parks, protecting 11% of its territory and its gorilla populations.",
  "Gambia": "Gambia 🌊 - The Gambia is the smallest country in mainland Africa, almost entirely surrounded by Senegal.",
  "Georgia": "Georgia 🍷 - Georgia has an 8,000-year-old winemaking tradition and is considered the birthplace of wine.",
  "Germany": "Germany 🍺 - Germany has over 1,500 breweries and 5,000 different beer varieties.",
  "Ghana": "Ghana 🍫 - Ghana is one of the world's largest cocoa producers, supplying chocolate to the world.",
  "Greece": "Greece 🏛️ - Greece has more than 6,000 islands, though only 227 are inhabited.",
  "Grenada": "Grenada 🌰 - Grenada is known as the \"Spice Isle\" and is a leading producer of nutmeg.",
  "Guatemala": "Guatemala 🌋 - Guatemala has 37 volcanoes, three of which are still active.",
  "Guinea": "Guinea ⛰️ - Guinea has some of the world's largest bauxite reserves, used to make aluminum.",
  "Guinea-Bissau": "Guinea-Bissau 🥜 - Guinea-Bissau is one of the world's major cashew producers.",
  "Guyana": "Guyana 💦 - Guyana is home to Kaieteur Falls, one of the world's most powerful waterfalls.",
  "Haiti": "Haiti 🗽 - Haiti was the first independent black republic and the second independent nation in the Americas.",
  "Honduras": "Honduras 🏛️ - Honduras is home to Copán, one of the most important sites of Mayan civilization.",
  "Hungary": "Hungary ♨️ - Hungary has more thermal springs than any other country, with over 1,000 springs.",
  "Iceland": "Iceland 🌋 - Iceland has more than 200 volcanoes and is one of the most volcanically active places on Earth.",
  "India": "India 🐅 - India is home to the Bengal tiger and has the world's largest population of wild tigers.",
  "Indonesia": "Indonesia 🌋 - Indonesia has more volcanoes than any other country, with over 130 active volcanoes.",
  "Iran": "Iran 🏛️ - Iran was home to the Persian Empire, one of the world's greatest ancient civilizations.",
  "Iraq": "Iraq 📜 - Iraq is home to ancient Mesopotamia, often called the \"Cradle of Civilization.\"",
  "Ireland": "Ireland 🍀 - Ireland has no snakes, according to legend, because St. Patrick drove them all out.",
  "Israel": "Israel 🏜️ - Israel has made the desert bloom with innovative drip irrigation technology.",
  "Italy": "Italy 🍕 - Italy has more UNESCO World Heritage Sites than any other country in the world.",
  "Ivory Coast": "Ivory Coast 🍫 - Ivory Coast is the world's largest cocoa producer, supplying about 40% of global cocoa.",
  "Jamaica": "Jamaica 🏃 - Jamaica has produced the world's fastest runners, including Usain Bolt, the fastest man ever recorded.",
  "Japan": "Japan 🗻 - Japan has more than 6,800 islands and is home to Mount Fuji, an active volcano.",
  "Jordan": "Jordan 🏛️ - Jordan is home to Petra, an ancient city carved into rose-red cliffs over 2,000 years ago.",
  "Kazakhstan": "Kazakhstan 🚀 - Kazakhstan is home to the Baikonur Cosmodrome, the world's first and largest space launch facility.",
  "Kenya": "Kenya 🦁 - Kenya is famous for its wildlife and hosts the Great Migration, one of nature's most spectacular events.",
  "Kiribati": "Kiribati 🌅 - Kiribati is one of the first places to see the sunrise each day.",
  "Kosovo": "Kosovo ⛰️ - Kosovo is one of Europe's youngest countries, declaring independence in 2008.",
  "Kuwait": "Kuwait 🛢️ - Kuwait has the world's sixth-largest oil reserves.",
  "Kyrgyzstan": "Kyrgyzstan 🏔️ - Kyrgyzstan is one of the most mountainous countries, with 90% covered by mountains.",
  "Laos": "Laos 🐘 - Laos was once known as the \"Land of a Million Elephants.\"",
  "Latvia": "Latvia 🌲 - Latvia is one of the greenest countries in Europe, with over half its territory covered by forests.",
  "Lebanon": "Lebanon 🌲 - Lebanon's cedar trees are mentioned over 70 times in the Bible and are a national symbol.",
  "Lesotho": "Lesotho ⛰️ - Lesotho is the only country entirely above 1,000 meters elevation.",
  "Liberia": "Liberia 🗽 - Liberia was founded by freed American slaves and is Africa's oldest republic.",
  "Libya": "Libya 🏜️ - Libya is mostly desert, with over 90% of the country covered by the Sahara.",
  "Liechtenstein": "Liechtenstein 👑 - Liechtenstein is the world's sixth-smallest country and one of the richest per capita.",
  "Lithuania": "Lithuania 🏀 - Basketball is the national sport of Lithuania, and the country consistently ranks among the world's best.",
  "Luxembourg": "Luxembourg 💰 - Luxembourg has the highest GDP per capita in the European Union.",
  "North Macedonia": "North Macedonia 🏛️ - North Macedonia is home to Lake Ohrid, one of Europe's oldest and deepest lakes.",
  "Madagascar": "Madagascar 🐒 - Madagascar is home to lemurs found nowhere else on Earth, with over 100 species.",
  "Malawi": "Malawi 🏞️ - Malawi is home to Lake Malawi, which contains more fish species than any other lake in the world.",
  "Malaysia": "Malaysia 🌴 - Malaysia is home to the world's oldest rainforest, over 130 million years old.",
  "Maldives": "Maldives 🏝️ - The Maldives is the flattest country in the world, with an average elevation of just 1.5 meters.",
  "Mali": "Mali 🏛️ - Mali was home to the ancient city of Timbuktu, a center of Islamic learning and trade.",
  "Malta": "Malta 🏛️ - Malta has some of the world's oldest free-standing structures, predating Stonehenge and the pyramids.",
  "Marshall Islands": "Marshall Islands 🏝️ - The Marshall Islands were used for nuclear testing, and the Bikini Atoll is now a UNESCO World Heritage site.",
  "Mauritania": "Mauritania 🏜️ - Mauritania has the longest train in the world, stretching up to 3 kilometers long.",
  "Mauritius": "Mauritius 🦤 - Mauritius was home to the dodo bird, which went extinct in the 17th century.",
  "Mexico": "Mexico 🌮 - Mexico gave the world chocolate, corn, and chili peppers.",
  "Micronesia": "Micronesia 🏝️ - Micronesia consists of over 600 islands spread across the Pacific Ocean.",
  "Moldova": "Moldova 🍷 - Moldova has the world's largest wine cellar, stretching over 200 kilometers underground.",
  "Monaco": "Monaco 🏎️ - Monaco is the second-smallest country in the world and hosts the famous Formula 1 Grand Prix.",
  "Mongolia": "Mongolia 🐎 - Mongolia has more horses than people and is the birthplace of Genghis Khan.",
  "Montenegro": "Montenegro ⛰️ - Montenegro's name means \"Black Mountain\" and it's home to stunning mountain scenery.",
  "Morocco": "Morocco 🏜️ - Morocco is the gateway to Africa and has the world's oldest continuously operating university.",
  "Mozambique": "Mozambique 🐠 - Mozambique's coastline is over 2,500 kilometers long with pristine beaches.",
  "Myanmar": "Myanmar 🏛️ - Myanmar has over 2,000 ancient temples in Bagan, one of the richest archaeological sites in Asia.",
  "Namibia": "Namibia 🏜️ - Namibia is home to the world's oldest desert, the Namib Desert, at over 55 million years old.",
  "Nauru": "Nauru 🏝️ - Nauru is the world's smallest island nation and the third-smallest country overall.",
  "Nepal": "Nepal 🏔️ - Nepal is home to Mount Everest, the world's highest peak at 8,849 meters.",
  "Netherlands": "Netherlands 🌷 - The Netherlands has more bicycles than people and is famous for its tulips and windmills.",
  "New Zealand": "New Zealand 🥝 - New Zealand has more sheep than people, with about 6 sheep per person.",
  "Nicaragua": "Nicaragua 🌋 - Nicaragua has 19 active volcanoes and is known as the \"Land of Lakes and Volcanoes.\"",
  "Niger": "Niger 🏜️ - Niger is home to some of the world's largest uranium deposits.",
  "Nigeria": "Nigeria 🎬 - Nigeria's film industry, Nollywood, is the second-largest in the world by number of films produced.",
  "North Korea": "North Korea 🏛️ - North Korea has its own calendar based on Kim Il-sung's birth year (1912).",
  "Norway": "Norway 🏔️ - Norway has the world's longest road tunnel, the Lærdal Tunnel, at 24.5 kilometers long.",
  "Oman": "Oman 🏜️ - Oman is one of the oldest continuously inhabited places on Earth, with evidence of human settlement dating back 106,000 years.",
  "Pakistan": "Pakistan 🏔️ - Pakistan is home to K2, the world's second-highest mountain and the most difficult to climb.",
  "Palau": "Palau 🐠 - Palau created the world's first shark sanctuary, protecting sharks across its waters.",
  "Palestine": "Palestine 🏛️ - Palestine is home to some of the world's oldest continuously inhabited cities, including Jericho.",
  "Panama": "Panama 🚢 - The Panama Canal connects the Atlantic and Pacific Oceans and is one of the world's most important waterways.",
  "Papua New Guinea": "Papua New Guinea 🦜 - Papua New Guinea has over 800 languages, the most linguistic diversity of any country.",
  "Paraguay": "Paraguay 🌿 - Paraguay is one of only two landlocked countries in South America.",
  "Peru": "Peru 🏔️ - Peru is home to Machu Picchu, the ancient Incan city high in the Andes Mountains.",
  "Philippines": "Philippines 🏝️ - The Philippines has over 7,600 islands and is the world's second-largest archipelago.",
  "Poland": "Poland 🏰 - Poland has 17 UNESCO World Heritage Sites, including the Wieliczka Salt Mine.",
  "Portugal": "Portugal 🌊 - Portugal is the westernmost country in mainland Europe and a pioneer in maritime exploration.",
  "Qatar": "Qatar ⚽ - Qatar hosted the 2022 FIFA World Cup and has the world's highest GDP per capita.",
  "Romania": "Romania 🏰 - Romania is home to Bran Castle, often associated with the Dracula legend.",
  "Russia": "Russia 🐻 - Russia is the world's largest country, spanning 11 time zones.",
  "Rwanda": "Rwanda 🦍 - Rwanda is home to mountain gorillas, with conservation efforts helping their population grow.",
  "Saint Kitts and Nevis": "Saint Kitts and Nevis 🏝️ - Saint Kitts and Nevis is the smallest sovereign state in the Western Hemisphere.",
  "Saint Lucia": "Saint Lucia 🌋 - Saint Lucia is the only country named after a woman.",
  "Saint Vincent and the Grenadines": "Saint Vincent and the Grenadines 🏝️ - The country consists of 32 islands and cays.",
  "Samoa": "Samoa 🌅 - Samoa was one of the first places to see the sunrise each day until 2011, when it switched time zones.",
  "San Marino": "San Marino 🏰 - San Marino is the world's oldest republic, founded in 301 AD.",
  "Sao Tome and Principe": "São Tomé and Príncipe 🍫 - São Tomé and Príncipe is Africa's second-smallest country and a major cocoa producer.",
  "Saudi Arabia": "Saudi Arabia 🕌 - Saudi Arabia is home to Islam's two holiest cities, Mecca and Medina.",
  "Senegal": "Senegal 🎵 - Senegal is famous for its vibrant music scene and is the birthplace of Youssou N'Dour.",
  "Serbia": "Serbia 🏰 - Serbia has one of the oldest cities in Europe, with Belgrade being over 7,000 years old.",
  "Seychelles": "Seychelles 🏝️ - Seychelles is home to the coco de mer, which produces the largest seed in the plant kingdom.",
  "Sierra Leone": "Sierra Leone 💎 - Sierra Leone is known for its diamond mines and beautiful beaches.",
  "Singapore": "Singapore 🦁 - Singapore is one of only three city-states in the world and is known for its cleanliness and efficiency.",
  "Slovakia": "Slovakia 🏰 - Slovakia has the highest number of castles per capita in the world.",
  "Slovenia": "Slovenia 🐉 - Slovenia's capital, Ljubljana, is said to be protected by a dragon, the city's symbol.",
  "Solomon Islands": "Solomon Islands 🏝️ - The Solomon Islands is made up of nearly 1,000 islands.",
  "Somalia": "Somalia 🐪 - Somalia has the longest coastline in mainland Africa at over 3,300 kilometers.",
  "South Africa": "South Africa 🦏 - South Africa is home to the \"Big Five\" game animals: lion, leopard, rhino, elephant, and buffalo.",
  "South Korea": "South Korea 🎮 - South Korea is the world's most connected country and a global leader in technology.",
  "South Sudan": "South Sudan 🦒 - South Sudan is the world's youngest country, gaining independence in 2011.",
  "Spain": "Spain 🏖️ - Spain is the world's second-most visited country and invented the guitar as we know it.",
  "Sri Lanka": "Sri Lanka 🐘 - Sri Lanka is home to the largest gathering of Asian elephants in the world.",
  "Sudan": "Sudan ⛰️ - Sudan has more pyramids than Egypt, with over 200 ancient pyramids.",
  "Suriname": "Suriname 🌴 - Suriname is the smallest country in South America and over 90% covered by rainforest.",
  "Sweden": "Sweden 🎵 - Sweden has produced more pop music exports per capita than any other country, including ABBA.",
  "Switzerland": "Switzerland 🏔️ - Switzerland has more than 7,000 lakes and is famous for its neutrality and watches.",
  "Syria": "Syria 🏛️ - Syria is home to Damascus, one of the world's oldest continuously inhabited cities.",
  "Taiwan": "Taiwan 🏔️ - Taiwan is home to some of the world's tallest mountains and produces 90% of the world's semiconductors.",
  "Tajikistan": "Tajikistan 🏔️ - Tajikistan is over 90% mountainous, with half the country above 3,000 meters elevation.",
  "Tanzania": "Tanzania 🐘 - Tanzania is home to Mount Kilimanjaro, Africa's highest peak, and the Serengeti.",
  "Thailand": "Thailand 🐘 - Thailand is the only Southeast Asian country never colonized by a European power.",
  "Togo": "Togo 🌴 - Togo is one of the world's smallest countries and is shaped like a thin vertical strip.",
  "Tonga": "Tonga 👑 - Tonga is the only Pacific island nation that was never formally colonized.",
  "Trinidad & Tobago": "Trinidad & Tobago 🎵 - Trinidad and Tobago is the birthplace of steelpan, the only acoustic instrument invented in the 20th century.",
  "Tunisia": "Tunisia 🏛️ - Tunisia is home to ancient Carthage, once a powerful Mediterranean empire.",
  "Turkey": "Turkey 🏛️ - Turkey spans two continents, Europe and Asia, connected by the Bosphorus Strait.",
  "Turkmenistan": "Turkmenistan 🔥 - Turkmenistan has the \"Door to Hell,\" a natural gas crater that's been burning for over 50 years.",
  "Tuvalu": "Tuvalu 🏝️ - Tuvalu is one of the world's smallest and most remote countries, consisting of 9 islands.",
  "Uganda": "Uganda 🦍 - Uganda is home to more than half of the world's remaining mountain gorillas.",
  "Ukraine": "Ukraine 🌻 - Ukraine is the world's largest producer of sunflower oil.",
  "United Arab Emirates": "United Arab Emirates 🏙️ - The UAE is home to the world's tallest building, the Burj Khalifa, at 828 meters.",
  "United Kingdom": "United Kingdom 👑 - The UK has more castles per square mile than any other country.",
  "United States of America": "United States of America 🦅 - The USA has the world's largest economy and more Nobel Prize winners than any other country.",
  "Uruguay": "Uruguay ⚽ - Uruguay won the first-ever FIFA World Cup in 1930, hosting and winning the tournament.",
  "Uzbekistan": "Uzbekistan 🏛️ - Uzbekistan is home to the ancient Silk Road cities of Samarkand and Bukhara.",
  "Vanuatu": "Vanuatu 🌋 - Vanuatu is one of the world's most earthquake-prone countries and has several active volcanoes.",
  "Vatican City": "Vatican City ⛪ - Vatican City is the world's smallest country by both area and population.",
  "Venezuela": "Venezuela 💦 - Venezuela is home to Angel Falls, the world's highest waterfall at 979 meters.",
  "Vietnam": "Vietnam 🏞️ - Vietnam's Ha Long Bay has over 1,600 limestone islands and is a UNESCO World Heritage Site.",
  "Yemen": "Yemen ☕ - Yemen is believed to be where coffee was first cultivated for drinking.",
  "Zambia": "Zambia 💦 - Zambia is home to Victoria Falls, one of the world's largest waterfalls.",
  "Zimbabwe": "Zimbabwe 🏛️ - Zimbabwe is home to the ancient ruins of Great Zimbabwe, a UNESCO World Heritage Site."
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
let labelPositions = []; // Track label positions for collision detection
let countryAreas = new Map(); // Store country areas for sizing decisions
let currentZoomScale = 1; // Track current zoom level for responsive labels

// DOM elements
const svg = d3.select('#map');
const tooltip = document.getElementById('country-tooltip');
const searchInput = document.getElementById('country-search');
const searchBtn = document.getElementById('search-btn');
const suggestionMessage = document.getElementById('suggestion-message');
const resetBtn = document.getElementById('reset-btn');
const funFactContainer = document.getElementById('fun-fact-container');

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
        currentZoomScale = event.transform.k;
        // Update label sizes based on zoom
        updateLabelsForZoom();
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

// Calculate country area for sizing decisions
function getCountryArea(node) {
    const bounds = path.bounds(node.__data__);
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    return dx * dy;
}

// Check if a label position overlaps with existing labels
function checkLabelCollision(x, y, textWidth, textHeight, excludeCountry = null) {
    const padding = 8; // Increased padding for better separation
    for (const pos of labelPositions) {
        if (pos.country === excludeCountry) continue;
        if (x < pos.x + pos.width + padding &&
            x + textWidth + padding > pos.x &&
            y - textHeight - padding < pos.y &&
            y + padding > pos.y - pos.height) {
            return true;
        }
    }
    return false;
}

// Generate spiral search pattern for finding non-colliding positions
function generateSpiralOffsets(maxRadius, step) {
    const offsets = [];
    for (let radius = step; radius <= maxRadius; radius += step) {
        const numPoints = Math.max(8, Math.floor(radius / 8));
        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * 2 * Math.PI;
            offsets.push({
                dx: Math.cos(angle) * radius,
                dy: Math.sin(angle) * radius
            });
        }
    }
    return offsets;
}

// Find optimal label position with aggressive collision avoidance
function findOptimalLabelPosition(centroid, bounds, textWidth, textHeight, countryName) {
    const area = (bounds[1][0] - bounds[0][0]) * (bounds[1][1] - bounds[0][1]);
    const isSmallCountry = area < 1200;
    const isTinyCountry = area < 400;
    
    // For larger countries, try to place inside first
    if (!isSmallCountry && !isTinyCountry) {
        if (!checkLabelCollision(centroid[0] - textWidth/2, centroid[1], textWidth, textHeight, countryName)) {
            return { x: centroid[0], y: centroid[1], needsLeader: false };
        }
    }
    
    // Generate extensive search pattern - spiral outward from centroid
    const maxSearchRadius = isTinyCountry ? 150 : (isSmallCountry ? 120 : 80);
    const stepSize = isTinyCountry ? 15 : 20;
    const spiralOffsets = generateSpiralOffsets(maxSearchRadius, stepSize);
    
    // Add cardinal and diagonal directions at various distances first (preferred)
    const preferredOffsets = [];
    const distances = isTinyCountry ? [25, 40, 60, 80, 100, 130] : [20, 35, 50, 70, 90];
    
    for (const dist of distances) {
        // Prefer right, then upper-right, then above, etc.
        preferredOffsets.push(
            { dx: dist, dy: 0 },           // Right
            { dx: dist * 0.7, dy: -dist * 0.7 },  // Upper right
            { dx: 0, dy: -dist },          // Above
            { dx: -dist * 0.7, dy: -dist * 0.7 }, // Upper left
            { dx: -dist, dy: 0 },          // Left
            { dx: -dist * 0.7, dy: dist * 0.7 },  // Lower left
            { dx: 0, dy: dist },           // Below
            { dx: dist * 0.7, dy: dist * 0.7 }    // Lower right
        );
    }
    
    // Combine preferred with spiral for comprehensive search
    const allOffsets = [...preferredOffsets, ...spiralOffsets];
    
    for (const offset of allOffsets) {
        const testX = centroid[0] + offset.dx;
        const testY = centroid[1] + offset.dy;
        if (!checkLabelCollision(testX - textWidth/2, testY, textWidth, textHeight, countryName)) {
            const dist = Math.sqrt(offset.dx * offset.dx + offset.dy * offset.dy);
            return { 
                x: testX, 
                y: testY, 
                needsLeader: isSmallCountry || isTinyCountry || dist > 25
            };
        }
    }
    
    // Last resort: find the position with minimum overlap
    let bestPos = { x: centroid[0] + 60, y: centroid[1] - 30, needsLeader: true };
    let minOverlaps = Infinity;
    
    for (const offset of allOffsets) {
        const testX = centroid[0] + offset.dx;
        const testY = centroid[1] + offset.dy;
        let overlapCount = 0;
        
        for (const pos of labelPositions) {
            if (pos.country === countryName) continue;
            if (testX - textWidth/2 < pos.x + pos.width + 4 &&
                testX + textWidth/2 + 4 > pos.x &&
                testY - textHeight < pos.y &&
                testY > pos.y - pos.height) {
                overlapCount++;
            }
        }
        
        if (overlapCount < minOverlaps) {
            minOverlaps = overlapCount;
            bestPos = { x: testX, y: testY, needsLeader: true };
        }
    }
    
    return bestPos;
}

// Add a smart label with optional leader line
function addSmartLabel(g, node, countryName, isCurrent) {
    const centroid = path.centroid(node.__data__);
    const bounds = path.bounds(node.__data__);
    const area = (bounds[1][0] - bounds[0][0]) * (bounds[1][1] - bounds[0][1]);
    
    // Base font size calculation (much smaller at default zoom)
    let baseFontSize;
    if (area > 8000) {
        baseFontSize = Math.min(10, Math.max(6, 10 - countryName.length * 0.1));
    } else if (area > 3000) {
        baseFontSize = Math.min(8, Math.max(5, 8 - countryName.length * 0.08));
    } else if (area > 1000) {
        baseFontSize = Math.min(6, Math.max(4, 6 - countryName.length * 0.06));
    } else if (area > 300) {
        baseFontSize = Math.min(5, Math.max(3.5, 5 - countryName.length * 0.04));
    } else {
        baseFontSize = Math.min(4, Math.max(3, 4 - countryName.length * 0.03));
    }
    
    // Scale font size with zoom level - labels get larger as you zoom in
    const zoomFactor = Math.pow(currentZoomScale, 0.4); // Gentler scaling
    let fontSize = baseFontSize * zoomFactor;
    
    // At high zoom, make labels larger and more readable
    if (currentZoomScale > 2) {
        fontSize = Math.min(fontSize * 1.2, 16);
    }
    
    if (isCurrent) fontSize = Math.min(fontSize * 1.15, 18);
    
    // Estimate text dimensions
    const charWidth = fontSize * 0.5;
    const textWidth = countryName.length * charWidth;
    const textHeight = fontSize + 2;
    
    // Try to fit label inside country first
    const countryWidth = bounds[1][0] - bounds[0][0];
    const countryHeight = bounds[1][1] - bounds[0][1];
    const fitsInside = textWidth < countryWidth * 0.8 && textHeight < countryHeight * 0.6;
    
    let pos;
    if (fitsInside && area > 500) {
        // Label fits inside - place at centroid
        pos = { x: centroid[0], y: centroid[1], needsLeader: false };
    } else {
        // Label needs offset position
        pos = findOptimalLabelPosition(centroid, bounds, textWidth, textHeight, countryName);
    }
    
    // Remove old label position tracking for this country
    labelPositions = labelPositions.filter(p => p.country !== countryName);
    
    // Add leader line if needed (only for small/offset labels)
    if (pos.needsLeader && area < 800) {
        g.append('line')
            .attr('class', `leader-line ${isCurrent ? 'current' : 'previous'}`)
            .attr('data-leader', countryName)
            .attr('x1', centroid[0])
            .attr('y1', centroid[1])
            .attr('x2', pos.x)
            .attr('y2', pos.y - fontSize/3);
    }
    
    // Add background rectangle for readability
    g.append('rect')
        .attr('class', `label-bg ${isCurrent ? 'current' : 'previous'}`)
        .attr('data-label-bg', countryName)
        .attr('x', pos.x - textWidth/2 - 2)
        .attr('y', pos.y - textHeight + 2)
        .attr('width', textWidth + 4)
        .attr('height', textHeight + 1)
        .attr('rx', 1.5);
    
    // Add text label
    g.append('text')
        .attr('class', `country-label ${isCurrent ? 'current' : 'previous'}`)
        .attr('data-country', countryName)
        .attr('x', pos.x)
        .attr('y', pos.y)
        .attr('font-size', fontSize + 'px')
        .text(countryName);
    
    // Track this label position
    labelPositions.push({
        country: countryName,
        x: pos.x - textWidth/2,
        y: pos.y,
        width: textWidth,
        height: textHeight
    });
}

// Update all labels when zoom changes
function updateLabelsForZoom() {
    const g = svg.select('g');
    
    // Update current selection label
    if (currentSelection) {
        const elements = svg.selectAll(`path[data-canonical-name="${currentSelection}"]`);
        const node = elements.node();
        if (node) {
            g.select(`text[data-country="${currentSelection}"]`).remove();
            g.select(`line[data-leader="${currentSelection}"]`).remove();
            g.select(`rect[data-label-bg="${currentSelection}"]`).remove();
            addSmartLabel(g, node, currentSelection, true);
        }
    }
    
    // Update previous selection labels
    previousSelections.forEach(countryName => {
        const elements = svg.selectAll(`path[data-canonical-name="${countryName}"]`);
        const node = elements.node();
        if (node) {
            g.select(`text[data-country="${countryName}"]`).remove();
            g.select(`line[data-leader="${countryName}"]`).remove();
            g.select(`rect[data-label-bg="${countryName}"]`).remove();
            addSmartLabel(g, node, countryName, false);
        }
    });
}

// Select country by canonical name
function selectCountry(canonicalName) {
    // Move current selection to previous selections
    if (currentSelection) {
        previousSelections.add(currentSelection);
        const prevElements = svg.selectAll(`path[data-canonical-name="${currentSelection}"]`);
        prevElements.classed('current-selection', false);
        prevElements.classed('previous-selection', true);
        
        // Update label to previous style
        const g = svg.select('g');
        const prevLabel = g.select(`text[data-country="${currentSelection}"]`);
        const prevBg = g.select(`rect[data-label-bg="${currentSelection}"]`);
        const prevLeader = g.select(`line[data-leader="${currentSelection}"]`);
        
        if (!prevLabel.empty()) {
            prevLabel.classed('current', false).classed('previous', true);
        }
        if (!prevBg.empty()) {
            prevBg.classed('current', false).classed('previous', true);
        }
        if (!prevLeader.empty()) {
            prevLeader.classed('current', false).classed('previous', true);
        }
    }
    
    // Set new current selection
    currentSelection = canonicalName;
    const elements = svg.selectAll(`path[data-canonical-name="${canonicalName}"]`);
    elements.classed('previous-selection', false);
    elements.classed('current-selection', true);
    
    // Add country label with smart positioning
    const node = elements.node();
    if (node) {
        const g = svg.select('g');
        
        // Remove existing label and leader line if any
        g.select(`text[data-country="${canonicalName}"]`).remove();
        g.select(`line[data-leader="${canonicalName}"]`).remove();
        g.select(`rect[data-label-bg="${canonicalName}"]`).remove();
        
        // Add smart label
        addSmartLabel(g, node, canonicalName, true);
        
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
    
    // Display fun fact for this country
    displayFunFact(canonicalName);
    
    updateStatsBox();
}

// Display fun fact for a country
function displayFunFact(countryName) {
    const funFact = countryFunFacts[countryName];
    if (funFact && funFactContainer) {
        funFactContainer.textContent = funFact;
        funFactContainer.classList.remove('hidden');
        funFactContainer.classList.add('visible');
    }
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
    labelPositions = []; // Clear label position tracking
    
    // Remove all highlight classes
    svg.selectAll('.country')
        .classed('current-selection', false)
        .classed('previous-selection', false);
    
    // Remove all country labels, backgrounds, and leader lines
    svg.selectAll('.country-label').remove();
    svg.selectAll('.label-bg').remove();
    svg.selectAll('.leader-line').remove();
    
    // Reset zoom
    svg.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
    
    // Clear search
    searchInput.value = '';
    suggestionMessage.classList.add('hidden');
    
    // Hide fun fact
    if (funFactContainer) {
        funFactContainer.classList.add('hidden');
        funFactContainer.classList.remove('visible');
    }
    
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
