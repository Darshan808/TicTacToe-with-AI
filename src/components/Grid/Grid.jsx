import "./Grid.css";

const Grid = ({ handleClick }) => {
  return (
    <div className="grid">
      <div className="row">
        <div className="box" onClick={(e) => handleClick(e, 0)} />
        <div className="box" onClick={(e) => handleClick(e, 1)} />
        <div className="box" onClick={(e) => handleClick(e, 2)} />
      </div>
      <div className="row">
        <div className="box" onClick={(e) => handleClick(e, 3)} />
        <div className="box" onClick={(e) => handleClick(e, 4)} />
        <div className="box" onClick={(e) => handleClick(e, 5)} />
      </div>
      <div className="row">
        <div className="box" onClick={(e) => handleClick(e, 6)} />
        <div className="box" onClick={(e) => handleClick(e, 7)} />
        <div className="box" onClick={(e) => handleClick(e, 8)} />
      </div>
    </div>
  );
};

export default Grid;
