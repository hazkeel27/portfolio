import '../styles/resume.css';
import resume from '../assets/resume.pdf';

const logos = {
  html: 'https://img.icons8.com/color/50/html-5',
  css: 'https://img.icons8.com/color/50/css3',
  js: 'https://img.icons8.com/color/50/javascript',
  py: 'https://img.icons8.com/color/50/python',
  sql: 'https://img.icons8.com/color/50/sql',
  c: 'https://img.icons8.com/color/50/c-programming',
  cpp: 'https://img.icons8.com/color/50/c-plus-plus-logo',
  csharp: 'https://img.icons8.com/color/50/c-sharp-logo',
  dotnet: 'https://img.icons8.com/color/50/net-framework',
  bootstrap: 'https://img.icons8.com/nolan/50/bootstrap',
  express: 'https://img.icons8.com/nolan/50/express-js',
  react: 'https://img.icons8.com/ultraviolet/50/react',
  git: 'https://img.icons8.com/nolan/50/git',
  node: 'https://img.icons8.com/color/50/nodejs',
  fortinet: 'https://img.icons8.com/color/50/cyber-security',
  jquery: 'https://img.icons8.com/ios/50/jquery',
  json: 'https://img.icons8.com/nolan/50/json',
  handlebars: 'https://img.icons8.com/win8/50/handlebarsjs',
  mysql: 'https://img.icons8.com/color/50/mysql',
  mongodb: 'https://img.icons8.com/color/50/mongodb',
  mongoose: 'https://img.icons8.com/color/50/mongoose',
  dom: 'https://img.icons8.com/win8/50/dom',
  api: 'https://img.icons8.com/win8/50/api',
  pwa: 'https://img.icons8.com/win8/50/pwa',
  oop: 'https://img.icons8.com/win8/50/oop',
  mvc: 'https://img.icons8.com/win8/50/mvc',
  agile: 'https://img.icons8.com/win8/50/agile',
};

export default function Blog() {
  return (
    <div className="container resume">
      <h2>
        Resume 
        <button type="button" className="btn btn-light ms-3"><a href={resume} download>Download Resume</a></button>
      </h2> 
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Languages:</b> 
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src={logos.html} alt="html" />
              <img src={logos.css} alt="css" />
              <img src={logos.js} alt="javascript" />
              <img src={logos.py} alt="python" />
              <img src={logos.sql} alt="sql" />
              <img src={logos.c} alt="c programming" />
              <img src={logos.cpp} alt="c++" />
              <img src={logos.csharp} alt="c#" />
              <img src={logos.dotnet} alt=".NET" />
            </li>
          </ul>
        </li>
        <li className="list-group-item"><b>Frameworks:</b>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src={logos.bootstrap} alt="bootstrap" />
              <img src={logos.express} alt="express" />
              <img src={logos.react} alt="react" />
            </li>
          </ul>
        </li>
        <li className="list-group-item"><b>Developer Tools:</b>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src={logos.git} alt="git" />
              <img src={logos.node} alt="nodejs" />
              <img src={logos.fortinet} alt="fortinet cybersecurity" />
            </li>
          </ul>
        </li>
        <li className="list-group-item"><b>Libraries: </b>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src={logos.jquery} alt="jquery" />
              <img src={logos.json} alt="json" />
            </li>
          </ul>
        </li>
        <li className="list-group-item"><b>Database Technologies:</b>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <img src={logos.mysql} alt="MySQL" />
              <img src={logos.mongodb} alt="MongoDB" />
              <img src={logos.mongoose} alt="Mongoose" />
            </li>
          </ul>
        </li>
        <li className="list-group-item"><b>Web Development Technologies:</b>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Document Object Model:</b> The DOM is a web programming interface that enables dynamic manipulation of webpage content, structure, and style using languages like JavaScript.</li>
            <li className="list-group-item"><b>Third-party & Server-side APIs:</b> These APIs allow applications to access external services and server resources for data, functionality, and integrations.</li>
            <li className="list-group-item"><b>Progressive Web Applications:</b> PWAs provide an app-like experience on the web, offering offline access, push notifications, and installation, enhancing user engagement.</li>
          </ul>
        </li>
        <li className="list-group-item"><b>Methodologies and Concepts:</b>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Object-Oriented Programming:</b> OOP organizes code into reusable objects, promoting modularity and simplifying complex application development.</li>
            <li className="list-group-item"><b>Model-View-Controller:</b> MVC is a design pattern that separates software into Model (data), View (UI), and Controller (user input), improving code structure and maintainability.</li>
            <li className="list-group-item"><b>Agile Development:</b> Agile methodologies emphasize flexibility and collaboration, delivering high-quality software that adapts to evolving customer needs.</li>
            <li className="list-group-item"><b>MERN Stack:</b> The MERN stack comprises MongoDB, Express.js, React, and Node.js, providing a unified JavaScript-based platform for building full-stack web applications.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
