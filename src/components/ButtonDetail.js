import { Link } from "react-router-dom";

function ButtonDetail() {
  return (
    <Link to={`/variables`} className="container_button">
      Переменные
    </Link>
  );
}

export default ButtonDetail;
