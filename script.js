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
    },
    // --- YENİ EKLENEN PARFÜMLER (22-51) ---
    {
        id: 22,
        name: "Versace Pour Homme",
        brand: "Versace",
        gender: "E",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Sportif", "Modern"],
        strength: "Hafif",
        notes: ["Limon", "Bergamot", "Neroli"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "corporate"], character: ["energetic", "classic"] },
        description: "Akdeniz esintili, taze ve maskülen bir klasik."
    },
    {
        id: 23,
        name: "Allure Homme Sport",
        brand: "Chanel",
        gender: "E",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Sportif"],
        strength: "Orta",
        notes: ["Portakal", "Deniz Notaları", "Sedir"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["outdoor", "creative"], character: ["energetic", "sophisticated"] },
        description: "Dinamik ve ferah. Hareketli yaşamlar için ideal."
    },
    {
        id: 24,
        name: "Acqua di Parma Colonia",
        brand: "Acqua di Parma",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Hafif",
        notes: ["Limon", "Lavanta", "Biberiye"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "outdoor"], character: ["classic", "sophisticated"] },
        description: "İtalyan zarafetinin simgesi. Zamansız ve şık."
    },
    {
        id: 25,
        name: "Green Irish Tweed",
        brand: "Creed",
        gender: "E",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Mine Çiçeği", "İris", "Menekşe Yaprağı"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "outdoor"], character: ["sophisticated", "classic"] },
        description: "İrlanda kırlarının ferahlığını taşıyan bir efsane."
    },
    {
        id: 26,
        name: "Spicebomb Extreme",
        brand: "Viktor&Rolf",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Kimyon", "Tarçın", "Tütün"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["energetic", "mysterious"] },
        description: "Patlayıcı baharatlar ve baştan çıkarıcı derinlik."
    },
    {
        id: 27,
        name: "Herod",
        brand: "Parfums de Marly",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Tütün", "Vanilya", "Tarçın"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], character: ["sophisticated", "mysterious"] },
        description: "Kraliyet ihtişamı. Zengin ve sıcak notalar."
    },
    {
        id: 28,
        name: "Layton",
        brand: "Parfums de Marly",
        gender: "Unisex",
        seasons: ["sonbahar", "kış", "ilkbahar"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Elma", "Vanilya", "Kakule"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["sophisticated", "energetic"] },
        description: "Versatil ve büyüleyici. Modern bir başyapıt."
    },
    {
        id: 29,
        name: "Delina",
        brand: "Parfums de Marly",
        gender: "K",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern", "Klasik"],
        strength: "Orta",
        notes: ["Türk Gülü", "Liçi", "Ravent"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], character: ["sophisticated", "energetic"] },
        description: "Feminenliğin modern ve lüks yorumu."
    },
    {
        id: 30,
        name: "Good Girl",
        brand: "Carolina Herrera",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Badem", "Kahve", "Sümbülteber"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["energetic", "mysterious"] },
        description: "Kışkırtıcı ve cesur. Gecenin kraliçesi."
    },
    {
        id: 31,
        name: "Libre",
        brand: "Yves Saint Laurent",
        gender: "K",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Lavanta", "Portakal Çiçeği", "Misk"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "energetic"] },
        description: "Özgürlüğün kokusu. Maskülenlikle feminenliğin dansı."
    },
    {
        id: 32,
        name: "Grand Soir",
        brand: "Maison Francis Kurkdjian",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Amber", "Benzoin", "Vanilya"],
        tags: { age: ["36-50", "50+"], environment: ["night"], character: ["sophisticated", "mysterious"] },
        description: "Paris gecelerinin ışıltısını yansıtan bir amber şaheseri."
    },
    {
        id: 33,
        name: "Eros",
        brand: "Versace",
        gender: "E",
        seasons: ["sonbahar", "kış", "ilkbahar"],
        vibes: ["Sportif", "Modern"],
        strength: "Yoğun",
        notes: ["Nane", "Elma", "Vanilya"],
        tags: { age: ["18-25", "26-35"], environment: ["night", "outdoor"], character: ["energetic", "mysterious"] },
        description: "Aşk tanrısının tutkulu ve canlı kokusu."
    },
    {
        id: 34,
        name: "Ultramale",
        brand: "Jean Paul Gaultier",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern", "Sportif"],
        strength: "Yoğun",
        notes: ["Armut", "Vanilya", "Tarçın"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["energetic", "mysterious"] },
        description: "Kulüp gecelerinin vazgeçilmezi. Tatlı ve çekici."
    },
    {
        id: 35,
        name: "Sì Passione",
        brand: "Giorgio Armani",
        gender: "K",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Frenk Üzümü", "Gül", "Vanilya"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "energetic"] },
        description: "Tutkunun ve özgüvenin kırmızı şişesi."
    },
    {
        id: 36,
        name: "Alien",
        brand: "Mugler",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Yasemin", "Kaşmir", "Amber"],
        tags: { age: ["26-35", "50+"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Başka bir dünyadan gelmiş gibi büyüleyici."
    },
    {
        id: 37,
        name: "Bloom",
        brand: "Gucci",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Sümbülteber", "Yasemin", "Rangoon Sarmaşığı"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["outdoor", "creative"], character: ["classic", "energetic"] },
        description: "Çiçek bahçesinde bir gezinti."
    },
    {
        id: 38,
        name: "Flowerbomb",
        brand: "Viktor&Rolf",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Orkide", "Gül", "Paçuli"],
        tags: { age: ["18-25", "26-35"], environment: ["night", "creative"], character: ["energetic", "sophisticated"] },
        description: "Çiçeklerin tatlı patlaması."
    },
    {
        id: 39,
        name: "Bal d'Afrique",
        brand: "Byredo",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["Kadife Çiçeği", "Vetiver", "Sedir"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "energetic"] },
        description: "Sanatsal ve sıcak. Afrika rüyası."
    },
    {
        id: 40,
        name: "Lost Cherry",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Vişne", "Badem", "Tonka"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["sophisticated", "mysterious"] },
        description: "Masumiyet ve tutkunun zıtlığı. Tatlı vişne likörü."
    },
    {
        id: 41,
        name: "Black Orchid",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Trüf", "Siyah Orkide", "Paçuli"],
        tags: { age: ["36-50", "50+"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Lüks ve şehvetli. İkonik bir imza koku."
    },
    {
        id: 42,
        name: "Ombré Leather",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Deri", "Yasemin", "Kakule"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["mysterious", "energetic"] },
        description: "Çöl rüzgarı ve deri ceket. Vahşi ve özgür."
    },
    {
        id: 43,
        name: "The One EDP",
        brand: "Dolce & Gabbana",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Amber", "Tütün", "Zencefil"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], character: ["sophisticated", "classic"] },
        description: "Romantik ve karizmatik. İlk buluşmaların favorisi."
    },
    {
        id: 44,
        name: "Boss Bottled",
        brand: "Hugo Boss",
        gender: "E",
        seasons: ["sonbahar", "ilkbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Elma", "Tarçın", "Vanilya"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["classic", "energetic"] },
        description: "Başarının kokusu. Modern erkeğin klasiği."
    },
    {
        id: 45,
        name: "Prada L'Homme",
        brand: "Prada",
        gender: "E",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["İris", "Neroli", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "classic"] },
        description: "Ofisin en temiz kokusu. Sabunsu lüks."
    },
    {
        id: 46,
        name: "Cloud",
        brand: "Ariana Grande",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Hindistan Cevizi", "Krema", "Pralin"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], character: ["energetic", "classic"] },
        description: "Rüya gibi tatlı ve yumuşak. Genç ruhlar için."
    },
    {
        id: 47,
        name: "Narciso Rodriguez For Her",
        brand: "Narciso Rodriguez",
        gender: "K",
        seasons: ["sonbahar", "ilkbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Misk", "Gül", "Şeftali"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "classic"] },
        description: "Saf dişilik ve zarafet. Temiz ve çekici."
    },
    {
        id: 48,
        name: "Valentino Uomo Intense",
        brand: "Valentino",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["İris", "Deri", "Vanilya"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], character: ["sophisticated", "mysterious"] },
        description: "İtalyan zarafeti ve derin maskülenlik."
    },
    {
        id: 49,
        name: "Mr. Burberry EDP",
        brand: "Burberry",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Amber", "Sedir", "Baharat"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "İngiliz beyefendisinin modern yorumu."
    },
    {
        id: 50,
        name: "Bright Crystal",
        brand: "Versace",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Hafif",
        notes: ["Yuzu", "Nar", "Şakayık"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["outdoor", "corporate"], character: ["energetic", "classic"] },
        description: "Kristal gibi şeffaf ve çiçeksi."
    },
    {
        id: 51,
        name: "My Way",
        brand: "Giorgio Armani",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Sümbülteber", "Portakal Çiçeği", "Vanilya"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["creative", "outdoor"], character: ["energetic", "sophisticated"] },
        description: "Keşfetmeyi seven kadınların çiçeksi imzası."
    },
    // --- EK PARFÜMLER (52-81) ---
    {
        id: 52,
        name: "Viking",
        brand: "Creed",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Bergamot", "Biber", "Deri"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "outdoor"], character: ["energetic", "mysterious"] },
        description: "Kuzeyin cesareti. Güçlü ve maskülen."
    },
    {
        id: 53,
        name: "Royal Oud",
        brand: "Creed",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Oud", "Sedir", "Limon"],
        tags: { age: ["36-50", "50+"], environment: ["night", "corporate"], character: ["sophisticated", "classic"] },
        description: "Kraliyet ailelerinin tercihi. Rafine ve görkemli."
    },
    {
        id: 54,
        name: "Millesime Imperial",
        brand: "Creed",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Deniz Tuzu", "Iris", "Misk"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["outdoor", "corporate"], character: ["sophisticated", "classic"] },
        description: "Akdeniz kıyılarının zarif esintisi."
    },
    {
        id: 55,
        name: "Pegasus",
        brand: "Parfums de Marly",
        gender: "E",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Badem", "Vanilya", "Sandal"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "Krema ve badem uyumu. Zarif ve çekici."
    },
    {
        id: 56,
        name: "Sedley",
        brand: "Parfums de Marly",
        gender: "E",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern", "Sportif"],
        strength: "Hafif",
        notes: ["Nane", "Lavanta", "Sandal"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "creative"], character: ["energetic", "classic"] },
        description: "Ferah ve temiz. Günlük kullanım için ideal."
    },
    {
        id: 57,
        name: "Percival",
        brand: "Parfums de Marly",
        gender: "E",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Lavanta", "Misk", "Amber"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["energetic", "sophisticated"] },
        description: "Modern şövalye. Temiz ve maskülen."
    },
    {
        id: 58,
        name: "L'Interdit",
        brand: "Givenchy",
        gender: "K",
        seasons: ["sonbahar", "kış", "ilkbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Armut", "Sümbülteber", "Vetiver"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "Yasakların çekiciliği. Cesur ve zarif."
    },
    {
        id: 59,
        name: "Gentleman Givenchy EDP",
        brand: "Givenchy",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["İris", "Lavanta", "Vetiver"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "corporate"], character: ["sophisticated", "classic"] },
        description: "Fransız beyefendisinin imzası."
    },
    {
        id: 60,
        name: "Hypnotic Poison",
        brand: "Dior",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Badem", "Vanilya", "Yasemin"],
        tags: { age: ["26-35", "36-50"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Yasak meyvenin cazibesi. Büyüleyici bir iksir."
    },
    {
        id: 61,
        name: "Miss Dior EDP",
        brand: "Dior",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik", "Modern"],
        strength: "Orta",
        notes: ["Gül", "Şakayık", "Iris"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["classic", "energetic"] },
        description: "Romantik ve feminen. Çiçeklerin dansı."
    },
    {
        id: 62,
        name: "Dior Homme Parfum",
        brand: "Dior",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["İris", "Deri", "Vetiver"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["night"], character: ["sophisticated", "mysterious"] },
        description: "Karanlık zarafet. İris'in en derin hali."
    },
    {
        id: 63,
        name: "Fahrenheit",
        brand: "Dior",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Deri", "Menekşe", "Benzin"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["mysterious", "energetic"] },
        description: "Efsanevi ve eşsiz. Cesur erkeklerin tercihi."
    },
    {
        id: 64,
        name: "Chanel No.5 EDP",
        brand: "Chanel",
        gender: "K",
        seasons: ["sonbahar", "kış", "ilkbahar"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Aldehit", "Yasemin", "Sandal"],
        tags: { age: ["36-50", "50+"], environment: ["night", "corporate"], character: ["sophisticated", "classic"] },
        description: "Efsanelerin efsanesi. Zamansız kadınsılık."
    },
    {
        id: 65,
        name: "Chance Eau Fraiche",
        brand: "Chanel",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern", "Sportif"],
        strength: "Hafif",
        notes: ["Limon", "Yasemin", "Tik Ağacı"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "creative"], character: ["energetic", "classic"] },
        description: "Taze ve dinamik. Yazın enerjisi."
    },
    {
        id: 66,
        name: "Gabrielle Chanel",
        brand: "Chanel",
        gender: "K",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Ylang-Ylang", "Yasemin", "Sümbülteber"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "energetic"] },
        description: "Modern kadının ışıltılı özgüveni."
    },
    {
        id: 67,
        name: "Le Male",
        brand: "Jean Paul Gaultier",
        gender: "E",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Lavanta", "Vanilya", "Nane"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["night", "creative"], character: ["energetic", "classic"] },
        description: "Denizci ikonunun zamansız çekiciliği."
    },
    {
        id: 68,
        name: "Scandal Pour Homme",
        brand: "Jean Paul Gaultier",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Karamel", "Vetiver", "Lavanta"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["energetic", "mysterious"] },
        description: "Tatlı ve cesur. Gece hayatının yeni yıldızı."
    },
    {
        id: 69,
        name: "Angel",
        brand: "Mugler",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Çikolata", "Paçuli", "Pralin"],
        tags: { age: ["26-35", "36-50"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Gurme parfümerin öncüsü. Tatlı ve baştan çıkarıcı."
    },
    {
        id: 70,
        name: "Aura",
        brand: "Mugler",
        gender: "K",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Kaplan Otu", "Portakal Çiçeği", "Vanilya"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], character: ["energetic", "mysterious"] },
        description: "Doğanın vahşi enerjisi."
    },
    {
        id: 71,
        name: "Acqua di Gio Absolu",
        brand: "Giorgio Armani",
        gender: "E",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Deniz Notaları", "Labdanum", "Paçuli"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["sophisticated", "classic"] },
        description: "Orijinalin daha derin ve olgun versiyonu."
    },
    {
        id: 72,
        name: "Code Absolu",
        brand: "Giorgio Armani",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Kakule", "Tonka", "Süet"],
        tags: { age: ["26-35", "36-50"], environment: ["night"], character: ["sophisticated", "mysterious"] },
        description: "Şifrenin en yoğun hali. Baştan çıkarıcı."
    },
    {
        id: 73,
        name: "Luna Rossa Carbon",
        brand: "Prada",
        gender: "E",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern", "Sportif"],
        strength: "Orta",
        notes: ["Lavanta", "Amber", "Metalik Notalar"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["energetic", "classic"] },
        description: "Yüksek teknoloji ve zarafet birleşimi."
    },
    {
        id: 74,
        name: "La Femme",
        brand: "Prada",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Frangipani", "Sümbülteber", "Balmumu"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["night", "corporate"], character: ["sophisticated", "classic"] },
        description: "Kadınsılığın en saf hali. Kremsi ve zarif."
    },
    {
        id: 75,
        name: "Donna",
        brand: "Valentino",
        gender: "K",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Klasik", "Modern"],
        strength: "Orta",
        notes: ["İris", "Gül", "Biberiye"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "İtalyan modasının kokulu yorumu."
    },
    {
        id: 76,
        name: "Voce Viva",
        brand: "Valentino",
        gender: "K",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Bergamot", "Gardenya", "Kristal Misk"],
        tags: { age: ["18-25", "26-35"], environment: ["creative", "outdoor"], character: ["energetic", "sophisticated"] },
        description: "Sesinizi duyurun. Özgür ve güçlü."
    },
    {
        id: 77,
        name: "Burberry Her",
        brand: "Burberry",
        gender: "K",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Çilek", "Ahududu", "Misk"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "creative"], character: ["energetic", "classic"] },
        description: "Londra ruhunu taşıyan meyveli bir lezzet."
    },
    {
        id: 78,
        name: "Scandal",
        brand: "Jean Paul Gaultier",
        gender: "K",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Bal", "Gardenya", "Kan Portakalı"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["energetic", "mysterious"] },
        description: "Skandal yaratacak kadar tatlı ve seksi."
    },
    {
        id: 79,
        name: "1 Million",
        brand: "Paco Rabanne",
        gender: "E",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Kan Portakalı", "Tarçın", "Deri"],
        tags: { age: ["18-25", "26-35"], environment: ["night"], character: ["energetic", "mysterious"] },
        description: "Altın külçe. Partilerin yıldızı."
    },
    {
        id: 80,
        name: "Invictus",
        brand: "Paco Rabanne",
        gender: "E",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Sportif", "Modern"],
        strength: "Orta",
        notes: ["Greyfurt", "Defne Yaprağı", "Guaiac"],
        tags: { age: ["18-25", "26-35"], environment: ["outdoor", "night"], character: ["energetic", "classic"] },
        description: "Zafer kokusu. Sporcuların ve kazananların tercihi."
    },
    {
        id: 81,
        name: "Olympea",
        brand: "Paco Rabanne",
        gender: "K",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Tuzlu Vanilya", "Yeşil Mandalina", "Yasemin"],
        tags: { age: ["18-25", "26-35"], environment: ["night", "creative"], character: ["energetic", "sophisticated"] },
        description: "Tanrıçaların parfümü. Tuzlu-tatlı denge."
    },
    // --- UNİSEX AĞIRLIKLI EK PARFÜMLER (82-101) ---
    {
        id: 82,
        name: "Another 13",
        brand: "Le Labo",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz", "sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Ambroxan", "Misk", "Armut"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["mysterious", "sophisticated"] },
        description: "Teninizle bütünleşen benzersiz bir imza koku."
    },
    {
        id: 83,
        name: "Rose 31",
        brand: "Le Labo",
        gender: "Unisex",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Gül", "Sedir", "Misk"],
        tags: { age: ["26-35", "36-50"], environment: ["creative", "corporate"], character: ["sophisticated", "classic"] },
        description: "Gülün maskülen ve modern yorumu."
    },
    {
        id: 84,
        name: "Oud Silk Mood",
        brand: "Maison Francis Kurkdjian",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Oud", "Gül", "İpek Notları"],
        tags: { age: ["36-50", "50+"], environment: ["night"], character: ["sophisticated", "mysterious"] },
        description: "İpek gibi pürüzsüz ve zengin bir oud deneyimi."
    },
    {
        id: 85,
        name: "Aqua Universalis",
        brand: "Maison Francis Kurkdjian",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["Limon", "Beyaz Çiçekler", "Misk"],
        tags: { age: ["18-25", "26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["energetic", "classic"] },
        description: "Evrensel tazelik. Her ortama uyum sağlar."
    },
    {
        id: 86,
        name: "Blanche",
        brand: "Byredo",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Hafif",
        notes: ["Aldehit", "Gül", "Sandal"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["classic", "sophisticated"] },
        description: "Saf beyazlık. Temiz ve zarif."
    },
    {
        id: 87,
        name: "Super Cedar",
        brand: "Byredo",
        gender: "Unisex",
        seasons: ["sonbahar", "ilkbahar"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Sedir", "Gül", "Vetiver"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["sophisticated", "classic"] },
        description: "Sedir ağacının en saf hali."
    },
    {
        id: 88,
        name: "Philosykos",
        brand: "Diptyque",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["İncir", "İncir Yaprağı", "Sedir"],
        tags: { age: ["26-35", "36-50"], environment: ["creative", "outdoor"], character: ["energetic", "sophisticated"] },
        description: "Akdeniz incir bahçesinde bir yolculuk."
    },
    {
        id: 89,
        name: "Tam Dao",
        brand: "Diptyque",
        gender: "Unisex",
        seasons: ["sonbahar", "kış", "ilkbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Sandal Ağacı", "Sedir", "Gül"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["corporate", "night"], character: ["sophisticated", "classic"] },
        description: "Sandal ağacının meditatif sakinliği."
    },
    {
        id: 90,
        name: "Fleur d'Oranger",
        brand: "Serge Lutens",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Portakal Çiçeği", "Beyaz Çiçekler", "Bal"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["night", "corporate"], character: ["sophisticated", "classic"] },
        description: "Portakal çiçeğinin büyüleyici zarafeti."
    },
    {
        id: 91,
        name: "Ambre Sultan",
        brand: "Serge Lutens",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Yoğun",
        notes: ["Amber", "Reçine", "Vanilya"],
        tags: { age: ["36-50", "50+"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Doğu'nun gizemli amber hazinesi."
    },
    {
        id: 92,
        name: "Italian Cypress",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Selvi", "Bergamot", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "outdoor"], character: ["sophisticated", "classic"] },
        description: "Toskana tepelerinin aromatik ferahlığı."
    },
    {
        id: 93,
        name: "Tuscan Leather",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Deri", "Frambuaz", "Safran"],
        tags: { age: ["26-35", "36-50"], environment: ["night", "creative"], character: ["mysterious", "sophisticated"] },
        description: "Toskana dericilik ustalarının mirası."
    },
    {
        id: 94,
        name: "Soleil Blanc",
        brand: "Tom Ford",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Orta",
        notes: ["Hindistan Cevizi", "Ylang-Ylang", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["outdoor", "creative"], character: ["energetic", "sophisticated"] },
        description: "Yat güvertesinde güneşin tadını çıkarın."
    },
    {
        id: 95,
        name: "Not a Perfume",
        brand: "Juliette Has a Gun",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz", "sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["Ambroxan"],
        tags: { age: ["18-25", "26-35"], environment: ["corporate", "creative"], character: ["mysterious", "energetic"] },
        description: "Minimalizmin doruk noktası. Teninizle birleşir."
    },
    {
        id: 96,
        name: "Musc Ravageur",
        brand: "Frederic Malle",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Modern"],
        strength: "Yoğun",
        notes: ["Misk", "Vanilya", "Amber"],
        tags: { age: ["26-35", "36-50"], environment: ["night"], character: ["mysterious", "sophisticated"] },
        description: "Yıkıcı derecede seksi ve bağımlılık yapıcı."
    },
    {
        id: 97,
        name: "Vetiver Extraordinaire",
        brand: "Frederic Malle",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz", "sonbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Vetiver", "Sedir", "Biber"],
        tags: { age: ["36-50", "50+"], environment: ["corporate", "outdoor"], character: ["sophisticated", "classic"] },
        description: "Vetiver'in en saf ve zarif hali."
    },
    {
        id: 98,
        name: "Eau de Gris Clair",
        brand: "Hermès",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Klasik"],
        strength: "Hafif",
        notes: ["Neroli", "Bergamot", "Misk"],
        tags: { age: ["26-35", "36-50", "50+"], environment: ["corporate", "outdoor"], character: ["sophisticated", "classic"] },
        description: "Hermès zarafetinin taze yorumu."
    },
    {
        id: 99,
        name: "Un Jardin Sur Le Nil",
        brand: "Hermès",
        gender: "Unisex",
        seasons: ["ilkbahar", "yaz"],
        vibes: ["Modern"],
        strength: "Hafif",
        notes: ["Yeşil Mango", "Lotus", "Sycamore"],
        tags: { age: ["26-35", "36-50"], environment: ["outdoor", "creative"], character: ["energetic", "sophisticated"] },
        description: "Nil kıyılarındaki tropik bahçe."
    },
    {
        id: 100,
        name: "Whispers in the Library",
        brand: "Maison Margiela",
        gender: "Unisex",
        seasons: ["sonbahar", "kış"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Sedir", "Vanilya", "Benzoin"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "night"], character: ["sophisticated", "mysterious"] },
        description: "Eski kitaplar ve ahşap rafların nostaljik kokusu."
    },
    {
        id: 101,
        name: "At the Barber's",
        brand: "Maison Margiela",
        gender: "Unisex",
        seasons: ["ilkbahar", "sonbahar"],
        vibes: ["Klasik"],
        strength: "Orta",
        notes: ["Lavanta", "Köpük", "Tonka"],
        tags: { age: ["26-35", "36-50"], environment: ["corporate", "creative"], character: ["classic", "sophisticated"] },
        description: "Klasik berber dükkanının temiz ve güven veren kokusu."
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
const totalSteps = 6;

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
        gender: document.querySelector('input[name="gender"]:checked')?.value || '',
        pastPerfume: document.getElementById('past-perfume').value.trim(),
        ageGroup: document.getElementById('age-group').value,
        environment: document.querySelector('input[name="environment"]:checked')?.value || '',
        season: document.getElementById('season').value,
        characters: Array.from(document.querySelectorAll('input[name="character"]:checked')).map(cb => cb.value)
    };
}

// Enhanced Scoring Algorithm
function calculatePerfumeScores(userData) {
    // First, filter by gender
    let filteredPerfumes = perfumeDatabase;
    if (userData.gender) {
        filteredPerfumes = perfumeDatabase.filter(p => {
            if (userData.gender === 'Unisex') {
                return true; // Show all perfumes for Unisex selection
            }
            return p.gender === userData.gender || p.gender === 'Unisex';
        });
    }

    const scores = filteredPerfumes.map(perfume => {
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
