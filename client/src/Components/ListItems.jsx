/* eslint-disable react/prop-types */
import TickIcons from "./TickIcons";
import ProgressBar from "./ProgressBar";

// eslint-disable-next-line react/prop-types
const ListItems = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcons />
        <p>{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </li>
  );
};

export default ListItems;
