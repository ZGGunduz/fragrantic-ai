// Fragrantic.ai - Perfume Recommendation Engine

// Perfume Database (15+ perfumes with tags)
const perfumeDatabase = [
    {
        id: 1,
        name: "Aventus",
        brand: "Creed",
        notes: ["Bergamot", "Ananas", "Meşe Yosunu"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], season: ["warm", "cold"], character: ["sophisticated", "classic"] },
        description: "Güç ve başarıyı simgeleyen ikonik bir koku. Kurumsal ortamlarda otorite yayar."
    },
    {
        id: 2,
        name: "Santal 33",
        brand: "Le Labo",
        notes: ["Sandal Ağacı", "Deri", "Papirüs"],
        tags: { age: ["26-35", "36-50"], environment: ["creative", "night"], season: ["cold"], character: ["mysterious", "sophisticated"] },
        description: "Minimalist ve çağdaş bir ruh. Yaratıcı ruhlara ilham verir."
    },
    {
        id: 3,
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        notes: ["Safran", "Amber", "Sedir"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["night"], season: ["cold"], character: ["mysterious", "sophisticated"] },
        description: "Büyüleyici ve unutulmaz. Gece etkinliklerinin yıldızı olursunuz."
    },
    {
        id: 4,
        name: "Oud Wood",
        brand: "Tom Ford",
        notes: ["Ud", "Sandal", "Vetiver"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "night"], season: ["cold"], character: ["sophisticated", "classic", "mysterious"] },
        description: "Zamansız sofistikasyon. Rafine zevklerin tercihi."
    },
    {
        id: 5,
        name: "Sauvage",
        brand: "Dior",
        notes: ["Bergamot", "Biber", "Ambroxan"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], season: ["warm", "cold"], character: ["energetic", "classic"] },
        description: "Taze ve karizmatik. Her ortama uyum sağlayan çok yönlü bir seçim."
    },
    {
        id: 6,
        name: "Bleu de Chanel",
        brand: "Chanel",
        notes: ["Greyfurt", "Nane", "Sedir"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], season: ["warm", "cold"], character: ["classic", "sophisticated"] },
        description: "Zarafet ve özgürlüğün mükemmel dengesi. Her zaman şık."
    },
    {
        id: 7,
        name: "Gypsy Water",
        brand: "Byredo",
        notes: ["Bergamot", "Çam İğnesi", "Sandal"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], season: ["warm"], character: ["energetic", "mysterious"] },
        description: "Özgür ruhlar için. Doğa ve macera kokan bir yolculuk."
    },
    {
        id: 8,
        name: "Jazz Club",
        brand: "Maison Margiela",
        notes: ["Tütün", "Rom", "Vanilya"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], season: ["cold"], character: ["sophisticated", "mysterious", "classic"] },
        description: "Sıcak ve karizmatik. Samimi akşamların vazgeçilmezi."
    },
    {
        id: 9,
        name: "La Nuit de L'Homme",
        brand: "Yves Saint Laurent",
        notes: ["Kakule", "Lavanta", "Sedir"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], season: ["cold"], character: ["mysterious", "energetic"] },
        description: "Baştan çıkarıcı ve yoğun. Romantik gecelerin favorisi."
    },
    {
        id: 10,
        name: "Acqua di Gio Profumo",
        brand: "Giorgio Armani",
        notes: ["Bergamot", "Deniz Notaları", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["outdoor", "creative"], season: ["warm"], character: ["energetic", "classic"] },
        description: "Deniz esintisi ve maskülenlik. Yaz günlerinin en iyi arkadaşı."
    },
    {
        id: 11,
        name: "Tobacco Vanille",
        brand: "Tom Ford",
        notes: ["Tütün", "Vanilya", "Kakao"],
        tags: { age: ["36-50", "50+"], environment: ["night"], season: ["cold"], character: ["sophisticated", "mysterious", "classic"] },
        description: "Zengin ve opulent. Kış gecelerinin sıcak kucaklaması."
    },
    {
        id: 12,
        name: "Noir Extreme",
        brand: "Tom Ford",
        notes: ["Kakule", "Safran", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], season: ["cold"], character: ["sophisticated", "mysterious"] },
        description: "Zarif karanlık. Güç ve çekiciliğin kusursuz birleşimi."
    },
    {
        id: 13,
        name: "Light Blue",
        brand: "Dolce & Gabbana",
        notes: ["Sicilya Limonu", "Elma", "Sedir"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "creative"], season: ["warm"], character: ["energetic", "classic"] },
        description: "Akdeniz'in ferahlığı. Güneşli günlerin enerjisi."
    },
    {
        id: 14,
        name: "Portrait of a Lady",
        brand: "Frederic Malle",
        notes: ["Gül", "Oud", "Frambuaz"],
        tags: { age: ["36-50", "50+"], environment: ["night", "corporate"], season: ["cold"], character: ["sophisticated", "mysterious", "classic"] },
        description: "Unutulmaz bir başyapıt. Gerçek sofistikasyonun tanımı."
    },
    {
        id: 15,
        name: "Neroli Portofino",
        brand: "Tom Ford",
        notes: ["Neroli", "Portakal Çiçeği", "Amber"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["outdoor", "creative"], season: ["warm"], character: ["sophisticated", "energetic"] },
        description: "İtalyan Rivierası'nın zarif tazeliği. Lüks ve rahatlık bir arada."
    },
    {
        id: 16,
        name: "Terre d'Hermès",
        brand: "Hermès",
        notes: ["Greyfurt", "Biber", "Vetiver"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "creative"], season: ["warm", "cold"], character: ["classic", "sophisticated"] },
        description: "Toprak ve gökyüzü arasında. Olgun ve dengeli bir seçim."
    },
    {
        id: 17,
        name: "Molecule 01",
        brand: "Escentric Molecules",
        notes: ["Iso E Super"],
        tags: { age: ["18-25", "26-35"], environment: ["creative"], season: ["warm", "cold"], character: ["mysterious", "energetic"] },
        description: "Minimalizmin zirvesi. Teninizle birleşen benzersiz bir deneyim."
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
}

function setupEventListeners() {
    // Start button
    startBtn.addEventListener('click', () => {
        heroSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Navigation buttons
    prevBtn.addEventListener('click', goToPreviousStep);
    nextBtn.addEventListener('click', goToNextStep);
    submitBtn.addEventListener('click', submitForm);
    restartBtn.addEventListener('click', restartApp);

    // Toggle buttons (Season)
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
    // Update step indicator
    currentStepEl.textContent = currentStep;
    
    // Update progress bar
    progressFill.style.width = `${(currentStep / totalSteps) * 100}%`;
    
    // Show/hide step content
    document.querySelectorAll('.form-step-content').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    
    // Update navigation buttons
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

function calculatePerfumeScores(userData) {
    const scores = perfumeDatabase.map(perfume => {
        let score = 0;
        
        // Age group match (weight: 2)
        if (userData.ageGroup && perfume.tags.age.includes(userData.ageGroup)) {
            score += 2;
        }
        
        // Environment match (weight: 3)
        if (userData.environment && perfume.tags.environment.includes(userData.environment)) {
            score += 3;
        }
        
        // Season match (weight: 2)
        if (userData.season && perfume.tags.season.includes(userData.season)) {
            score += 2;
        }
        
        // Character match (weight: 2 per match)
        if (userData.characters.length > 0) {
            userData.characters.forEach(char => {
                if (perfume.tags.character.includes(char)) {
                    score += 2;
                }
            });
        }
        
        // Past perfume similarity bonus
        if (userData.pastPerfume) {
            const pastLower = userData.pastPerfume.toLowerCase();
            if (perfume.name.toLowerCase().includes(pastLower) || 
                perfume.brand.toLowerCase().includes(pastLower)) {
                score += 1; // Small bonus, we want to suggest new things
            }
        }
        
        return { perfume, score };
    });
    
    // Sort by score descending
    scores.sort((a, b) => b.score - a.score);
    
    // Return top 3
    return scores.slice(0, 3).map(s => s.perfume);
}

function generateReasonText(perfume, userData) {
    let reasons = [];
    
    if (userData.environment && perfume.tags.environment.includes(userData.environment)) {
        const envTexts = {
            corporate: 'profesyonel ortamlar',
            creative: 'yaratıcı çalışma alanları',
            outdoor: 'açık hava aktiviteleri',
            night: 'özel gece davetleri'
        };
        reasons.push(`<strong>${envTexts[userData.environment]}</strong> için ideal`);
    }
    
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
    
    if (userData.season) {
        const seasonText = userData.season === 'warm' ? 'sıcak havalarda ferahlık' : 'soğuk havalarda sıcaklık';
        if (perfume.tags.season.includes(userData.season)) {
            reasons.push(seasonText + ' sunuyor');
        }
    }
    
    if (reasons.length === 0) {
        return perfume.description;
    }
    
    return reasons.join(', ') + '. ' + perfume.description;
}

function renderPerfumeCards(perfumes, userData) {
    perfumeCardsContainer.innerHTML = '';
    
    perfumes.forEach((perfume, index) => {
        const isFeatured = index === 0;
        const rankText = index === 0 ? 'En İyi Eşleşme' : index === 1 ? '2. Öneri' : '3. Öneri';
        
        const card = document.createElement('div');
        card.className = `perfume-card${isFeatured ? ' featured' : ''}`;
        
        card.innerHTML = `
            <span class="perfume-rank">${rankText}</span>
            <p class="perfume-brand">${perfume.brand}</p>
            <h3 class="perfume-name">${perfume.name}</h3>
            <div class="perfume-notes">
                ${perfume.notes.map(note => `<span class="perfume-note">${note}</span>`).join('')}
            </div>
            <p class="perfume-reason">${generateReasonText(perfume, userData)}</p>
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
    // Reset form
    document.getElementById('scent-form').reset();
    currentStep = 1;
    updateFormUI();
    
    // Reset toggle
    document.querySelectorAll('.toggle-option').forEach((btn, i) => {
        btn.classList.toggle('active', i === 0);
    });
    document.getElementById('season').value = 'warm';
    
    // Navigate to form
    resultsSection.classList.add('hidden');
    formSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
