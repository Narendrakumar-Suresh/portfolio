import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Niche.css";
function Niche(props) {
  return (
    <>
      <div className="nic">
        <div className="container text-center">
          <div className="row">
            <div className="col" id="colpic">
              <Link to={props.link} target="_blank"><img src={props.image} alt="****" /></Link>
            </div>
            <div className="col" id="coltext">
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Niche.propType = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Niche;
