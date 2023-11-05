import "./Robot.css";

const Robot = ({ text }) => {
  return (
    <div className="robot">
      <div className="robot-text">{text}</div>
      <img src="src/assets/robot.png" />
    </div>
  );
};

export default Robot;
