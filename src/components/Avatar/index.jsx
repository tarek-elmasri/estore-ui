import styles from "styled-components";
import PropTypes from "prop-types";
import blankAvatar from "../../assets/blank-user.svg";

const RoundedAvatar = styles.img`
  border-radius: 50%;
`;
const Avatar = ({ src, size }) => {
  return <RoundedAvatar src={src || blankAvatar} width={size} height={size} />;
};

Avatar.propTypes = {
  src: PropTypes.any,
  size: PropTypes.string,
};

Avatar.defaultProps = {
  src: blankAvatar,
  size: "40rem",
};

export default Avatar;
