import eCommerce from '../images/e-commerce-backend.png';
import jate from '../images/jate.png';
import socialNetwork from '../images/social-network-api.png';
import sqlEmployee from '../images/sql-employee-tracker.png';
import techblog  from '../images/techblog.png';
import weatherDashboard from '../images/weather-dashboard.png';
import ekin from '../images/ekin.png';
import '../styles/portfolio.css';

const imageClass = 'card projectCard bg-light-subtle border border-border-subtle rounded-3 col-sm-6 col-md-4 col-xl-3 mb-3'

export default function About() {
  return (
    <div className='portfolio container'>
      <h2 className='row d-flex justify-content-center'>Portfolio</h2> 
      <div className='row d-flex justify-content-center'>

        <div className={imageClass}>
          <img src={jate} className="img-thumbnail mb-3 projectPic" alt="jate" />
          <div className="card-body">
            <h5 className="card-title">PWA-Text-Editor</h5>
            <p className="card-text">An installable Progressive Web Application text editor that caches data.</p>
            <a href="https://jate-pwa-by-hazkeel-d4563377d2c2.herokuapp.com/" className="card-link">Deployed App</a><br />
            <a href="https://github.com/hazkeel27/pwa-text-editor" className="card-link">GitHub Repository</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={techblog} className="img-thumbnail mb-2 projectPic" alt="tech-blog" />
          <div className="card-body">
            <h5 className="card-title">Tech-Blog-2.0</h5>
            <p className="card-text">A Full stack blog post application that utilizes the MVC paradigm and requires user authentication.</p>
            <a href="https://tech-blog-by-hazkeel-afa319c93183.herokuapp.com/" className="card-link">Deployed App</a><br />
            <a href="https://github.com/hazkeel27/tech-blog-2.0" className="card-link">GitHub Repository</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={eCommerce} className="img-thumbnail mb-3 projectPic" alt="e-commerce-backend" />
          <div className="card-body">
            <h5 className="card-title">E-Commerce-Backend</h5>
            <p className="card-text">An e-commerce backend API built with sequelizejs using mysql database.</p>
            <a href="https://drive.google.com/file/d/10jUaEcrJ4KpqwvfwwWy5nJIL0gdZeDRT/view" className="card-link">Application Demo</a><br />
            <a href="https://github.com/hazkeel27/e-commerce-backend" className="card-link">GitHub Repository</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={socialNetwork} className="img-thumbnail mb-3 projectPic" alt="social-network-api" />
          <div className="card-body">
            <h5 className="card-title">Social-Network-API</h5>
            <p className="card-text">Backend API built on a NoSQL database using MongoDB and Mongoose NPM dependency.</p>
            <a href="https://drive.google.com/file/d/1j5PwWSdAqfp0a-7-Ektc6K7UjFg3xFHB/view" className="card-link">Application Demo</a><br />
            <a href="https://github.com/hazkeel27/social-network-api" className="card-link">GitHub Repository</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={sqlEmployee} className="img-thumbnail mb-3 projectPic" alt="sql-employee-tracker" />
          <div className="card-body">
            <h5 className="card-title">SQL-Employee-Tracker</h5>
            <p className="card-text">View and interact with MySQL databases using Content Management System (CMS) from command line.</p>
            <a href="https://drive.google.com/file/d/1_1BuaXizdWtK82mw7pH_hvq-EYYwkUdI/view" className="card-link">Application Demo</a><br />
            <a href="https://github.com/hazkeel27/sql-employee-tracker" className="card-link">GitHub Repository</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={weatherDashboard} className="img-thumbnail mb-3 projectPic" alt="weather-dashboard" />
          <div className="card-body">
            <h5 className="card-title">Weather-Dashboard</h5>
            <p className="card-text">Displays current and future forecast for a searched city.</p>
            <a href="https://hazkeel27.github.io/weather-dashboard/" className="card-link">Deployed App</a><br />
            <a href="https://github.com/hazkeel27/weather-dashboard" className="card-link">GitHub Repository</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={ekin} className="img-thumbnail mb-3 projectPic" alt="ekin" />
          <div className="card-body">
            <h5 className="card-title">EKIN</h5>
            <p className="card-text">MERN Stack E-Commerce application for online apparel shopping experience.</p>
            <a href="https://ekin555-f6889f1fc8cf.herokuapp.com/" className="card-link">Deployed App</a><br />
            <a href="https://github.com/SanjeethTharmarajah/ekin" className="card-link">GitHub Repository</a>
          </div>
        </div>

      </div>
    </div>
  );
}
