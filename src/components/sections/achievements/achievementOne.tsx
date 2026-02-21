import SectionTitle from '@/components/ui/sectionTitle';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievements = [
    {
        count: 6561,
        description: "Global Experts",
        icon: "/img/achievement-icon/icon-expertise.svg",
        delay: ".3"
    },
    {
        count: 600,
        description: "Successful Placements",
        icon: "/img/achievement-icon/icon-global.svg",
        delay: ".5"
    },
    {
        count: 250,
        description: "Innovation Solutions",
        icon: "/img/achievement-icon/icon-innovation.svg",
        delay: ".7"
    },
    {
        count: 590,
        description: "Client Support",
        icon: "/img/achievement-icon/icon-support.svg",
        delay: ".9"
    }
];

const AchievementOne = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <section className="achievement-section fix section-padding pt-0">
            <div className="container">
                <div className="achievement-wrapper">
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className='text-white'>
                            Talk to US
                        </SectionTitle.SubTitle>
                        <SectionTitle.Title className='text-white'>
                            Powering Global Success <br />Through Expert Talent
                        </SectionTitle.Title>
                    </SectionTitle>
                    <div className="counter-area" >
                        {achievements.map((achievement, index) => (
                            <div
                                className="counter-items wow slideUp"
                                data-delay={achievement.delay}
                                key={index}
                            >
                                <div className="icon">
                                    <img src={achievement.icon} alt="icon-img" />
                                </div>
                                <div className="content" ref={ref}>
                                    {
                                        inView &&
                                        <h2>
                                            <span className="count"><CountUp end={achievement.count} /></span>+
                                        </h2>
                                    }
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementOne