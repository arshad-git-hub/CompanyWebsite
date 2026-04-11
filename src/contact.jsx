import Header from "./header"
import Footer from './copyright';

function Contact() {
    return (
        <>
            <Header/>
            <section className="contact" id="contact">
            <h1 className="conHead">Contact <span>Us</span></h1>
            <form action="submit" className="contactForm">
                <div className="fullname">
                    <div className="firstname name">
                        <input type="text" name="firstname" id="" placeholder="First Name" required/>
                    </div>
                    <div className="lastname name">
                        <input type="text" name="lastname" id="" placeholder="Last Name" required/>
                    </div>
                </div>
                <div className="conDetails">
                    <div className="phone cont">
                        <input type="phone" name="phone" id="" placeholder="Phone" required/>
                    </div>
                    <div className="email cont">
                        <input type="email" name="email" id="" placeholder="Email" required/>
                    </div>
                </div>
                <div className="textArea">
                    <textarea name="" id="" placeholder="Enter test here..."></textarea>
                </div>
                <div className="buttons">
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </section>
            <Footer/>
        </>
    )
}

export default Contact