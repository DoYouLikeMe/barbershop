import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="social">
      <a href="#" className="social__link">
        <FontAwesomeIcon className="social__icon" icon={faInstagram} />
      </a>
      <a href="#" className="social__link">
        <FontAwesomeIcon className="social__icon" icon={faFacebook} />
      </a>
      <a href="#" className="social__link">
        <FontAwesomeIcon className="social__icon" icon={faLinkedin} />
      </a>
    </div>
  );
}
