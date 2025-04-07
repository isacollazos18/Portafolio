import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../../context/LenguageContext";
import { CheckCircle, Code, Users, Lightbulb } from "lucide-react";
import './styles.scss';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    specialization: string;
    github: string;
    linkedin: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Juan Felipe Pavon",
        role: "Ingeniero Multimedia",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQF5WOfvBoSfew/profile-displayphoto-shrink_200_200/B4EZXab8gOH0AY-/0/1743126514104?e=1748476800&v=beta&t=zVkR898XRnqOcH6t4PV7JIVelrxie91qf8HjtwSDh5s",
        specialization: "Experiencia de Usuario & Diseño",
        github: "https://github.com/JacobS1970",
        linkedin: "https://www.linkedin.com/in/juan-felipe-pavón-gallo-202b0a2a4/"
    },
    {
        id: 2,
        name: "Isabella Collazos Bojorge",
        role: "Ingeniera Multimedia",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQFbA5YQ8SAD9Q/profile-displayphoto-shrink_800_800/B4EZXaaUVFGwAc-/0/1743126087513?e=1748476800&v=beta&t=tV9UFxzq2qe4yTyskeVaw4LgJqmdQSfoaswbVU9fcIo",
        specialization: "Desarrolladora Fullstack",
        github: "https://github.com/isacollazos18",
        linkedin: "https://www.linkedin.com/in/isabella-collazos-bojorge-a913b7257/"
    },
    {
        id: 3,
        name: "Juan Pablo Parra",
        role: "Ingeniero Multimedia",
        image: "src\\img\\juanpablopa.jpg",
        specialization: "Desarrollador Frontend",
        github: "https://github.com/juanparra",
        linkedin: "https://www.linkedin.com/in/juan-pablo-parra-holguin-2a4739256/"
    }
];

const About = () => {
    const { texts } = useLanguage();

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{texts.aboutTitle}</h2>
                    <div className="divider"></div>
                    <p className="section-description">{texts.aboutDescription}</p>
                </div>
                <div className="features">
                    <div className="feature-card orange-border">
                        <div className="feature-icon orange-bg">
                            <Code size={32} />
                        </div>
                        <h3 className="feature-title">{texts.feature1Title}</h3>
                        <p className="feature-description">{texts.feature1Description}</p>
                    </div>
                    <div className="feature-card purple-border">
                        <div className="feature-icon purple-bg">
                            <Lightbulb size={32} />
                        </div>
                        <h3 className="feature-title">{texts.feature2Title}</h3>
                        <p className="feature-description">{texts.feature2Description}</p>
                    </div>
                    <div className="feature-card blue-border">
                        <div className="feature-icon blue-bg">
                            <Users size={32} />
                        </div>
                        <h3 className="feature-title">{texts.feature3Title}</h3>
                        <p className="feature-description">{texts.feature3Description}</p>
                    </div>
                </div>
                <div className="team-section">
                    <h3 className="team-title">{texts.teamTitle}</h3>
                    <div className="team-members">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="team-card">
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className={`member-info ${member.id % 3 === 1 ? 'orange-border' : member.id % 3 === 2 ? 'purple-border' : 'blue-border'}`}>
                                    <h4 className="member-name">{member.name}</h4>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-specialization">{member.specialization}</p>
                                    <div className="social-links">
                                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub size={24} />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
