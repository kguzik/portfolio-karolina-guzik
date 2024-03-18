export type PortfolioItem = {
    id: number;
    title: string;
    link: string;
    githubLink?: string;
    image: string;
};

export type TimelineItem = {
    id: number;
    title: string;
    company: string;
    duration: string;
    description?: string[];
};
