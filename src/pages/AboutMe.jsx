import '../styles/aboutMe.css';
import pfp from '../images/pfp-pic.jpg';
//col-lg-5 col-md-6 col-sm-12

export default function AboutMe() {
  return (
    <div className="aboutMe container position-absolute top-50 start-50 translate-middle overflow-auto">
      <div className="aboutMe-row row">
        <div className='col-lg-6 col-md-7 col-sm-12 d-flex align-items-center justify-content-center'>
          <img className="pfp-pic img-fluid" src={pfp} alt="Profile Picture" />
        </div>
        <div className='col-lg-6 col-md-5 col-sm-12 d-flex align-items-center'>
          <p>
          Full-Stack Developer with a passion for crafting visually captivating designs and developing data-driven applications.
          <br /><br />
          Specializing in UI/UX design, and data manipulation. Leveraging my strengths, I am excited to take on new challenges and further expand my skill set.
          <br /><br />
          OpenAI&apos;s innovations have captured my interest and I am now determined to dive into artificial intelligence. Looking ahead, I am committed to acquiring the knowledge needed to craft powerful chatbots that foster meaningful interactions with users.
          </p>
        </div>
      </div>
    </div>
  );
}
