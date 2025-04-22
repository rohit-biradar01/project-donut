
import { ServiceProvider } from "@/types";

// Explicitly export mockProviders as the default export name
export const mockProviders: ServiceProvider[] = [
  {
    id: "p1",
    alias: "ZenMaster",
    avatar: "https://ibb.co/LXBXBjrb",
    rating: 4.9,
    reviewCount: 124,
    pricePerHour: 120,
    location: "New York",
    tags: ["Deep Tissue", "In-Person", "Mobile", "Evening"],
    bio: "Specializing in deep tissue and therapeutic massage with over 10 years of experience. I focus on relieving chronic pain and stress.",
    services: [
      {
        id: "s1",
        title: "Deep Tissue Massage",
        price: 120,
        duration: 60,
        description: "Intense pressure massage targeting deep muscle tissue to release chronic tension."
      },
      {
        id: "s2",
        title: "Swedish Relaxation",
        price: 100,
        duration: 60,
        description: "Gentle, flowing strokes to promote relaxation and stress relief."
      },
      {
        id: "s3",
        title: "Sports Recovery",
        price: 140,
        duration: 90,
        description: "Focused therapy for athletes to improve performance and speed up recovery."
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
      "https://ibb.co/xtHpLS6T",
      "https://ibb.co/T5dfyTT",
      "/service-images/massage-3.webp"
    ]
  },
  {
    id: "p2",
    alias: "WellnessGuide",
    avatar: "/avatars/provider-2.webp",
    rating: 4.8,
    reviewCount: 98,
    pricePerHour: 90,
    location: "Los Angeles",
    tags: ["Holistic", "Virtual", "Wellness", "Morning"],
    bio: "Certified wellness coach offering personalized nutrition and lifestyle guidance. I help clients achieve their health goals through sustainable practices.",
    services: [
      {
        id: "s4",
        title: "Nutrition Consultation",
        price: 90,
        duration: 60,
        description: "Customized nutrition plan based on your health goals and dietary preferences."
      },
      {
        id: "s5",
        title: "Wellness Coaching Session",
        price: 85,
        duration: 45,
        description: "Holistic approach to improving your overall wellbeing through lifestyle adjustments."
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
      "/service-images/nutrition-1.webp",
      "/service-images/nutrition-2.webp"
    ]
  },
  {
    id: "p3",
    alias: "TechWizard",
    avatar: "/avatars/provider-3.webp",
    rating: 4.7,
    reviewCount: 56,
    pricePerHour: 75,
    location: "Remote",
    tags: ["Tech Support", "Virtual", "24/7", "Immediate"],
    bio: "Expert tech support for all your device and software needs. Available remotely to solve problems quickly and efficiently.",
    services: [
      {
        id: "s6",
        title: "Tech Troubleshooting",
        price: 75,
        duration: 60,
        description: "Diagnosis and resolution of computer, smartphone, or software issues."
      },
      {
        id: "s7",
        title: "Smart Home Setup",
        price: 120,
        duration: 90,
        description: "Complete configuration of your smart home devices and automation systems."
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
      "/service-images/tech-1.webp",
      "/service-images/tech-2.webp"
    ]
  },
  {
    id: "p4",
    alias: "FitPro",
    avatar: "/avatars/provider-4.webp",
    rating: 4.9,
    reviewCount: 201,
    pricePerHour: 95,
    location: "Chicago",
    tags: ["Fitness", "In-Person", "Virtual", "Motivational"],
    bio: "Certified personal trainer specializing in strength training, weight loss, and rehabilitation. Customized programs to meet your specific fitness goals.",
    services: [
      {
        id: "s8",
        title: "Personal Training Session",
        price: 95,
        duration: 60,
        description: "One-on-one training session tailored to your fitness level and goals."
      },
      {
        id: "s9",
        title: "Nutrition & Workout Plan",
        price: 150,
        duration: 90,
        description: "Comprehensive fitness and nutrition strategy designed for your specific needs."
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
      "/service-images/fitness-1.webp",
      "/service-images/fitness-2.webp",
      "/service-images/fitness-3.webp"
    ]
  },
  {
    id: "p5",
    alias: "NightOwlTutor",
    avatar: "/avatars/provider-5.webp",
    rating: 4.8,
    reviewCount: 87,
    pricePerHour: 60,
    location: "Remote",
    tags: ["Academic", "Virtual", "Late Night", "Sciences"],
    bio: "PhD in Physics offering advanced tutoring in math and sciences. Specializing in university-level courses and exam preparation.",
    services: [
      {
        id: "s10",
        title: "Math & Physics Tutoring",
        price: 60,
        duration: 60,
        description: "Expert guidance for calculus, physics, and other advanced STEM subjects."
      },
      {
        id: "s11",
        title: "Exam Prep Package",
        price: 250,
        duration: 240,
        description: "Four-session intensive preparation for standardized tests or final exams."
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
      "/service-images/tutor-1.webp",
      "/service-images/tutor-2.webp"
    ]
  },
  {
    id: "p6",
    alias: "ChefExtraordinaire",
    avatar: "/avatars/provider-6.webp",
    rating: 5.0,
    reviewCount: 42,
    pricePerHour: 150,
    location: "Miami",
    tags: ["Culinary", "In-Person", "Premium", "Dietary Needs"],
    bio: "Former restaurant chef now offering private dining experiences. I create memorable meals in your home with focus on seasonal, local ingredients.",
    services: [
      {
        id: "s12",
        title: "Private Dinner Experience",
        price: 150,
        duration: 180,
        description: "Three-course gourmet meal prepared in your home for 2-8 guests."
      },
      {
        id: "s13",
        title: "Cooking Class",
        price: 200,
        duration: 180,
        description: "Interactive cooking lesson for up to 4 people, including meal and wine pairing."
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
      "/service-images/chef-1.webp",
      "/service-images/chef-2.webp",
      "/service-images/chef-3.webp"
    ]
  },
  {
    id: "p7",
    alias: "MindfulCoach",
    avatar: "/avatars/provider-7.webp",
    rating: 4.9,
    reviewCount: 115,
    pricePerHour: 110,
    location: "Seattle",
    tags: ["Mindfulness", "Virtual", "Stress Relief", "Corporate"],
    bio: "Licensed therapist specializing in mindfulness techniques for stress management and mental wellbeing. I help clients develop sustainable practices for lasting balance.",
    services: [
      {
        id: "s14",
        title: "Individual Mindfulness Session",
        price: 110,
        duration: 60,
        description: "Personalized mindfulness coaching with techniques for your specific challenges."
      },
      {
        id: "s15",
        title: "Corporate Wellness Workshop",
        price: 500,
        duration: 120,
        description: "Group session for teams of up to 15 people to improve workplace wellbeing."
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
      "/service-images/mindfulness-1.webp",
      "/service-images/mindfulness-2.webp"
    ]
  },
  {
    id: "p8",
    alias: "CleaningPro",
    avatar: "/avatars/provider-8.webp",
    rating: 4.7,
    reviewCount: 203,
    pricePerHour: 45,
    location: "Boston",
    tags: ["Cleaning", "In-Person", "Eco-Friendly", "Same-Day"],
    bio: "Professional house cleaning service with attention to detail. Using eco-friendly products and efficient techniques to transform your space.",
    services: [
      {
        id: "s16",
        title: "Standard Home Cleaning",
        price: 45,
        duration: 120,
        description: "Thorough cleaning of kitchen, bathrooms, living areas, and bedrooms."
      },
      {
        id: "s17",
        title: "Deep Cleaning Service",
        price: 65,
        duration: 240,
        description: "Intensive cleaning including inside appliances, baseboards, and detailed bathroom scrubbing."
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
      "/service-images/cleaning-1.webp",
      "/service-images/cleaning-2.webp"
    ]
  },
  {
    id: "p9",
    alias: "CodeNinja",
    avatar: "/avatars/provider-9.webp",
    rating: 4.8,
    reviewCount: 67,
    pricePerHour: 85,
    location: "Remote",
    tags: ["Programming", "Virtual", "Web Development", "Mobile Apps"],
    bio: "Full-stack developer with 8+ years experience. Specializing in React, Node.js, and mobile development for businesses and startups.",
    services: [
      {
        id: "s18",
        title: "Web Development Consultation",
        price: 85,
        duration: 60,
        description: "Technical guidance, code review, and solutions for your web development challenges."
      },
      {
        id: "s19",
        title: "Custom Feature Development",
        price: 500,
        duration: 0,
        description: "Implementation of specific features for your website or application. Price per feature."
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
      "/service-images/coding-1.webp",
      "/service-images/coding-2.webp"
    ]
  },
  {
    id: "p10",
    alias: "InteriorVisionary",
    avatar: "/avatars/provider-10.webp",
    rating: 4.9,
    reviewCount: 88,
    pricePerHour: 125,
    location: "Denver",
    tags: ["Interior Design", "In-Person", "Virtual", "Sustainable"],
    bio: "Interior designer with a focus on sustainable, beautiful spaces that reflect your personality and needs. From single rooms to entire homes.",
    services: [
      {
        id: "s20",
        title: "Design Consultation",
        price: 125,
        duration: 90,
        description: "In-home assessment with color schemes, furniture layout, and styling recommendations."
      },
      {
        id: "s21",
        title: "Full Room Design Package",
        price: 750,
        duration: 0,
        description: "Complete design plan including furniture selection, color scheme, accessories, and implementation guidance."
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
      "/service-images/interior-1.webp",
      "/service-images/interior-2.webp",
      "/service-images/interior-3.webp"
    ]
  }
];

// Also export as providers for backward compatibility
export { mockProviders as providers };
