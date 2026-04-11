import proImg1 from './images/products (1).jpg';
import proImg2 from './images/products (2).jpg';
import proImg3 from './images/products (3).jpg';

function Products() {
    return (
        <section className="products" id='products'>

            <h1 className='proHead'>Products</h1>

            <div className="proContainer">
                <div className="proBox">
                    <img src={proImg1} alt='pic'/>
                    <h5>GraniteStack</h5>
                    <h2>Platform on Demand</h2>
                    <p><a href="https://granitestack.com/">GraniteStack</a> build and launch new software 20x Less Expensive and 8x Faster than Traditional Methods. GraniteStack enables effortless creation of Minimum Viable Products (MVPs), enabling a low-cost approach to validate ideas while preparing for scale.</p>
                </div>
                <div className="proBox">
                    <img src={proImg2} alt='pic'/>
                    <h5>Konect</h5>
                    <h2>The Middleware</h2>
                    <p>Konect is a configurable and scalable middleware platform, enabling seamless data flow between systems. Konect acts as the communication broker between multiple systems and is used as the plugin platform to industry-standard and/or custom solutions</p>
                </div>
                <div className="proBox">
                    <img src={proImg3} alt='pic'/>
                    <h5>Join Wheels</h5>
                    <h2>The Carpooling App</h2>
                    <p>Join Wheels is a Smart Commuting Platform for iOS and Android Apps allowing corporate, government, and other entities to deploy ride-sharing capabilities to their constituents, employees, and team members. JoinWheels reduces traffic while saving time and money.</p>
                </div>
            </div>
        
        </section>
    )
}


export default Products