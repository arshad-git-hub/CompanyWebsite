import Header from './header';
import serImg1 from './images/ser1.avif';
import serImg2 from './images/ser2.avif';
import serImg3 from './images/ser3.avif';
import serImg4 from './images/ser4.avif';
import serImg5 from './images/ser5.avif';
import serImg6 from './images/ser6.avif';

function Services() {
    return (
        <>
            <section className="services" id='services'>

                <h1 className='serHead line'>Services</h1>

                <div className="serContainer">
                    <div className="serBox">
                        <img src={serImg1} alt='pic'/>
                        <h2>Mobile Applications</h2>
                        <p>OS, Android ,React Native and Hybrid Apps (Enterprise, B2B, B2C, Consumer)</p>
                    </div>
                    <div className="serBox">
                        <img src={serImg2} alt='pic'/>
                        <h2>Core Systems</h2>
                        <p>Data Storage & Processing (RDBMS, No-SQL, Cache, Messaging)</p>
                    </div>
                    <div className="serBox">
                        <img src={serImg3} alt='pic'/>
                        <h2>System Integrations</h2>
                        <p>Connect & Extend Complex Systems (ERPs, CRMs, Plugins, API, EDI)</p>
                    </div>
                    <div className="serBox">
                        <img src={serImg4} alt='pic'/>
                        <h2>Consulting</h2>
                        <p>System Design & Architecture (Build vs Buy, End-to-End Flows)</p>
                    </div>
                    <div className="serBox">
                        <img src={serImg5} alt='pic'/>
                        <h2>User Interfaces</h2>
                        <p>UX Design & Build (Client-Side, Admin Panels, Responsive)</p>
                    </div>
                    <div className="serBox">
                        <img src={serImg6} alt='pic'/>
                        <h2>Support</h2>
                        <p>Technical & Customer Support (Phone, Chat, Email, Multi-Lingual)</p>
                    </div>
                </div>
            
            </section>
        </>
    )
}


export default Services