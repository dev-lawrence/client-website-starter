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
    slug: 'pulse-fitness',
    logo: 'https://picsum.photos/150/150?random=1',
    heroImage: 'https://picsum.photos/1200/600?random=2',
    name: 'Pulse Fitness Center',
    phone: '+1234567890',
    email: 'info@pulsefitness.com',
    address: '123 Wellness Drive, Metro City, USA',
    trainerName: 'Jordan Smith',
    socials: {
      instagram: 'https://www.instagram.com/pulsefitness/',
      twitter: 'https://twitter.com/pulsefitness',
    },
    hero: {
      heading: 'Elevate Your',
      headingHighlight: 'Health & Strength',
      subheading:
        'Achieve your personal best with tailored coaching and community support',
      cta: 'Join Now',
      stats: [
        '8 years of guidance',
        '1000+ transformations',
        'Certified trainers',
      ],
    },
    services: {
      heading: 'Train Smarter, Live Better',
      subheading: 'Our flexible plans fit your schedule & goals',
      items: [
        {
          emoji: '🏋️',
          title: 'PERSONAL COACHING',
          description:
            'Customized workouts designed for maximum progress at your own pace.',
          features: [
            'Custom Training Plans',
            'Form & Technique Coaching',
            'Meal Plan Integration',
            'Weekly Progress Reports',
          ],
          price: '$120',
          priceUnit: 'month',
        },
        {
          emoji: '💻',
          title: 'ONLINE COACHING',
          description:
            'Train from anywhere with expert video guidance and direct trainer interaction.',
          features: [
            'Virtual Check-ins',
            'Home/Gym Workout Options',
            'Nutrition Templates',
            'Chat & Email Support',
          ],
          price: '$90',
          priceUnit: 'month',
        },
      ],
    },
    about: {
      heading: 'Meet Your Coach',
      subheading: 'About Pulse Fitness',
      bio: [
        "I'm Jordan, your certified personal trainer and wellness coach.",
        'My mission is to help you develop sustainable fitness habits through confidence and consistency.',
      ],
      image: 'https://picsum.photos/400/400?random=3',
      quote: 'Consistency beats intensity — every time.',
    },
    testimonials: [
      {
        text: 'Great experience! The workouts were personalized and motivating.',
        author: 'Taylor R.',
        duration: '6 months',
      },
      {
        text: 'The environment is welcoming and the results speak for themselves.',
        author: 'Chris B.',
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
  {
    slug: 'ignite-performance',
    logo: 'https://picsum.photos/150/150?random=4',
    heroImage: 'https://picsum.photos/1200/600?random=5',
    name: 'Ignite Performance Gym',
    phone: '+1987654321',
    email: 'contact@igniteperformance.com',
    address: '45 Peak Avenue, Rivertown, USA',
    trainerName: 'Samantha Lee',
    socials: {
      instagram: 'https://www.instagram.com/igniteperformance/',
      facebook: 'https://www.facebook.com/igniteperformance/',
    },
    hero: {
      heading: 'Unleash Your',
      headingHighlight: 'Full Potential',
      subheading:
        'Professional coaching for strength, endurance, and mindset transformation',
      cta: 'Start Today',
      stats: [
        '12 years in business',
        '800+ happy members',
        'Award-winning team',
      ],
    },
    services: {
      heading: 'Your Journey, Your Rules',
      subheading: 'Choose the best plan for your lifestyle',
      items: [
        {
          emoji: '🔥',
          title: 'STRENGTH PROGRAM',
          description:
            'Focused training sessions that improve your power, strength, and mobility.',
          features: [
            'Custom Workout Plans',
            'Progress Tracking',
            'One-on-One Assessments',
            'Nutritional Guidance',
          ],
          price: '$150',
          priceUnit: 'month',
        },
        {
          emoji: '📱',
          title: 'VIRTUAL COACHING',
          description:
            'Workout anywhere with structured programming and real-time feedback.',
          features: [
            'Weekly Calls',
            'Mobile App Integration',
            'Meal Plan Templates',
            '24/7 Support',
          ],
          price: '$100',
          priceUnit: 'month',
        },
      ],
    },
    about: {
      heading: 'About Ignite',
      subheading: 'Driven by Results',
      bio: [
        'Ignite Performance was built on the belief that everyone can train like an athlete.',
        'Our expert coaches combine science-based methods with motivation to bring out your best self.',
      ],
      image: 'https://picsum.photos/400/400?random=6',
      quote: 'Success is built one rep at a time.',
    },
    testimonials: [
      {
        text: 'The best fitness experience I’ve ever had — supportive and professional team!',
        author: 'Jordan K.',
        duration: '8 months',
      },
      {
        text: 'I gained confidence, discipline, and real results thanks to their amazing trainers.',
        author: 'Alex M.',
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
];
