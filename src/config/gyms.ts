export type Gym = {
  slug: string;
  name: string;
  logo: string;
  heroImage: string;
  phone: string;
  email: string;
  address: string;
  trainerName: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    tiktok?: string;
  };
  hero: {
    heading: string;
    headingHighlight: string;
    subheading: string;
    cta: string;
    stats: string[];
  };
  services: {
    heading: string;
    subheading: string;
    items: {
      emoji: string;
      title: string;
      description: string;
      features: string[];
      price: string;
      priceUnit: string;
    }[];
  };
  about: {
    heading: string;
    subheading: string;
    bio: string[];
    quote: string;
    image: string;
  };
  testimonials: {
    text: string;
    author: string;
    duration: string;
  }[];
  theme: {
    light: {
      primary: string;
      primaryForeground: string;
    };
    dark: {
      primary: string;
      primaryForeground: string;
    };
  };
};

export const gyms: Gym[] = [
  {
    slug: 'rare-concept',
    logo: '/logos/rare-concept.jpg',
    heroImage: '/heroes/rare-concept.jpg',
    name: 'Rare Concept Fitness Gym',
    phone: '07030023228',
    email: 'rchwfitnessgym@gmail.com',
    address: 'Plot 202 Itsekiri Way Karu FHA opposite Ozas Suit, Karu, Nigeria',
    trainerName: 'Frederick',
    socials: {
      instagram: '#',
      twitter: '#',
    },
    hero: {
      heading: 'Your Trusted',
      headingHighlight: 'Fitness Coach',
      subheading:
        'Personal training and online coaching for sustainable results',
      cta: 'Book Consultation',
      stats: [
        '15 years of experience',
        '2000+ satisfied clients',
        'Certified in multiple disciplines',
      ],
    },
    services: {
      heading: "Let's get you your dream body",
      subheading: 'Choose the plan that fits your goals',
      items: [
        {
          emoji: '🏋️',
          title: '1-ON-1 COACHING',
          description:
            'Personalized training sessions designed specifically for your goals, fitness level, and lifestyle.',
          features: [
            'Customized Training Plans',
            'Form Correction & Safety',
            'Nutrition Guidance',
            'Progress Tracking',
          ],
          price: '$150',
          priceUnit: 'session',
        },
        {
          emoji: '💻',
          title: 'ONLINE COACHING',
          description:
            'Transform from anywhere. Personalized programs with video support and daily check-ins.',
          features: [
            'Custom Workout Programs',
            'Meal Planning & Macros',
            'Weekly Video Feedback',
            'Unlimited Support',
          ],
          price: '$199',
          priceUnit: 'session',
        },
      ],
    },
    about: {
      heading: 'Your Favorite Certified Personal Trainer',
      subheading: 'About Me',
      bio: [
        "I'm Frederick, a certified personal trainer with over 15 years of experience transforming lives in the fitness industry.",
        'My approach focuses on sustainable habits and real-world fitness. I believe everyone has the potential to achieve their goals — they just need the right guidance and accountability.',
      ],
      image: '/about/rare-concept.webp',
      quote: 'The distance between your dreams and reality is called action.',
    },
    testimonials: [
      {
        text: "It's great, friendly and well trained trainers",
        author: 'Oreoluwa',
        duration: '3 weeks',
      },
      {
        text: 'This is a very nice equipped gym with a very positive environment. Everyone is out here gelling one another. Come in its a happy community for people looking to improve their fitness. Whether to keep fit or to grow muscles they got you!!',
        author: 'Collins Egbodor',
        duration: '1 year',
      },
      {
        text: "It's a beautiful experience. Very lively and lovely staff. Everyone is welcome and made to feel among",
        author: 'Adeleke Doyinsola',
        duration: '9 months',
      },
    ],
    theme: {
      light: {
        primary: 'oklch(0.646 0.222 41.116)',
        primaryForeground: 'oklch(0.98 0.016 73.684)',
      },
      dark: {
        primary: 'oklch(0.705 0.213 47.604)',
        primaryForeground: 'oklch(0.98 0.016 73.684)',
      },
    },
  },
  {
    slug: 'pam-fitness',
    logo: '/logos/pamfitness.jpg',
    heroImage: '/heroes/pamfitness.webp',
    name: 'Pam Fitness',
    phone: '07011780762',
    email: 'pamfitresources@gmail.com',
    address: ' Bendel Estate, Yellow House 14 Westend Hospital Road, Warri',
    trainerName: 'Pamela',
    socials: {
      instagram: 'https://www.instagram.com/pamfitness_resources/?hl=en',
      facebook: 'https://www.facebook.com/profile.php?id=100050873005922',
    },
    hero: {
      heading: 'Transform Your',
      headingHighlight: 'Body & Mind',
      subheading:
        'Holistic fitness programs designed for lasting health and confidence',
      cta: 'Start Your Journey',
      stats: [
        '10 years transforming lives',
        '500+ success stories',
        'Certified in multiple disciplines',
      ],
    },
    services: {
      heading: 'Programs tailored for you',
      subheading: 'Flexible options to match your lifestyle',
      items: [
        {
          emoji: '🧘',
          title: 'GROUP CLASSES',
          description:
            'High-energy group sessions that make fitness fun and keep you motivated with community support.',
          features: [
            'Yoga & Pilates',
            'HIT Workouts',
            'Dance Fitness',
            'Strength Circuits',
          ],
          price: '$75',
          priceUnit: 'month',
        },
        {
          emoji: '📱',
          title: 'VIRTUAL TRAINING',
          description:
            'Train from the comfort of your home with live video sessions and personalized guidance.',
          features: [
            'Live 1-on-1 Sessions',
            'Custom Meal Plans',
            'Progress Tracking App',
            '24/7 Chat Support',
          ],
          price: '$120',
          priceUnit: 'month',
        },
      ],
    },
    about: {
      heading: 'Meet Your Fitness Partner',
      subheading: 'About Pam Fitness',
      image: '/about/pamfitness.webp',
      bio: [
        `A certified fitness instructor and wellness coach passionate about helping people feel strong, confident, and empowered.`,
        'After overcoming personal health challenges, this trainer dedicated their career to making fitness accessible and enjoyable for everyone, regardless of their starting point.',
      ],
      quote:
        'Your body is capable of amazing things. Let me show you how strong you really are.',
    },
    testimonials: [
      {
        text: "Truly a place for everyone who wants to get fit in style. Not only do are the trainers awesome, you'll also find any equipment of your choice to meet your fitness needs.",
        author: 'Nyerovwo nissi aphiar',
        duration: '6 months',
      },
      {
        text: 'Their professionalism is topnotch and their gym equipments and neatness are second to none. I never regretted going there',
        author: 'Charlesnnadozie Manalone',
        duration: '4 months',
      },
      {
        text: "You're a workout freak like me, and you care about equipment, then it's the place for you. Some personels might be their downfall but I'm kinda confident they'll fix that",
        author: 'Emmanuel Nwankwo',
        duration: '1 year',
      },
    ],
    theme: {
      light: {
        primary: 'oklch(0.488 0.243 264.376)',
        primaryForeground: 'oklch(0.97 0.014 254.604)',
      },
      dark: {
        primary: 'oklch(0.488 0.243 264.376)',
        primaryForeground: 'oklch(0.97 0.014 254.604)',
      },
    },
  },
  {
    slug: 'f6-fitness-gym',
    logo: '/logos/f6-fitness.png',
    heroImage: '/heroes/f6-fitness.webp',
    name: 'F6 Fitness Gym',
    phone: '08067729182',
    email: 'f6fitness@gmail.com',
    address:
      'Local Government, 06 UGHELLI PATANI EXPRESS WAY UGHELLI, Oviri, opposite Total Filling Station, Agbarho, Warri 333110, Delta',
    trainerName: 'Francis',
    socials: {
      instagram: 'https://www.instagram.com/f6_fitness_gym/',
      tiktok: 'https://www.tiktok.com/@coach_fran6ix/video/7524765121814613254',
    },
    hero: {
      heading: 'Turn Your',
      headingHighlight: 'Fatness to Fitness',
      subheading:
        'Transform your body and mind with our expert guidance and support',
      cta: 'Start Your Journey',
      stats: [
        '10 years transforming lives',
        '500+ success stories',
        'Certified in multiple disciplines',
      ],
    },
    services: {
      heading: 'Programs tailored for you',
      subheading: 'Flexible options to match your lifestyle',
      items: [
        {
          emoji: '🧘',
          title: 'GROUP CLASSES',
          description:
            'High-energy group sessions that make fitness fun and keep you motivated with community support.',
          features: [
            'Yoga & Pilates',
            'HIT Workouts',
            'Dance Fitness',
            'Strength Circuits',
          ],
          price: '$75',
          priceUnit: 'month',
        },
        {
          emoji: '📱',
          title: 'VIRTUAL TRAINING',
          description:
            'Train from the comfort of your home with live video sessions and personalized guidance.',
          features: [
            'Live 1-on-1 Sessions',
            'Custom Meal Plans',
            'Progress Tracking App',
            '24/7 Chat Support',
          ],
          price: '$120',
          priceUnit: 'month',
        },
      ],
    },
    about: {
      heading: 'Meet Your Fitness Partner',
      subheading: 'About F6 Fitness',
      image: '/about/f6-fitness.jpg',
      bio: [
        'F6 Fitness is a brand that embodies strength, energy, and excellence. From wellness to peak performance, we ensure our delegates stay energized, inspired, and ready to ascendant in the community that we are operating! F6 FITNESS (WHERE FITNESS MEETS HAPPINESS)',
      ],
      quote:
        'Your body is capable of amazing things. Let me show you how strong you really are.',
    },
    testimonials: [
      {
        text: "F6 Fitness is the perfect blend of professionalism, friendly atmosphere and top-notch equipment. I've never felt more motivated to reach my fitness goals.",
        author: 'Esowe Favour',
        duration: '6 months',
      },
      {
        text: 'Francis is truly dedicated to helping you achieve your fitness goals. Their personalized approach and constant support made all the difference for me.',
        author: 'Goodnews Inari',
        duration: '4 months',
      },
      {
        text: "I was blown away by the variety of equipment and classes offered at F6 Fitness. The trainers are knowledgeable, friendly and always willing to help. I've never felt more at home in a gym.",
        author: 'Eric Nicky',
        duration: '1 year',
      },
    ],
    theme: {
      light: {
        primary: 'oklch(0.488 0.243 264.376)',
        primaryForeground: 'oklch(0.97 0.014 254.604)',
      },
      dark: {
        primary: 'oklch(0.488 0.243 264.376)',
        primaryForeground: 'oklch(0.97 0.014 254.604)',
      },
    },
  },
  {
    slug: 'cliff-fitness-gym',
    logo: '/logos/cliff-fitness.png',
    heroImage: '/heroes/cliff-fitness.webp',
    name: 'Cliff Fitness Gym',
    phone: '08067729182',
    email: 'clifffitness@gmail.com',
    address:
      'NO 10 Arc Ajayi Close, Nigerian Army Post Housing Development Scheme Phase 1,Kurudu, Abuja, Nigeria 900109',
    trainerName: 'Cliff Fitness',
    socials: {
      instagram: 'https://www.instagram.com/clifffitnessng/',
    },
    hero: {
      heading: 'Helping You Look',
      headingHighlight: 'Good & Feel Strong',
      subheading:
        'Transform your body and mind with our expert guidance and support',
      cta: 'Start Your Journey',
      stats: [
        '10 years transforming lives',
        '500+ success stories',
        'Certified in multiple disciplines',
      ],
    },
    services: {
      heading: 'Programs tailored for you',
      subheading: 'Flexible options to match your lifestyle',
      items: [
        {
          emoji: '🧘',
          title: 'GROUP CLASSES',
          description:
            'High-energy group sessions that make fitness fun and keep you motivated with community support.',
          features: [
            'Yoga & Pilates',
            'HIT Workouts',
            'Dance Fitness',
            'Strength Circuits',
          ],
          price: '$75',
          priceUnit: 'month',
        },
        {
          emoji: '📱',
          title: 'VIRTUAL TRAINING',
          description:
            'Train from the comfort of your home with live video sessions and personalized guidance.',
          features: [
            'Live 1-on-1 Sessions',
            'Custom Meal Plans',
            'Progress Tracking App',
            '24/7 Chat Support',
          ],
          price: '$120',
          priceUnit: 'month',
        },
      ],
    },
    about: {
      heading: 'Meet Your Fitness Partner',
      subheading: 'About Cliff Fitness',
      image: '/about/cliff-fitness.webp',
      bio: [
        'Cliff Fitness is a brand that embodies strength, energy, and excellence. From wellness to peak performance, we ensure our delegates stay energized, inspired, and ready to ascendant in the community that we are operating! Cliff Fitness (WHERE FITNESS MEETS HAPPINESS)',
      ],
      quote:
        'Your body is capable of amazing things. Let me show you how strong you really are.',
    },
    testimonials: [
      {
        text: "Cliff Fitness is the perfect blend of professionalism, friendly atmosphere and top-notch equipment. I've never felt more motivated to reach my fitness goals.",
        author: 'Esowe Favour',
        duration: '6 months',
      },
      {
        text: 'They are truly dedicated to helping you achieve your fitness goals. Their personalized approach and constant support made all the difference for me.',
        author: 'Goodnews Inari',
        duration: '4 months',
      },
      {
        text: "I was blown away by the variety of equipment and classes offered at Cliff Fitness. The trainers are knowledgeable, friendly and always willing to help. I've never felt more at home in a gym.",
        author: 'Eric Nicky',
        duration: '1 year',
      },
    ],
    theme: {
      light: {
        primary: 'oklch(0.646 0.222 41.116)',
        primaryForeground: 'oklch(0.98 0.016 73.684)',
      },
      dark: {
        primary: 'oklch(0.705 0.213 47.604)',
        primaryForeground: 'oklch(0.98 0.016 73.684)',
      },
    },
  },
];
