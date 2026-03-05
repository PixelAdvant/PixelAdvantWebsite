export interface TestimonialType {
    id: number;
    name: string;
    role: string;
    image: string;
    icon: string;
    stars: number;
    feedback: string;
}

export const testimonialsTwoData:TestimonialType[] = [
    {
        id: 1,
        name: 'Aparna Rao',
        role: 'Head of GCC Programs',
        image: '/img/testimonial/02.jpg',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'PixelAdvant gave us a structured operating model and measurable execution plan for our GCC launch. The speed and quality of delivery were exactly what we needed.',
    },
    {
        id: 2,
        name: 'Rahul Menon',
        role: 'VP, Shared Services',
        image: '/img/testimonial/03.jpg',
        icon: '/img/testimonial/icon.png',
        stars: 4.5,
        feedback: 'Their managed services team improved process consistency and SLA performance across functions. Reporting clarity helped us make faster operational decisions.',
    },
    {
        id: 3,
        name: 'Neha Kulkarni',
        role: 'Director, Talent Acquisition',
        image: '/img/testimonial/02.jpg',
        icon: '/img/testimonial/icon.png',
        stars: 5,
        feedback: 'The AI-led hiring workflow improved shortlist quality and reduced time-to-hire. PixelAdvant feels like an extension of our internal recruitment team.',
    },
];
