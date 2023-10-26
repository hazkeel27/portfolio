import '../styles/footer.css';

const github = 'https://github.com/hazkeel27'
const linkedin = 'https://www.linkedin.com/in/hazkeel-qureshi/'
const githubLogo = 'https://img.icons8.com/material/50/github';
const linkedinLogo = 'https://img.icons8.com/color/50/linkedin';

export default function Home() {
    return (
    <footer className="footer mt-auto py-4 bg-dark-subtle fixed-bottom">
        <div className="container position-relative">
        <div className="text-muted position-absolute top-50 start-50 translate-middle">
            <a href={github} target="blank"><img className="logo-link" src={githubLogo} alt="GitHub Logo" /></a>
            <a href={linkedin} target="blank"><img className="logo-link" src={linkedinLogo} alt="LinkedIn Logo" /></a>
        </div>
        </div>
    </footer>
    );
  }