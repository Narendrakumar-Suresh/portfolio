import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.css";


function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <motion.div
      className="card"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      layout
    >
      <div className="content">
      <h5>{props.Title}</h5>
      <p>{props.Content}</p>
      <Link to={props.Link} target="_blank">Click For more Details</Link>
      </div>

      <motion.div
        className="card-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ pointerEvents: "none",
           backgroundImage: `url(${props.bg})`
         }}
      />
    </motion.div>

  );
}

Card.propTypes={
  Title:PropTypes.string.isRequired,
  Content:PropTypes.string.isRequired,
  Link:PropTypes.string.isRequired,
  bg:PropTypes.string
}

Card.defaultProps={
  Title:"Title",
  Content:"Fill Content",
  Link:"https://www.youtube.com/watch?v=oTIJunBa6MA&t=1334",
  bg:"src/assets/react.svg"
}

export default Card;