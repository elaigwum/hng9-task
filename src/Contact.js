import zuri from "./img/zuri-internship-img.svg";
import logo from "./img/download.png";
const Contact = () => {
    return (
        <form className="form">
            <h2>Contact Me <a href="/">Back</a></h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <div className="name label">
            <label htmlFor="first_name">First name
                <input type="text" id="first_name" placeholder="Enter your first name" />
            </label>
            <label htmlFor="last_name">Last name
                <input type="text" id="last_name" placeholder="Enter your last name" />
            </label>
            </div>
            
            <label htmlFor="email" className="label">Email
                <input type="email" className="email" id="email" placeholder="yourname@email.com" />
            </label>
            <label htmlFor="message" className="label">Message
                <textarea
                 name="message" 
                 id="message" 
                 cols="30" rows="10" 
                 placeholder="Send me a message and I'll reply you as soon as possible...">
                </textarea>
            </label>
            <div className="checkbox label">
            <input type="checkbox" className="checkbox"/> You agree to providing your data to Michael who may contact you.
            </div>
            
            <button className="btn label" id="btn__submit">Send message</button>
            <div className="footer">
        <p className="image image1">
          <img src={zuri} alt="" />
        </p>
        <p className="text">HNG Internship 9 Frontend Task</p>
        <p className="image image2">
          <img src={logo} alt="" />
        </p>
      </div>
        </form>
    )
}

export default Contact;