import { FaGithub, FaSlack } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import profileImg from "./img/mg.jpg";
import slack from "./img/Slack_icon_2019.svg.png";
import zuri from "./img/zuri-internship-img.svg";
import logo from "./img/download.png"
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div className="container">
      
      <button className='forward'><TiArrowForwardOutline></TiArrowForwardOutline></button>
      <button className='menu'><BiDotsHorizontalRounded></BiDotsHorizontalRounded></button>
      <div className="profile">
        <img src={profileImg} alt="profile image" id="profile__img" />
        <p id="twitter">ElaigwuMichael1</p>
        <p id="slack">Coach</p>
      </div>

      <div className="links">
          <a id='btn__zuri'
            href="https://training.zuri.team/"
            target="_blank"
            rel="noreferrer"
          >
            Zuri Team
          </a>

          <a id='books' href="http://books.zuri.team/" target="_blank" rel="noreferrer">
            Zuri Books
          </a>

          <a id='book__python'
            href="https://books.zuri.team/python-for-beginners?ref_id=Coach"
            target="_blank"
            rel="noreferrer"
          >
            Python Books
          </a>

          <a id='pitch'
            href="https://background.zuri.team/"
            target="_blank"
            rel="noreferrer"
          >
            Backgrund Check for Coders
          </a>
          <a id='book__design'
            href="https://books.zuri.team/design-rules"
            target="_blank"
            rel="noreferrer"
          >
            Design Books
          </a>
          <a id='contact'
            href="/contact"
            rel="noreferrer"
            target="_parent"
          >
            Contact me
          </a>
          
          
        
        <div className="other-links">
          <a
            href="https://slack.com/workspace-signin"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img src={slack} alt="" />
            </button>
          </a>
          <a
            href="https://github.com/elaigwum"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FaGithub></FaGithub>
            </button>
          </a>
        </div>
  </div>
      <div className="footer">
        <p className="image image1">
          <img src={zuri} alt="" />
        </p>
        <p className="text">HNG Internship 9 Frontend Task</p>
        <p className="image image2">
          <img src={logo} alt="" />
        </p>
      </div>
    </div>
    )
}

export default Links;