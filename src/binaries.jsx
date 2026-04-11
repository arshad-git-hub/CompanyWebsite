import bin1 from './images/bin (1).jpeg'
import bin2 from './images/bin (2).jpeg'
import bin3 from './images/bin (3).webp'
import bin4 from './images/bin (4).webp'
import bin5 from './images/bin (5).webp'
import bin6 from './images/bin (6).webp'
import bin7 from './images/bin (7).webp'
import bin8 from './images/bin (8).webp'
import bin9 from './images/bin (9).jpg'
import bin10 from './images/bin (10).jpg'
import bin11 from './images/bin (11).png'

function Binaries() {

  return (
    <section className="binaries" id="binaries">
        <h1 className='binHead'>Meet Our Binaries</h1>
        <div className='binContainer'>
            {/* <div className="binBox">
                <img src={bin1} alt="" />
                <h2>Shubha Shukla</h2>
                <p>Vertical Lead | Finance & Quality</p>
            </div> */}
            <div className="binBox">
                <img src={bin2} alt="" />
                <h2>Arup Kanti Das</h2>
                <p>Vertical Lead | Server Side Engineering</p>
            </div>
            <div className="binBox">
                <img src={bin3} alt="" />
                <h2>Shobhit Bhatnagaer</h2>
                <p>Vertical Lead | R&D</p>
            </div>
            <div className="binBox">
                <img src={bin4} alt="" />
                <h2>Bhawna Prasad</h2>
                <p>Vertical Lead | Human Resources</p>
            </div>
            <div className="binBox">
                <img src={bin5} alt="" />
                <h2>Heena Sharma</h2>
                <p>Vertical Lead | Enterprises Integration</p>
            </div>
            <div className="binBox">
                <img src={bin6} alt="" />
                <h2>Akansh Gautam</h2>
                <p>Lead | Server Side Engineering</p>
            </div>
            <div className="binBox">
                <img src={bin7} alt="" />
                <h2>Saurabh Singh</h2>
                <p>Vertical Lead | Digital Marketing</p>
            </div>
            <div className="binBox">
                <img src={bin8} alt="" />
                <h2>Aditya Jetely</h2>
                <p>Vertical Lead | Server Side Engineering</p>
            </div>
            <div className="binBox">
                <img src={bin9} alt="" />
                <h2>Esha Goyal</h2>
                <p>Vertical Lead | Frontend Engineer</p>
            </div>
            <div className="binBox">
                <img src={bin10} alt="" />
                <h2>Ketan Sadh</h2>
                <p>Infrastructure Engineer</p>
            </div>
            <div className="binBox">
                <img src={bin11} alt="" />
                <h2>Osama Khan</h2>
                <p>Senior Software Engineer</p>
            </div>
        </div>
    </section>
  )
}
export default Binaries