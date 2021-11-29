import "./Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="footer">
      Made by SebasDrewes
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
    </footer>
  );
}
