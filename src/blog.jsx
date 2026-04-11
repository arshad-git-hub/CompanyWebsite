import Header from './header'
import Footer from './copyright';

import blog1 from './images/blog1.jpg'
import blog2 from './images/blog2.webp'
import blog3 from './images/blog3.jpg'
import blog4 from './images/blog4.jpg'
import blog5 from './images/blog5.jpg'
import blog6 from './images/blog6.avif'
import blog7 from './images/blog7.jpg'
import blog8 from './images/blog8.jpg'
import blog9 from './images/blog9.jpg'
import blog10 from './images/blog10.webp'
import { Link,NavLink } from 'react-router-dom';

export const techArticles = [
  {
    img: blog1,
    id: "1",
    tag: 'india',
    date: "10 Oct 2025",
    heading: "India launches AI platform",
    details: "India has unveiled a new AI-powered platform designed to enhance electric vehicle manufacturing and energy management. The platform will optimize charging networks, reduce energy waste, and help EV startups innovate faster. Developed through a collaboration between government and private tech firms, the project aims to make India a global hub for sustainable mobility and smart energy solutions.",
  },
  {
    img: blog10,
    id: 2,
    tag: 'SCIENCE',
    date: "9 Oct 2025",
    heading: "ISRO tests reusable shuttle",
    details: "ISRO successfully tested its next-generation reusable space vehicle at the Sriharikota launch site. This shuttle is designed to cut launch costs significantly and support multiple missions with minimal refurbishment. The test demonstrated advanced thermal protection and autonomous landing systems, bringing India closer to competing with global private space companies like SpaceX and Blue Origin.",
  },
  {
    img: blog3,
    id: 3,
    tag: 'india',
    date: "8 Oct 2025",
    heading: "Factories adopt smart robotics",
    details: "Several Indian manufacturing plants have begun integrating robotics and automation to improve precision, safety, and productivity. These smart factories are using AI-driven machines that can learn from past data and optimize workflows. This shift is expected to strengthen India’s position as a major manufacturing hub under the ‘Make in India’ initiative.",
  },
  {
    img: blog4,
    id: 4,
    tag: 'internet',
    date: "7 Oct 2025",
    heading: "5G rollout transforms India",
    details: "Telecom companies in India have expanded 5G coverage to over 600 cities, providing high-speed internet for businesses, education, and healthcare. The technology enables low-latency connections, supporting innovations such as remote surgery and autonomous vehicles. The government is also exploring 6G research partnerships to stay ahead in the global telecom race.",
  },
  {
    img: blog5,
    id: 5,
    tag: 'india',
    date: "6 Oct 2025",
    heading: "Startups attract record funding",
    details: "Indian clean-tech startups have secured record-breaking investments from global venture capitalists. The funds are being directed toward solar energy, battery storage, and green hydrogen projects. With increasing government incentives, the clean-tech ecosystem is becoming one of India’s fastest-growing technology domains, aiming for net-zero emissions by 2070.",
  },
  {
    img: blog6,
    id: 6,
    tag: 'application',
    date: "5 Oct 2025",
    heading: "AI boosts national cybersecurity",
    details: "The Indian government has introduced a new AI-based cybersecurity framework to protect critical digital infrastructure. This initiative focuses on early threat detection, real-time response, and citizen data safety. It involves collaboration between defense organizations and private cybersecurity firms to build a resilient, secure, and trusted digital ecosystem for the nation.",
  },
  {
    img: blog7,
    id: 7,
    tag: 'technology',
    date: "4 Oct 2025",
    heading: "AI tutors enhance learning",
    details: "Indian EdTech firms have launched advanced AI tutors capable of understanding individual learning patterns and customizing study plans. These tools provide real-time feedback, generate adaptive tests, and assist teachers in identifying student weaknesses. Experts believe AI-driven learning can significantly improve education accessibility and quality in rural areas.",
  },
  {
    img: blog8,
    id: 8,
    tag: 'banking',
    date: "3 Oct 2025",
    heading: "Banks embrace blockchain tech",
    details: "Leading Indian banks are adopting blockchain technology to improve transparency and reduce fraud in digital payments. The distributed ledger system enables faster settlements, enhanced data integrity, and better audit trails. This innovation is part of a broader effort to modernize India’s banking sector and support the growing fintech ecosystem.",
  },
  {
    img: blog9,
    id: 9,
    tag: 'technology',
    date: "2 Oct 2025",
    heading: "Cloud adoption grows rapidly",
    details: "A rising number of Indian enterprises are migrating to cloud platforms for scalability and flexibility. Cloud computing enables businesses to manage data efficiently while reducing IT infrastructure costs. This trend accelerated after the pandemic and continues to grow as hybrid work becomes the new normal across industries.",
  },{
    img: blog10,
    id: 10,
    tag: 'Internet',
    date: "1 Oct 2025",
    heading: "AI revolutionizes healthcare",
    details: "AI-driven analytics tools are transforming healthcare delivery in India by predicting diseases and personalizing treatments. Hospitals are adopting machine learning models to analyze patient data, detect early symptoms, and recommend preventive care. These technologies promise to reduce costs and enhance healthcare accessibility across both rural and urban regions.",
  },
];

function Blog () {
    return (
        <>
            <Header/>
            <section className="blog">
                <h1 className="blogHead">Our <span>Blogs</span></h1>
                <div className="blogContainer">
                    {techArticles.map((techNews,i) => {
                        return (
                            <div className="blogBox" >
                                <div className="blogImage">
                                    <img src={techNews.img} alt="" />
                                    <h4>{techNews.tag}</h4>
                                </div>
                                <div className="blogDetails">
                                    <h2>{techNews.heading}</h2>
                                    <h6>Date : {techNews.date}</h6>
                                    <p>{techNews.details}</p>
                                    <button className='btn1'>
                                      <Link to={`/blog/${techNews.id}`}>Read More</Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer/>
        </>
        
    )
}

export default Blog