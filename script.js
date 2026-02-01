// Fragrantic.ai - Enhanced Perfume Recommendation Engine

// Expanded Perfume Database (20+ perfumes)
const perfumeDatabase = [
    // Erkek / Unisex - Yoğun
    {
        id: 1,
        name: "Aventus",
        brand: "Creed",
        gender: "E",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern", "Klasik"],
        strength: "Yoğun",
        notes: ["Bergamot", "Ananas", "Meşe Yosunu"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "Güç ve başarıyı simgeleyen ikonik bir koku."
    },
    {
        id: 2,
        name: "Sauvage",
        brand: "Dior",
        gender: "E",
        seasons: ["ilkbahar", "yaz", "sonbahar", "kış"],
        vibes: ["Modern", "Sportif"],
        strength: "Orta",
        notes: ["Bergamot", "Biber", "Ambroxan"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], character: ["energetic", "classic"] },
        description: "Taze ve karizmatik. Her ortama uyum sağlar."
    },
    {
        id: 3,
        name: "Bleu de Chanel",
        brand: "Chanel",
        gender: "E",
        seasons: ["ilkbahar", "yaz", "sonbahar", "kış"],
        vibes: ["Klasik", "Modern"],
        strength: "Orta",
        notes: ["Greyfurt", "Nane", "Sedir"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["classic", "sophisticated"] },
        description: "Zarafet ve özgürlüğün mükemmel dengesi."
    },
    {
        id: 4,
        name: "Oud Wood",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Ud", "Sandal", "Vetiver"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "night"], character: ["sophisticated", "classic", "mysterious"] },
        description: "Zamansız sofistikasyon. Rafine zevklerin tercihi."
    },
    {
        id: 5,
        name: "Tobacco Vanille",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Tütün", "Vanilya", "Kakao"],
        tags: { age: ["36-50", "50+"], environment: ["night"], character: ["sophisticated", "mysterious", "classic"] },
        description: "Zengin ve opulent. Kış gecelerinin sıcak kucaklaması."
    },
    {
        id: 6,
        name: "La Nuit de L'Homme",
        brand: "Yves Saint Laurent",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Kakule", "Lavanta", "Sedir"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["mysterious", "energetic"] },
        description: "Baştan çıkarıcı ve yoğun. Romantik gecelerin favorisi."
    },
    {
        id: 7,
        name: "Terre d'Hermès",
        brand: "Hermès",
        gender: "E",
        seasons: ["ilkbahar", "yaz", "sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Greyfurt", "Biber", "Vetiver"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "creative"], character: ["classic", "sophisticated"] },
        description: "Toprak ve gökyüzü arasında. Olgun ve dengeli."
    },
    {
        id: 8,
        name: "Acqua di Gio Profumo",
        brand: "Giorgio Armani",
        gender: "E",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern", "Sportif"],
        strength: "Hafif",
        notes: ["Bergamot", "Deniz Notaları", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["outdoor", "creative"], character: ["energetic", "classic"] },
        description: "Deniz esintisi ve maskülenlik. Yaz günlerinin favorisi."
    },
    // Kadın Parfümleri
    {
        id: 9,
        name: "Black Opium",
        brand: "Yves Saint Laurent",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Kahve", "Vanilya", "Beyaz Çiçekler"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["mysterious", "energetic"] },
        description: "Bağımlılık yapan bir enerji. Gece hayatının yıldızı."
    },
    {
        id: 10,
        name: "J'adore",
        brand: "Dior",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Ylang-Ylang", "Gül", "Yasemin"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "Zamansız kadınsılık. Şık ve zarif."
    },
    {
        id: 11,
        name: "Coco Mademoiselle",
        brand: "Chanel",
        gender: "K",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Klasik", "Modern"],
        strength: "Orta",
        notes: ["Portakal", "Gül", "Paçuli"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "energetic"] },
        description: "Genç ve taze. Modern kadının imza kokusu."
    },
    {
        id: 12,
        name: "La Vie Est Belle",
        brand: "Lancôme",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Iris", "Pralin", "Vanilya"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["sophisticated", "classic"] },
        description: "Mutluluk ve zarafetin kokusu."
    },
    // Niş Parfümler
    {
        id: 13,
        name: "Santal 33",
        brand: "Le Labo",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Sandal Ağacı", "Deri", "Papirüs"],
        tags: { age: ["26-35", "36-50"], environment: ["creative", "night"], character: ["mysterious", "sophisticated"] },
        description: "Minimalist ve çağdaş. Yaratıcı ruhlara ilham verir."
    },
    {
        id: 14,
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Safran", "Amber", "Sedir"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Büyüleyici ve unutulmaz. Lüksün tanımı."
    },
    {
        id: 15,
        name: "Gypsy Water",
        brand: "Byredo",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern", "Sportif"],
        strength: "Hafif",
        notes: ["Bergamot", "Çam İğnesi", "Sandal"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], character: ["energetic", "mysterious"] },
        description: "Özgür ruhlar için. Doğa ve macera kokan."
    },
    {
        id: 16,
        name: "Jazz Club",
        brand: "Maison Margiela",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Tütün", "Rom", "Vanilya"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["sophisticated", "mysterious", "classic"] },
        description: "Sıcak ve karizmatik. Samimi akşamların kokusu."
    },
    {
        id: 17,
        name: "Molecule 01",
        brand: "Escentric Molecules",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz", "sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["Iso E Super"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "corporate"], character: ["mysterious", "energetic"] },
        description: "Minimalizmin zirvesi. Teninizle birleşen benzersiz deneyim."
    },
    {
        id: 18,
        name: "Neroli Portofino",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik", "Sportif"],
        strength: "Hafif",
        notes: ["Neroli", "Portakal Çiçeği", "Amber"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["outdoor", "creative"], character: ["sophisticated", "energetic"] },
        description: "İtalyan Rivierası'nın zarif tazeliği."
    },
    {
        id: 19,
        name: "Portrait of a Lady",
        brand: "Frederic Malle",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Gül", "Oud", "Frambuaz"],
        tags: { age: ["36-50", "50+"], environment: ["night", "corporate"], character: ["sophisticated", "mysterious", "classic"] },
        description: "Unutulmaz bir başyapıt. Gerçek sofistikasyonun tanımı."
    },
    {
        id: 20,
        name: "Light Blue",
        brand: "Dolce & Gabbana",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern", "Sportif"],
        strength: "Hafif",
        notes: ["Sicilya Limonu", "Elma", "Sedir"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "creative"], character: ["energetic", "classic"] },
        description: "Akdeniz'in ferahlığı. Güneşli günlerin enerjisi."
    },
    {
        id: 21,
        name: "Noir Extreme",
        brand: "Tom Ford",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern", "Klasik"],
        strength: "Yoğun",
        notes: ["Kakule", "Safran", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], character: ["sophisticated", "mysterious"] },
        description: "Zarif karanlık. Güç ve çekiciliğin birleşimi."
    }
];

// DOM Elements
const heroSection = document.getElementById('hero');
const formSection = document.getElementById('form-section');
const resultsSection = document.getElementById('results-section');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const progressFill = document.getElementById('progress-fill');
const currentStepEl = document.getElementById('current-step');
const perfumeCardsContainer = document.getElementById('perfume-cards');

// Form state
let currentStep = 1;
const totalSteps = 5;

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    setupEventListeners();
    updateFormUI();

    // Check if coming from landing page (with #start hash)
    if (window.location.hash === '#start') {
        heroSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        // Clean up the URL hash
        history.replaceState(null, '', window.location.pathname);
    }
}

function setupEventListeners() {
    startBtn.addEventListener('click', () => {
        heroSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', goToPreviousStep);
    nextBtn.addEventListener('click', goToNextStep);
    submitBtn.addEventListener('click', submitForm);
    restartBtn.addEventListener('click', restartApp);

    document.querySelectorAll('.toggle-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('season').value = btn.dataset.value;
        });
    });
}

function goToNextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateFormUI();
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateFormUI();
    }
}

function updateFormUI() {
    currentStepEl.textContent = currentStep;
    progressFill.style.width = `${(currentStep / totalSteps) * 100}%`;

    document.querySelectorAll('.form-step-content').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');

    prevBtn.disabled = currentStep === 1;

    if (currentStep === totalSteps) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function collectFormData() {
    return {
        pastPerfume: document.getElementById('past-perfume').value.trim(),
        ageGroup: document.getElementById('age-group').value,
        environment: document.querySelector('input[name="environment"]:checked')?.value || '',
        season: document.getElementById('season').value,
        characters: Array.from(document.querySelectorAll('input[name="character"]:checked')).map(cb => cb.value)
    };
}

// Enhanced Scoring Algorithm
function calculatePerfumeScores(userData) {
    const scores = perfumeDatabase.map(perfume => {
        let score = 0;
        let matchReasons = [];

        // 1. Age group match (weight: 2)
        if (userData.ageGroup && perfume.tags.age.includes(userData.ageGroup)) {
            score += 2;
        }

        // 2. Environment-based scoring with strength consideration
        if (userData.environment) {
            const envMatch = perfume.tags.environment.includes(userData.environment);

            if (envMatch) {
                score += 3;
            }

            // Night/Event prefers intense perfumes
            if (userData.environment === 'night') {
                if (perfume.strength === 'Yoğun') {
                    score += 3;
                    matchReasons.push('gece davetleri için ideal yoğunluk');
                } else if (perfume.strength === 'Orta') {
                    score += 1;
                }
            }

            // Corporate prefers lighter, clean scents
            if (userData.environment === 'corporate') {
                if (perfume.strength === 'Hafif') {
                    score += 3;
                    matchReasons.push('ofis ortamı için ferah ve profesyonel');
                } else if (perfume.strength === 'Orta') {
                    score += 2;
                    matchReasons.push('iş ortamına uygun dengeli yoğunluk');
                }
            }

            // Outdoor prefers fresh, light scents
            if (userData.environment === 'outdoor') {
                if (perfume.strength === 'Hafif') {
                    score += 3;
                    matchReasons.push('açık hava aktiviteleri için ferah');
                } else if (perfume.vibes.includes('Sportif')) {
                    score += 2;
                    matchReasons.push('aktif yaşam tarzına uygun');
                }
            }

            // Creative environment - versatile choices
            if (userData.environment === 'creative') {
                if (perfume.vibes.includes('Modern')) {
                    score += 2;
                    matchReasons.push('yaratıcı ortamlar için modern seçim');
                }
            }
        }

        // 3. Season match (weight: 3)
        if (userData.season) {
            const seasonMap = { warm: ['ilkbahar', 'yaz'], cold: ['sonbahar', 'kış'] };
            const targetSeasons = seasonMap[userData.season] || [];

            const seasonMatch = targetSeasons.some(s => perfume.seasons.includes(s));
            if (seasonMatch) {
                score += 3;
                if (userData.season === 'warm' && perfume.strength === 'Hafif') {
                    score += 1;
                    matchReasons.push('sıcak havalarda ferahlık sunuyor');
                }
                if (userData.season === 'cold' && perfume.strength === 'Yoğun') {
                    score += 1;
                    matchReasons.push('soğuk havalarda sıcak bir kucaklama');
                }
            }
        }

        // 4. Character match (weight: 2 per match)
        if (userData.characters.length > 0) {
            const charToVibe = {
                sophisticated: ['Klasik'],
                energetic: ['Modern', 'Sportif'],
                mysterious: ['Modern'],
                classic: ['Klasik']
            };

            userData.characters.forEach(char => {
                if (perfume.tags.character.includes(char)) {
                    score += 2;
                }

                const vibesForChar = charToVibe[char] || [];
                if (vibesForChar.some(v => perfume.vibes.includes(v))) {
                    score += 1;
                }
            });
        }

        // 5. Past perfume similarity bonus
        if (userData.pastPerfume) {
            const pastLower = userData.pastPerfume.toLowerCase();
            if (perfume.name.toLowerCase().includes(pastLower) ||
                perfume.brand.toLowerCase().includes(pastLower)) {
                score += 1;
            }
        }

        return { perfume, score, matchReasons };
    });

    // Sort by score descending
    scores.sort((a, b) => b.score - a.score);

    // Return top 3
    return scores.slice(0, 3);
}

function generateReasonText(perfume, userData, matchReasons) {
    let reasons = [];

    // Add specific match reasons from scoring
    if (matchReasons && matchReasons.length > 0) {
        reasons.push(...matchReasons.slice(0, 2));
    }

    // Add environment reason
    if (userData.environment && perfume.tags.environment.includes(userData.environment)) {
        const envTexts = {
            corporate: 'profesyonel ortamlar',
            creative: 'yaratıcı çalışma alanları',
            outdoor: 'açık hava aktiviteleri',
            night: 'özel gece davetleri'
        };
        if (!reasons.some(r => r.includes(envTexts[userData.environment]))) {
            reasons.push(`<strong>${envTexts[userData.environment]}</strong> için ideal`);
        }
    }

    // Add character match
    if (userData.characters.length > 0) {
        const matchingChars = userData.characters.filter(c => perfume.tags.character.includes(c));
        if (matchingChars.length > 0) {
            const charTexts = {
                sophisticated: 'sofistike',
                energetic: 'enerjik',
                mysterious: 'gizemli',
                classic: 'klasik'
            };
            const charStr = matchingChars.map(c => `<strong>${charTexts[c]}</strong>`).join(' ve ');
            reasons.push(`${charStr} karakterinizi yansıtıyor`);
        }
    }

    if (reasons.length === 0) {
        return perfume.description;
    }

    // Capitalize first letter and format
    reasons = reasons.map((r, i) => i === 0 ? r.charAt(0).toUpperCase() + r.slice(1) : r);

    return reasons.slice(0, 2).join('. ') + '. ' + perfume.description;
}

function renderPerfumeCards(recommendations, userData) {
    perfumeCardsContainer.innerHTML = '';

    recommendations.forEach((item, index) => {
        const { perfume, matchReasons } = item;
        const isFeatured = index === 0;
        const rankText = index === 0 ? 'En İyi Eşleşme' : index === 1 ? '2. Öneri' : '3. Öneri';

        const card = document.createElement('div');
        card.className = `perfume-card${isFeatured ? ' featured' : ''}`;

        // Add strength and gender badges
        const genderText = perfume.gender === 'E' ? 'Erkek' : perfume.gender === 'K' ? 'Kadın' : 'Unisex';

        card.innerHTML = `
            <span class="perfume-rank">${rankText}</span>
            <p class="perfume-brand">${perfume.brand}</p>
            <h3 class="perfume-name">${perfume.name}</h3>
            <div class="perfume-notes">
                ${perfume.notes.map(note => `<span class="perfume-note">${note}</span>`).join('')}
            </div>
            <div class="perfume-meta">
                <span class="perfume-badge">${genderText}</span>
                <span class="perfume-badge">${perfume.strength}</span>
            </div>
            <p class="perfume-reason"><strong>Neden bu?</strong> ${generateReasonText(perfume, userData, matchReasons)}</p>
        `;

        perfumeCardsContainer.appendChild(card);
    });
}

function submitForm() {
    const userData = collectFormData();
    const recommendations = calculatePerfumeScores(userData);

    renderPerfumeCards(recommendations, userData);

    formSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartApp() {
    document.getElementById('scent-form').reset();
    currentStep = 1;
    updateFormUI();

    document.querySelectorAll('.toggle-option').forEach((btn, i) => {
        btn.classList.toggle('active', i === 0);
    });
    document.getElementById('season').value = 'warm';

    resultsSection.classList.add('hidden');
    formSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
