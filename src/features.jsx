import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import top2 from './images/top.png'

function Features() {

    function Top() {
      window.location.href = "#";
    };

    return (
        <div className="three-tab" id='features'>
                <div className="three">
                    <div className="serIcon">
                        <FontAwesomeIcon icon={faGgCircle} />
                    </div>
                    <h2>Quality</h2>
                    <p>Quality is never compromised both of the solution and the software code</p>
                </div>
                <div className="three">
                    <div className="serIcon">
                        <FontAwesomeIcon icon={faGgCircle} />
                    </div>
                    <h2>Speed</h2>
                    <p>A quick turn around of deliverables gives more time to validate ideas</p>
                </div>
                <div className="three">
                    <div className="serIcon">
                        <FontAwesomeIcon icon={faGgCircle} />
                    </div>
                    <h2>Price</h2>
                    <p>In-country management with overseas development keeps costs down</p>
                </div>

                {/* TOP BUTTON */}

                <div className="top" onClick={Top}>
                    <img src={top2} alt="pic"/>
                </div>

            </div>
    )
}


export default Features