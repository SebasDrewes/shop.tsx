import "./Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer() {
  return (
    <footer className="footer">
      Contact
      <a
        href="https://linkedin.com/in/sebasdrewes"
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
      >
        <LinkedInIcon className="LinkedInIcon" />
      </a>
      <a
        href="https://github.com/sebasdrewes"
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
      >
        <GitHubIcon className="GitHubIcon" />
      </a>
      <a
        href="https://linkedin.com/in/sebasdrewes"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FacebookIcon className="LinkedInIcon" />
      </a>
      <a
        href="https://linkedin.com/in/sebasdrewes"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <TwitterIcon className="LinkedInIcon" />
      </a>
      <a
        href="https://linkedin.com/in/sebasdrewes"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <InstagramIcon className="LinkedInIcon" />
      </a>
    </footer>
  );
}
