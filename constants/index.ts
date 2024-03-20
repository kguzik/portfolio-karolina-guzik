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
    'Wordpress',
    'PHP',
    'JavaScript',
    'React.js',
    'Next.js',
    'TypeScript',
    'CSS',
    'SCSS',
    'Tailwind',
    'Styled Components',
    'HTML',
    'Nunjucks',
    'Git',
    'Bootstrap',
    'jQuery',
    'SEO Basics',
    'UX Basics',
    'Figma Basics',
    'Adobe Photoshop Basics',
];

export const portfolios = [
    {
        id: 1,
        title: 'Chop Chop Website',
        link: 'https://chop-chop.org/',
        image: '/images/chop-chop-mockups.png',
    },
    {
        id: 2,
        title: 'Savor Saver - AI Recipe Generator',
        link: 'https://savor-saver.com/',
        image: '/images/savor-saver-mockups.png',
    },
    {
        id: 3,
        title: 'My Personal Portfolio',
        link: '/',
        githubLink: 'https://github.com/kguzik/portfolio-karolina-guzik',
        image: '/images/portfolio-mockups.png',
    },
    {
        id: 4,
        title: 'Machtfit Website',
        link: 'https://www.machtfit.de/',
        image: '/images/machtfit-mockups.png',
    },
    {
        id: 5,
        title: 'Travel Blog',
        link: 'https://turystyczny.com.pl/',
        image: '/images/turystyczny-mockups.png',
    },
    {
        id: 6,
        title: 'Movie Quotes Quiz Game',
        link: 'https://kguzik.github.io/movie-quotes-quiz/',
        githubLink: 'https://github.com/kguzik/movie-quotes-quiz',
        image: '/images/movie-quotes-quiz-mockups.png',
    },
    {
        id: 7,
        title: 'Corpussanum Website',
        link: 'https://corpussanum.pl/',
        image: '/images/corpussanum-mockups.png',
    },
    {
        id: 8,
        title: 'Reveil Website',
        link: 'http://reveil.com.pl/',
        githubLink: 'https://github.com/kguzik/reveil',
        image: '/images/reveil-mockups.png',
    },
    {
        id: 9,
        title: 'AP Diet Website + Shop',
        link: 'https://apdiet.pl/',
        image: '/images/apdiet-mockups.png',
    },
    {
        id: 10,
        title: 'Pozytywnie o jedzeniu Website + Shop',
        link: 'https://pozytywnieojedzeniu.pl/',
        image: '/images/pozytywnie-mockups.png',
    },
    {
        id: 11,
        title: 'Który Kosz App',
        link: 'https://kguzik.github.io/ktory-kosz/',
        githubLink: 'https://github.com/kguzik/ktory-kosz',
        image: '/images/ktorykosz-mockups.png',
    },
    {
        id: 12,
        title: 'Biznestoq Blog',
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
        text: 'kontakt.ikagi@gmail.com',
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
        title: 'Mid Frontend Developer',
        company: 'Chop-Chop.org',
        duration: '2022 - Present',
        description: [
            'Working with WordPress, PHP, React.js, Next.js, TypeScript, Tailwind, Styled Components, CSS, SCSS, BEM, HTML, JavaScript, Nunjucks and Git',
            'Leading projects with teams of 2-3 developers, mentoring a frontend intern, communications with clients ',
            'Creating and optimizing development environments',
        ],
    },
    {
        id: 2,
        title: 'Freelance Web Developer',
        company: 'Ikagi Karolina Guzik',
        duration: '2020 - 2021',
        description: [
            'Freelance Web Developer working mostly with WordPress and WooCommerce',
            'Owner of an e-commerce business',
        ],
    },
    {
        id: 3,
        title: 'Web Developer',
        company: 'ASCO Systemy Informatyczne Sp. z o.o. Sp. k.',
        duration: '2019 - 2020',
        description: [
            'Implementing new solutions, SEO optimization and refactoring existing code using HTML, CSS3, JavaScript, jQuery, Bootstrap for e-commerce platforms',
            'Technical support',
        ],
    },
    {
        id: 4,
        title: 'Junior Front-End Developer',
        company: 'Pomeranian Development Studio',
        duration: '2018 - 2019',
        description: [
            'Development of websites for small and medium size businesses with focus on RWD, SEO and performance using HTML5, CSS3, Sass, JavaScript, PHP and WordPress.',
        ],
    },
    {
        id: 5,
        title: 'Massage Therapist / Receptionist',
        company: 'Kosmetyczny Instytut Dr Irena Eris',
        duration: '2016 - 2018',
        description: [],
    },
];
