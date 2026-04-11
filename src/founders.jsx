import mayank from "./images/mayank.avif"
import ruben from "./images/ruben.avif"
import shubha from "./images/shubha.avif"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const founderDetails = [
    {
        name: 'Mayank Shukla',
        image : mayank,
        post: 'Founder & Managing Director',
        details: "With more than 16 years of technology experience, Mayank's passion is solving real world problems with viable solutions while engineering products from concept to scale. He has successfully setup development teams for 2 startups and implemented e-commerce, ERP, CRM, and automation systems for large enterprises across Asia-Pacific and India.",
    },
    {
        name: 'Ruben Martin',
        image: ruben,
        post: 'Founder & Business Strategy Advisor',
        details: "16+ years of software industry experience, Ruben's enterprise software expertise stems from various roles at small niche businesses to large technology companies in North America and Asia-Pacific. He's currently Co-Founder & CEO at Quivers Inc and an active mentor across multiple startup businesses.",
    },
    {
        name: 'Shubha Shukla',
        image: shubha,
        post: 'Head Of Operations & Compliances',
        details: "14+ years. Shubha has spent over a decade mastering the art of ensuring quality and leading SOC2 and ISO compliances. Worked with complex financial and insurance enterprises. Her sharp eye for detail, paired with a boldness to think beyond the obvious, has made her the driving force behind consistently exceptional product and project deliveries.",
    }
]

function Founders() {
    return (
        <section className="foundWrapper" id="founders">
            <h1 className="foundHead">Leadership</h1>
            {founderDetails.map((found) => {
                return (
                    <div className="foundContainer">
                        <div className="foundBox">
                            <img src={found.image}/>
                            <div className="foundDetails">
                                <h2>{found.name}</h2>
                                <h5>{found.post}</h5>
                                <p>{found.details}</p>
                            </div>
                            <div className="foundIcon">
                                <FontAwesomeIcon icon={faLinkedin} href="google.com"/>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </section>
    )
}

export default Founders