import { Link } from "react-router-dom";

function VariableItem({ element }) {
  return (
    <Link to={`variables/${element.ID}`} className="container_variables-item">
      {element.Name}
    </Link>
  );
}

export default VariableItem;
