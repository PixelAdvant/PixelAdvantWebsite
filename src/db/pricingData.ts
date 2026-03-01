export type PriceDataType ={
    id:number | string,
    plan: string,
    price: string,
    frequency: string,
    description: string,
    features: string[],
    buttonText: string,
    buttonLink: string,
    delay: string,
    isActive: boolean
}
export const pricingData:PriceDataType[] = [
    {
        id: 'monthly-basic',
        plan: 'Basic Plan',
        price: '$149',
        frequency: 'Per month',
        description: 'Essential support for GCC planning and foundational hiring workflows.',
        features: [
            'GCC setup consultation',
            'Role and skill mapping',
            'Market benchmark snapshot',
            'Workflow template pack',
            'Monthly performance review'
        ],
        buttonText: 'Choose Plan',
        buttonLink: '/contact',
        delay: '.3',
        isActive: false
    },
    {
        id: 'monthly-popular',
        plan: 'Most Popular',
        price: '$179',
        frequency: 'Per month',
        description: 'Balanced plan for scaling talent operations with governance controls.',
        features: [
            'AI-led sourcing workflow',
            'Interview and pipeline dashboard',
            'SLA and governance tracking',
            'Managed recruitment support',
            'Bi-weekly optimization reviews'
        ],
        buttonText: 'Choose Plan',
        buttonLink: '/contact',
        delay: '.5',
        isActive: true
    },
    {
        id: 'monthly-premium',
        plan: 'Premium',
        price: '$199',
        frequency: 'Per month',
        description: 'Comprehensive model for enterprise-grade GCC growth and operations.',
        features: [
            'End-to-end GCC execution support',
            'Advanced workforce analytics',
            'Compliance and controls advisory',
            'Dedicated delivery governance',
            'Continuous scale and maturity roadmap'
        ],
        buttonText: 'Choose Plan',
        buttonLink: '/contact',
        delay: '.7',
        isActive: false
    }
];
