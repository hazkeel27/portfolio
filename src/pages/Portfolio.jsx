import eCommerce from '../images/e-commerce-backend.png';
import jate from '../images/jate.png';
import socialNetwork from '../images/social-network-api.png';
import sqlEmployee from '../images/sql-employee-tracker.png';
import techblog  from '../images/techblog.png';
import weatherDashboard from '../images/weather-dashboard.png';
import '../styles/portfolio.css';

const imageClass = 'card projectCard col-sm-6 col-md-4 col-xl-3 mb-3'

export default function About() {
  return (
    <div className='portfolio container'>
      <div className='row justify-content-evenly'>

        <div className={imageClass}>
          <img src={jate} className="img-thumbnail mb-3 projectPic" alt="jate" />
          <div className="card-body">
            <h5 className="card-title">E-Commerce-Backend</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={techblog} className="img-thumbnail mb-3 projectPic" alt="tech-blog" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={eCommerce} className="img-thumbnail mb-3 projectPic" alt="e-commerce-backend" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={socialNetwork} className="img-thumbnail mb-3 projectPic" alt="social-network-api" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={sqlEmployee} className="img-thumbnail mb-3 projectPic" alt="sql-employee-tracker" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className={imageClass}>
          <img src={weatherDashboard} className="img-thumbnail mb-3 projectPic" alt="weather-dashboard" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

      </div>
    </div>
  );
}
