// بيانات المنتجات الإلكترونية
const products = [
    {
        id: 1,
        name: "سامسونج جلاكسي S24",
        price: 1200,
        originalPrice: 1400,
        category: "phones",
        brand: "samsung",
        description: "هاتف ذكي بشاشة 6.7 بوصة، كاميرا 200 ميجابكسل، معالج سناب دراجون 8",
        image: "📱",
        rating: 4.8,
        ratingCount: 124,
        badges: ["new", "hot"],
        specs: {
            storage: "256GB",
            ram: "12GB",
            camera: "200MP",
            battery: "5000mAh"
        }
    },
    {
        id: 2,
        name: "آيفون 15 برو",
        price: 1500,
        originalPrice: 1700,
        category: "phones",
        brand: "apple",
        description: "أحدث هاتف من أبل بشريحة A17 برو، كاميرا ثلاثية، شاشة ديناميك آيلاند",
        image: "📱",
        rating: 4.9,
        ratingCount: 89,
        badges: ["new"],
        specs: {
            storage: "256GB",
            ram: "8GB",
            camera: "48MP",
            battery: "4441mAh"
        }
    },
    {
        id: 3,
        name: "شاومي ريدمي نوت 13",
        price: 800,
        originalPrice: 900,
        category: "phones",
        brand: "xiaomi",
        description: "هاتف ذكي بقيمة ممتازة، شاشة AMOLED، كاميرة 108 ميجابكسل",
        image: "📱",
        rating: 4.5,
        ratingCount: 67,
        badges: ["discount"],
        specs: {
            storage: "128GB",
            ram: "8GB",
            camera: "108MP",
            battery: "5000mAh"
        }
    },
    {
        id: 4,
        name: "لابتوب ديل XPS 15",
        price: 2500,
        originalPrice: 2800,
        category: "laptops",
        brand: "dell",
        description: "لابتوب متميز بشاشة 15 بوصة 4K، معالج i7، كارت شاشة RTX 4050",
        image: "💻",
        rating: 4.7,
        ratingCount: 45,
        badges: ["hot"],
        specs: {
            processor: "Intel i7-13700H",
            ram: "16GB",
            storage: "1TB SSD",
            display: "15.6\" 4K"
        }
    },
    {
        id: 5,
        name: "ماك بوك برو M3",
        price: 3200,
        originalPrice: 3500,
        category: "laptops",
        brand: "apple",
        description: "لابتوب محترف بشريحة M3، شاشة 14 بوصة، أداء استثنائي للمصممين",
        image: "💻",
        rating: 4.9,
        ratingCount: 78,
        badges: ["new", "hot"],
        specs: {
            processor: "Apple M3",
            ram: "18GB",
            storage: "512GB SSD",
            display: "14.2\" Liquid Retina"
        }
    },
    {
        id: 6,
        name: "لينوفو ليجيون 5",
        price: 1800,
        originalPrice: 2000,
        category: "laptops",
        brand: "lenovo",
        description: "لابتوب ألعاب بقوة كبيرة، معالج AMD Ryzen 7، كارت شاشة RTX 4060",
        image: "💻",
        rating: 4.6,
        ratingCount: 92,
        badges: ["discount"],
        specs: {
            processor: "AMD Ryzen 7 7840HS",
            ram: "16GB",
            storage: "1TB SSD",
            display: "15.6\" 165Hz"
        }
    },
    {
        id: 7,
        name: "بلايستيشن 5",
        price: 1600,
        originalPrice: 1800,
        category: "gaming",
        brand: "sony",
        description: "أحدث جهاز ألعاب من سوني، معالج مخصص، دعم 4K 120fps",
        image: "🎮",
        rating: 4.8,
        ratingCount: 156,
        badges: ["hot"],
        specs: {
            storage: "825GB SSD",
            resolution: "4K 120fps",
            controller: "DualSense",
            features: "Ray Tracing"
        }
    },
    {
        id: 8,
        name: "اكس بوكس سيريس X",
        price: 1400,
        originalPrice: 1600,
        category: "gaming",
        brand: "microsoft",
        description: "جهاز ألعاب بقوة 12 تيرافلوب، دعم 4K، خدمة Game Pass",
        image: "🎮",
        rating: 4.7,
        ratingCount: 89,
        badges: ["discount"],
        specs: {
            storage: "1TB SSD",
            resolution: "4K 120fps",
            performance: "12 TFLOPS",
            features: "Quick Resume"
        }
    },
    {
        id: 9,
        name: "ننتندو سويتش OLED",
        price: 900,
        originalPrice: 1000,
        category: "gaming",
        brand: "nintendo",
        description: "جهاز ألعاب هجين بشاشة OLED، مثالي للألعاب العائلية",
        image: "🎮",
        rating: 4.5,
        ratingCount: 234,
        badges: ["new"],
        specs: {
            display: "7\" OLED",
            storage: "64GB",
            battery: "4.5-9 hours",
            features: "HD Rumble"
        }
    },
    {
        id: 10,
        name: "سماعات سوني WH-1000XM5",
        price: 400,
        originalPrice: 450,
        category: "audio",
        brand: "sony",
        description: "سماعات رأس لاسلكية مع إلغاء ضوضاء متقدم، جودة صوت استثنائية",
        image: "🎧",
        rating: 4.8,
        ratingCount: 178,
        badges: ["hot"],
        specs: {
            battery: "30 hours",
            noiseCancel: "متقدم",
            connectivity: "Bluetooth 5.2",
            weight: "250g"
        }
    },
    {
        id: 11,
        name: "سماعات أبل AirPods Pro",
        price: 350,
        originalPrice: 400,
        category: "audio",
        brand: "apple",
        description: "سماعات أذن لاسلكية مع إلغاء ضوضاء نشط، تكامل ممتاز مع أجهزة أبل",
        image: "🎧",
        rating: 4.7,
        ratingCount: 267,
        badges: ["new"],
        specs: {
            battery: "6 hours",
            noiseCancel: "نشط",
            case: "MagSafe",
            features: "Spatial Audio"
        }
    },
    {
        id: 12,
        name: "سماعات سامسونج Buds2 Pro",
        price: 280,
        originalPrice: 320,
        category: "audio",
        brand: "samsung",
        description: "سماعات أذن لاسلكية بدقة صوت 24-bit، ميكروفونات متطورة",
        image: "🎧",
        rating: 4.6,
        ratingCount: 134,
        badges: ["discount"],
        specs: {
            battery: "8 hours",
            sound: "24-bit Hi-Fi",
            connectivity: "Bluetooth 5.3",
            features: "360 Audio"
        }
    },
    {
        id: 13,
        name: "ساعة أبل واتش Series 9",
        price: 600,
        originalPrice: 650,
        category: "accessories",
        brand: "apple",
        description: "ساعة ذكية متطورة، تتبع صحي متكامل، شريحة S9 الجديدة",
        image: "⌚",
        rating: 4.8,
        ratingCount: 189,
        badges: ["new", "hot"],
        specs: {
            display: "Always-On Retina",
            battery: "18 hours",
            features: "ECG, Blood Oxygen",
            connectivity: "GPS + Cellular"
        }
    },
    {
        id: 14,
        name: "ساعة سامسونج جلاكسي واتش 6",
        price: 450,
        originalPrice: 500,
        category: "accessories",
        brand: "samsung",
        description: "ساعة ذكية بشاشة كبيرة، تتبع صحي متقدم، بطارية طويلة الأمد",
        image: "⌚",
        rating: 4.6,
        ratingCount: 97,
        badges: ["new"],
        specs: {
            display: "Sapphire Crystal",
            battery: "40 hours",
            features: "Sleep Coaching",
            durability: "IP68 + MIL-STD-810H"
        }
    },
    {
        id: 15,
        name: "شاحن لاسلكي سامسونج",
        price: 80,
        originalPrice: 100,
        category: "accessories",
        brand: "samsung",
        description: "شاحن لاسلكي سريع 15W، شحن سريع للهواتف والأجهزة",
        image: "🔌",
        rating: 4.3,
        ratingCount: 56,
        badges: ["discount"],
        specs: {
            power: "15W Fast Charging",
            compatibility: "Qi Standard",
            design: "LED Indicator",
            features: "Foreign Object Detection"
        }
    },
    {
        id: 16,
        name: "سماعات ستوديو سوني",
        price: 300,
        originalPrice: 350,
        category: "audio",
        brand: "sony",
        description: "سماعات ستوديو احترافية، صوت دقيق، مريحة للاستخدام الطويل",
        image: "🎧",
        rating: 4.5,
        ratingCount: 78,
        badges: [],
        specs: {
            type: "Over-Ear",
            impedance: "63 ohms",
            frequency: "4Hz-40kHz",
            cable: "Detachable"
        }
    },
    {
        id: 17,
        name: "لوحة مفاتيح ميكانيكية",
        price: 120,
        originalPrice: 150,
        category: "accessories",
        brand: "logitech",
        description: "لوحة مفاتيح ميكانيكية RGB، مفاتيح سريعة الاستجابة، تصميم مريح",
        image: "⌨️",
        rating: 4.4,
        ratingCount: 203,
        badges: ["discount"],
        specs: {
            switches: "Mechanical Blue",
            backlight: "RGB",
            connectivity: "USB-C",
            features: "Media Controls"
        }
    },
    {
        id: 18,
        name: "ماوس ألعاب لاسلكي",
        price: 90,
        originalPrice: 110,
        category: "accessories",
        brand: "razer",
        description: "ماوس ألعاب لاسلكي، استجابة سريعة، تصميم مريح، إضاءة RGB",
        image: "🖱️",
        rating: 4.6,
        ratingCount: 145,
        badges: ["new"],
        specs: {
            dpi: "26000",
            buttons: "8 Programmable",
            battery: "70 hours",
            connectivity: "2.4GHz + Bluetooth"
        }
    },
    {
        id: 19,
        name: "محول USB-C لـ HDMI",
        price: 40,
        originalPrice: 50,
        category: "accessories",
        brand: "anker",
        description: "محول متعدد المنافذ، دعم 4K، شحن سريع، نقل بيانات",
        image: "🔌",
        rating: 4.2,
        ratingCount: 89,
        badges: [],
        specs: {
            ports: "USB-C, HDMI, USB-A",
            resolution: "4K@60Hz",
            power: "100W PD",
            data: "10Gbps"
        }
    },
    {
        id: 20,
        name: "سماعات جي بي ال",
        price: 200,
        originalPrice: 250,
        category: "audio",
        brand: "jbl",
        description: "سماعات رأس لاسلكية، صوت قوي، بطارية طويلة، تصميم قابل للطي",
        image: "🎧",
        rating: 4.5,
        ratingCount: 167,
        badges: ["discount"],
        specs: {
            battery: "50 hours",
            features: "Ambient Aware",
            connectivity: "Bluetooth 5.0",
            design: "Foldable"
        }
    }
];
