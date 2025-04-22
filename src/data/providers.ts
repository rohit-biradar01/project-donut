import { ServiceProvider } from "@/types";

// Explicitly export mockProviders as the default export name
export const mockProviders: ServiceProvider[] = [
  {
    id: "p1",
    alias: "Olivia",
    avatar: "https://plus.unsplash.com/premium_photo-1682095479898-910b7e451779?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewCount: 124,
    pricePerHour: 120,
    location: "New York",
    tags: ["Deep Tissue", "In-Person", "Mobile", "Evening"],
    bio: "I hold space for softness. Whether it's your first time or your hundredth, I'm here to make you feel safe, seen, and respected. I’m all about emotional intelligence, gentle intimacy, and kind conversation. Let’s move slow, if you like.",
    services: [
      {
        id: "s1",
        title: "Companionship",
        price: 120,
        duration: 60,
        description: "A non-sexual, emotionally enriching experience centered around presence and conversation. Whether it's a walk, a meal, or deep chats over coffee, companionship provides warmth, laughter, and connection without pressure."
      },
      {
        id: "s2",
        title: "Massage Therapy",
        price: 100,
        duration: 60,
        description: "A nurturing, slow session focused on grounding and soothing."
      },
      {
        id: "s3",
        title: "Sensual Conversation",
        price: 140,
        duration: 90,
        description: "Flirty, emotionally honest chats."
      }
    ],
    availability: {
      monday: ["10:00", "12:00", "14:00", "16:00"],
      tuesday: ["10:00", "12:00", "14:00"],
      wednesday: ["14:00", "16:00", "18:00"],
      thursday: ["10:00", "12:00", "14:00", "16:00"],
      friday: ["12:00", "14:00", "16:00", "18:00"],
      saturday: ["10:00", "12:00", "14:00"],
      sunday: ["12:00", "14:00"]
    },
    reviews: [
      {
        id: "r1",
        userName: "RelaxedClient",
        rating: 5,
        comment: "Incredible technique. My chronic back pain finally feels better after just one session."
      },
      {
        id: "r2",
        userName: "StressNoMore",
        rating: 5,
        comment: "Best massage I've had in years. Very professional and effective."
      },
      {
        id: "r3",
        userName: "AthleticPro",
        rating: 4,
        comment: "Great sports massage. Helped with my marathon recovery tremendously."
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1682095829263-596d331f6326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664476441580-33db0d93c11a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1682095222067-70901ec51db7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p2",
    alias: "Mia",
    avatar: "https://plus.unsplash.com/premium_photo-1668896122554-2a4456667f65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviewCount: 98,
    pricePerHour: 90,
    location: "Los Angeles",
    tags: ["Holistic", "Virtual", "Wellness", "Morning"],
    bio: "I'm not here to perform — I'm here to co-create sacred connection. My background in tantra and breathwork shapes every session. You’ll leave lighter, clearer, more grounded in your body. Curious souls welcome.",
    services: [
      {
        id: "s4",
        title: "Roleplay & Fantasy Scenarios",
        price: 90,
        duration: 60,
        description: "Sacred or themed experiences"
      },
      {
        id: "s5",
        title: "Erotic Massage",
        price: 85,
        duration: 45,
        description: "Oil-based, consent-driven connection"
      }
    ],
    availability: {
      monday: ["08:00", "10:00", "12:00"],
      tuesday: ["08:00", "10:00", "12:00"],
      wednesday: ["08:00", "10:00", "12:00"],
      thursday: ["08:00", "10:00", "12:00"],
      friday: ["08:00", "10:00", "12:00"],
      saturday: [],
      sunday: []
    },
    reviews: [
      {
        id: "r4",
        userName: "HealthSeeker",
        rating: 5,
        comment: "Transformed my relationship with food. The personalized plan was easy to follow."
      },
      {
        id: "r5",
        userName: "EnergyGained",
        rating: 4,
        comment: "Very knowledgeable about nutrition. I've seen significant improvements in my energy levels."
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1668896123844-65224cf19b74?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1669824376681-2a999a6facb0?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p3",
    alias: "TechWizard",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviewCount: 56,
    pricePerHour: 75,
    location: "Remote",
    tags: ["Tech Support", "Virtual", "24/7", "Immediate"],
    bio: "I'm the friend who holds your secrets, the flirt who never pushes. I love slow mornings, long voice notes, and catching people mid-laughter. This is a no-pressure zone — just real vibes and clear communication.",
    services: [
      {
        id: "s6",
        title: "Online Intimacy",
        price: 75,
        duration: 60,
        description: "Virtual flirty time"
      },
      {
        id: "s7",
        title: "Safe Space Emotional Support",
        price: 120,
        duration: 90,
        description: "Present and pressure-free"
      }
    ],
    availability: {
      monday: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      tuesday: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      wednesday: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      thursday: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      friday: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      saturday: ["11:00", "13:00", "15:00"],
      sunday: ["11:00", "13:00", "15:00"]
    },
    reviews: [
      {
        id: "r6",
        userName: "DigitalNomad",
        rating: 5,
        comment: "Saved my work presentation when my laptop crashed. Incredibly responsive and efficient."
      },
      {
        id: "r7",
        userName: "NotTechSavvy",
        rating: 5,
        comment: "Patient and clear instructions. Fixed my WiFi issues that I'd been struggling with for weeks."
      },
      {
        id: "r8",
        userName: "SmartHomeEnthusiast",
        rating: 4,
        comment: "Great setup of my entire smart home system. Everything works perfectly together now."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533407411655-dcce1534c1a6?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p4",
    alias: "FitPro",
    avatar: "https://images.unsplash.com/photo-1738525052612-f6fc76e7c3f9?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewCount: 201,
    pricePerHour: 95,
    location: "Chicago",
    tags: ["Fitness", "In-Person", "Virtual", "Motivational"],
    bio: "I’m fluid, fierce, and full of sparkle. I don’t fit boxes, and neither should our connection. I believe in queer joy, body neutrality, and mutual delight. You bring your real — I’ll bring mine",
    services: [
      {
        id: "s8",
        title: "Sensual Bodywork",
        price: 95,
        duration: 60,
        description: "Sensual, safe, slow."
      },
      {
        id: "s9",
        title: "GFE",
        price: 150,
        duration: 90,
        description: "Affectionate emotional presence"
      }
    ],
    availability: {
      monday: ["06:00", "07:00", "08:00", "17:00", "18:00", "19:00"],
      tuesday: ["06:00", "07:00", "08:00", "17:00", "18:00", "19:00"],
      wednesday: ["06:00", "07:00", "08:00", "17:00", "18:00", "19:00"],
      thursday: ["06:00", "07:00", "08:00", "17:00", "18:00", "19:00"],
      friday: ["06:00", "07:00", "08:00", "17:00", "18:00", "19:00"],
      saturday: ["08:00", "09:00", "10:00"],
      sunday: []
    },
    reviews: [
      {
        id: "r9",
        userName: "FitnessJourney",
        rating: 5,
        comment: "Lost 30 pounds in 4 months with these training sessions. Completely changed my life."
      },
      {
        id: "r10",
        userName: "FormerCouch",
        rating: 5,
        comment: "Patient, motivating, and knowledgeable. Makes workouts challenging but achievable."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1738525052787-685a1d64f8bf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1738525052282-900818c83635?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1738525052373-9df8344872d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p5",
    alias: "NightOwlTutor",
    avatar: "https://images.unsplash.com/photo-1624254009481-48e3b123b59f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviewCount: 87,
    pricePerHour: 60,
    location: "Remote",
    tags: ["Academic", "Virtual", "Late Night", "Sciences"],
    bio: "Night owl, daydreamer, keeper of whispered wishes. I blend sensuality with soul — slow touches, sultry laughs, and safe space for all your shades. I don’t just show up; I arrive.",
    services: [
      {
        id: "s10",
        title: "Online Intimacy",
        price: 60,
        duration: 60,
        description: "Tease and play remotely"
      },
      {
        id: "s11",
        title: "Roleplay & Fantasy Scenarios",
        price: 250,
        duration: 240,
        description: "Creative gender-play."
      }
    ],
    availability: {
      monday: ["18:00", "19:00", "20:00", "21:00", "22:00"],
      tuesday: ["18:00", "19:00", "20:00", "21:00", "22:00"],
      wednesday: ["18:00", "19:00", "20:00", "21:00", "22:00"],
      thursday: ["18:00", "19:00", "20:00", "21:00", "22:00"],
      friday: ["18:00", "19:00", "20:00", "21:00", "22:00"],
      saturday: ["14:00", "15:00", "16:00", "17:00"],
      sunday: ["14:00", "15:00", "16:00", "17:00"]
    },
    reviews: [
      {
        id: "r11",
        userName: "PreMedStudent",
        rating: 5,
        comment: "Boosted my MCAT score by 15 points. Clear explanations for complex concepts."
      },
      {
        id: "r12",
        userName: "PhysicsMajor",
        rating: 5,
        comment: "Finally understand quantum mechanics thanks to these sessions. Exceptional teaching."
      },
      {
        id: "r13",
        userName: "CalculusStruggler",
        rating: 4,
        comment: "Turned my C into an A. Very patient with my many questions."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1624254009687-99700bc5987f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624254009485-bdf7ad59579e?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p6",
    alias: "HannahOWO",
    avatar: "https://images.unsplash.com/photo-1708533897366-f84863c9e0bc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.0,
    reviewCount: 42,
    pricePerHour: 150,
    location: "Miami",
    tags: ["Culinary", "In-Person", "Premium", "Dietary Needs"],
    bio: "My curves tell stories. My eyes know how to listen. Whether we’re laughing over chai or exploring a fantasy, I’ll make sure you feel desired without needing to perform.",
    services: [
      {
        id: "s12",
        title: "GFE",
        price: 150,
        duration: 180,
        description: "Soft, romantic touch"
      },
      {
        id: "s13",
        title: "Kink / BDSM Sessions",
        price: 200,
        duration: 180,
        description: "Light domination & control"
      }
    ],
    availability: {
      monday: [],
      tuesday: [],
      wednesday: ["17:00", "18:00"],
      thursday: ["17:00", "18:00"],
      friday: ["17:00", "18:00"],
      saturday: ["17:00", "18:00"],
      sunday: ["17:00", "18:00"]
    },
    reviews: [
      {
        id: "r14",
        userName: "GourmetLover",
        rating: 5,
        comment: "Restaurant quality dining in our home. The meal was exquisite and presentation beautiful."
      },
      {
        id: "r15",
        userName: "CulinaryExplorer",
        rating: 5,
        comment: "The cooking class was informative and fun. Learned techniques I'll use forever."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1708533899500-1b35fc8e5d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1708534271613-fda4319c7cb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1708534272261-2c1b10e9d85c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p7",
    alias: "MindfulCoach",
    avatar: "https://plus.unsplash.com/premium_photo-1668790366390-988fef927c42?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewCount: 115,
    pricePerHour: 110,
    location: "Seattle",
    tags: ["Mindfulness", "Virtual", "Stress Relief", "Corporate"],
    bio: "Consent is my kink. Connection is my compass. I offer sessions where you're held, heard, and never pushed. Whether you're curious about kink or just want someone to witness you — I’m here for that.",
    services: [
      {
        id: "s14",
        title: "Education / Exploration Coaching",
        price: 110,
        duration: 60,
        description: " Learn with practice."
      },
      {
        id: "s15",
        title: "Mutual Intimacy",
        price: 500,
        duration: 120,
        description: "Shared sensuality, no pressure"
      }
    ],
    availability: {
      monday: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      tuesday: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      wednesday: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      thursday: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      friday: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      saturday: [],
      sunday: []
    },
    reviews: [
      {
        id: "r16",
        userName: "CalmSeeker",
        rating: 5,
        comment: "Finally learned how to manage my anxiety through these sessions. Life-changing skills."
      },
      {
        id: "r17",
        userName: "BusyExecutive",
        rating: 5,
        comment: "The corporate workshop was extremely well received by our team. Practical techniques we could implement immediately."
      },
      {
        id: "r18",
        userName: "StressCase",
        rating: 4,
        comment: "Great introduction to mindfulness practices. I'm sleeping better already."
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1668896123988-b1566bb54579?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1668895511240-e404d63a1758?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p8",
    alias: "CleaningPro",
    avatar: "https://plus.unsplash.com/premium_photo-1668485968519-d91bfed11baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    rating: 4.7,
    reviewCount: 203,
    pricePerHour: 45,
    location: "Boston",
    tags: ["Cleaning", "In-Person", "Eco-Friendly", "Same-Day"],
    bio: "I’m a switch with a heart of code. I build bridges — between minds, between bodies, between what you think you want and what you deeply crave. Brainy, bratty, and big on boundaries.",
    services: [
      {
        id: "s16",
        title: "Striptease / Private Dance",
        price: 45,
        duration: 120,
        description: "Teasing, nerdy performance"
      },
      {
        id: "s17",
        title: "Safe Space Emotional Support",
        price: 65,
        duration: 240,
        description: "No-shame emotional care"
      }
    ],
    availability: {
      monday: ["09:00", "12:00", "15:00"],
      tuesday: ["09:00", "12:00", "15:00"],
      wednesday: ["09:00", "12:00", "15:00"],
      thursday: ["09:00", "12:00", "15:00"],
      friday: ["09:00", "12:00", "15:00"],
      saturday: ["10:00", "13:00"],
      sunday: []
    },
    reviews: [
      {
        id: "r19",
        userName: "CleanFreak",
        rating: 5,
        comment: "My apartment has never been this clean. Attention to detail is impressive."
      },
      {
        id: "r20",
        userName: "BusyParent",
        rating: 4,
        comment: "Reliable and thorough. Love coming home to a clean house every week."
      },
      {
        id: "r21",
        userName: "AllergySufferer",
        rating: 5,
        comment: "The eco-friendly products are great for my allergies. No chemical smells but still perfectly clean."
      }
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1668485968521-4e182e8093d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p9",
    alias: "Ayesha",
    avatar: "https://images.unsplash.com/photo-1674451089045-31d5cdc4d55d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviewCount: 67,
    pricePerHour: 85,
    location: "Remote",
    tags: ["Programming", "Virtual", "Web Development", "Mobile Apps"],
    bio: "Silky voice, steady hands, and a curious heart. I love helping people drop their masks and reconnect with pleasure and presence. Sensuality is not a performance — it’s a conversation. And I’m a good listener.",
    services: [
      {
        id: "s18",
        title: "Mutual Intimacy",
        price: 85,
        duration: 60,
        description: "Shared touch and warmth with respect for all boundaries"
      },
      {
        id: "s19",
        title: "Fetish-Friendly Sessions",
        price: 500,
        duration: 0,
        description: "Soft domination, foot focus, or guided exploration"
      }
    ],
    availability: {
      monday: ["10:00", "11:00", "14:00", "15:00", "16:00"],
      tuesday: ["10:00", "11:00", "14:00", "15:00", "16:00"],
      wednesday: ["10:00", "11:00", "14:00", "15:00", "16:00"],
      thursday: ["10:00", "11:00", "14:00", "15:00", "16:00"],
      friday: ["10:00", "11:00", "14:00", "15:00", "16:00"],
      saturday: [],
      sunday: []
    },
    reviews: [
      {
        id: "r22",
        userName: "StartupFounder",
        rating: 5,
        comment: "Delivered our MVP ahead of schedule. Clean code and great communication throughout."
      },
      {
        id: "r23",
        userName: "TechNewbie",
        rating: 5,
        comment: "Patient explanations of technical concepts. Helped me understand what my business actually needed."
      },
      {
        id: "r24",
        userName: "AppCreator",
        rating: 4,
        comment: "Fixed bugs that had been plaguing our app for months. Very knowledgeable."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1674504176007-d2f55cd47ad4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1689885499177-b09b6ac980d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "p10",
    alias: "Tia",
    avatar: "https://images.unsplash.com/photo-1599557852963-e75339deda18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviewCount: 88,
    pricePerHour: 125,
    location: "Denver",
    tags: ["Interior Design", "In-Person", "Virtual", "Sustainable"],
    bio: "I’m a writer, a dreamer, and a soft switch with a sharp mind. I offer both nurturing connection and playful tension. Every session is a co-authored story — we set the tone together. I’m here for depth, desire, and deep breaths.",
    services: [
      {
        id: "s20",
        title: "Companionship",
        price: 125,
        duration: 90,
        description: "Story-rich presence, whether at a cafe or curled up inside"
      },
      {
        id: "s21",
        title: "Education / Exploration Coaching",
        price: 750,
        duration: 0,
        description: "Guidance for newbies, soft domme dynamics, consent skills"
      }
    ],
    availability: {
      monday: ["10:00", "13:00", "16:00"],
      tuesday: ["10:00", "13:00", "16:00"],
      wednesday: ["10:00", "13:00", "16:00"],
      thursday: ["10:00", "13:00", "16:00"],
      friday: ["10:00", "13:00"],
      saturday: ["12:00"],
      sunday: []
    },
    reviews: [
      {
        id: "r25",
        userName: "HomeOwner",
        rating: 5,
        comment: "Transformed our living room with mostly our existing furniture just arranged better. Amazing eye for design."
      },
      {
        id: "r26",
        userName: "NewSpace",
        rating: 5,
        comment: "The full package was worth every penny. Our new home looks like it's from a magazine."
      },
      {
        id: "r27",
        userName: "SmallBudget",
        rating: 4,
        comment: "Provided affordable options that still looked high-end. Appreciated the budget-conscious approach."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1599329994698-6dff6031c553?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1599329994306-40c32dffc8a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1599329602271-8ed6196b6b21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
    ]
  }
];

// Also export as providers for backward compatibility
export { mockProviders as providers };
