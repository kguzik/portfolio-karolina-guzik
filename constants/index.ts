import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const navLinks = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Portfolio',
    url: '/portfolio',
  },
];

export const skills = [
  'JavaScript',
  'React.js',
  'Next.js',
  'Svelte',
  'TypeScript',
  'Wordpress',
  'ACF',
  'Builder.io',
  'Magento',
  'GraphQL',
  'PHP',
  'OpenAI API',
  'CSS',
  'SCSS',
  'Tailwind',
  'Styled Components',
  'HTML',
  'Nunjucks',
  'Git',
  'CI/CD Basics',
  'Webpack',
  'Bootstrap',
  'jQuery',
  'Firebase Basics',
  'SQL Basics',
  'SEO',
  'UX Basics',
  'Figma Basics',
  'Adobe Photoshop Basics',
  'Adobe XD Basics',
  'WCAG',
  'English C1',
  'AI-assisted Development',
  'Pixel Perfect',
];

export const portfolios = [
  {
    id: 1,
    title: 'Chop Chop Website',
    description: 'Next.js, TypeScript, Styled Components, WordPress',
    link: 'https://chop-chop.org/',
    image: '/images/chop-chop-mockups.png',
  },
  {
    id: 2,
    title: 'Savor Saver - AI Recipe Generator',
    description: 'React.js, OpenAI API, Firebase',
    link: 'https://savorsaver.com/',
    image: '/images/savor-saver-mockups.png',
  },
  {
    id: 3,
    title: 'My Personal Portfolio',
    description: 'Next.js, TypeScript, Tailwind',
    link: '/',
    githubLink: 'https://github.com/kguzik/portfolio-karolina-guzik',
    image: '/images/portfolio-mockups.png',
  },
  {
    id: 4,
    title: 'Daylight Studio Website',
    description:
      'As a contractor for <a href="https://thedaylightstudio.com/" target="_blank">Daylight Studio</a>  I built this website using WordPress and PHP',
    link: 'https://thedaylightstudio.com/',
    image: '/images/daylight-mockups.png',
  },
  {
    id: 5,
    title: 'SSC Website',
    description:
      'As a contractor for <a href="https://thedaylightstudio.com/" target="_blank">Daylight Studio</a>  I built this website using WordPress and PHP',
    link: 'https://ssc-inc.com/',
    image: '/images/ssc-mockups.png',
  },
  {
    id: 6,
    title: 'Machtfit Website',
    description: 'WordPress, PHP, SCSS',
    link: 'https://www.machtfit.de/',
    image: '/images/machtfit-mockups.png',
  },
  {
    id: 7,
    title: 'Klarquist Website',
    description:
      'As a contractor for <a href="https://thedaylightstudio.com/" target="_blank">The Daylight Studio</a> I build this website with WordPress & PHP',
    link: 'https://klarquist.com/',
    image: '/images/klarquist-mockups.png',
  },
  {
    id: 8,
    title: 'Travel Blog',
    description: 'WordPress, PHP, SCSS',
    link: 'https://turystyczny.com.pl/',
    image: '/images/turystyczny-mockups.png',
  },
  {
    id: 9,
    title: 'Corpussanum Website',
    description: 'WordPress, PHP, SCSS',
    link: 'https://corpussanum.pl/',
    image: '/images/corpussanum-mockups.png',
  },
  {
    id: 10,
    title: 'Pozytywnie o jedzeniu Website + Shop',
    description: 'WordPress, PHP, SCSS, WooCommerce',
    link: 'https://pozytywnieojedzeniu.pl/',
    image: '/images/pozytywnie-mockups.png',
  },
  {
    id: 11,
    title: 'Biznestoq Blog',
    description: 'WordPress, PHP, SCSS',
    link: 'https://biznestoq.pl/',
    image: '/images/biznestoq-mockups.png',
  },
];

export const socialLinks = [
  {
    id: 1,
    label: 'Linkedin',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/karolina-guzik',
  },
  {
    id: 2,
    label: 'Github',
    icon: Github,
    url: 'https://github.com/kguzik',
  },
];

export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: '+48 513 140 855',
    type: 'phone',
  },
  {
    id: 2,
    icon: Mail,
    text: 'hi.karolina.guzik@gmail.com',
    type: 'email',
  },
  {
    id: 3,
    icon: MapPin,
    text: 'Poland',
  },
];

export const timeline = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Monogo',
    duration: '2025 - present',
    description: [
      'Maintaining multiple headless e-commerce storefronts built with Next.js, React, TypeScript and Magento, focusing on bug fixes, frontend improvements and selected new features.',
      'Working on a large-scale enterprise website migration project covering tens of thousands of pages, with frontend development in Svelte and Builder.io, including bug fixing, new component development and resolving security audit findings.',
    ],
  },
  {
    id: 2,
    title: 'Senior Web Developer',
    company: 'plantecs GmbH',
    duration: '2024 - 2025',
    description: [
      'Working as a contractor for die medienplaner GmbH',
      'Developing and maintaining websites built with WordPress, PHP, CSS, SCSS, HTML and JavaScript',
      'Managing the complete development lifecycle, from planning to implementation and deployment',
    ],
  },
  {
    id: 3,
    title: 'Mid Frontend Developer',
    company: 'Chop-Chop.org',
    duration: '2022 - 2024',
    description: [
      'Working with WordPress, PHP, React.js, Next.js, TypeScript, Tailwind, Styled Components, CSS, SCSS, BEM, HTML, JavaScript, Nunjucks and Git',
      'Leading projects with teams of 2-3 developers, mentoring a frontend intern, communications with clients',
      'Creating and optimizing development environments',
    ],
  },
  {
    id: 4,
    title: 'Freelance Web Developer',
    company: 'Ikagi Karolina Guzik',
    duration: '2020 - 2021',
    description: [
      'Freelance Web Developer working mostly with WordPress and WooCommerce',
      'Owner of an e-commerce business',
    ],
  },
  {
    id: 5,
    title: 'Web Developer',
    company: 'ASCO Systemy Informatyczne Sp. z o.o. Sp. k.',
    duration: '2019 - 2020',
    description: [
      'Implementing new solutions, SEO optimization and refactoring existing code using HTML, CSS3, JavaScript, jQuery, Bootstrap for e-commerce platforms',
      'Technical support',
    ],
  },
  {
    id: 6,
    title: 'Junior Front-End Developer',
    company: 'Pomeranian Development Studio',
    duration: '2018 - 2019',
    description: [
      'Development of websites for small and medium size businesses with focus on RWD, SEO and performance using HTML5, CSS3, Sass, JavaScript, PHP and WordPress.',
    ],
  },
  {
    id: 7,
    title: 'Massage Therapist / Receptionist',
    company: 'Kosmetyczny Instytut Dr Irena Eris',
    duration: '2016 - 2018',
    description: [],
  },
];
