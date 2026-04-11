import { Footer } from "@fortawesome/free-regular-svg-icons"

function Copyright() {
    return (
        <footer className="copyright" id="copyright">
            <div className="location">
                <h2>
                    AUSTRALIA  <br />
                    MELBOURNE, VIC | SYDNEY, NSW
                </h2>
                <h2>
                    USA  <br />
                    SALT LAKE CITY, UT
                </h2>
            </div>
            <p>Copyright © {new Date().getFullYear()} <span>Thoughts2binary</span>. All rights reserved.</p> <br />
            <p>Company's name and logo are trademarks of <span>Thoughts2binary</span> Pty Ltd.</p>
            <p>All other trademarks are the property of their respective owners.</p>
            <p>ACN: 619154193</p>
        </footer>
    )
}

export default Copyright