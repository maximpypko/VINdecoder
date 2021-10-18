import { withRouter } from "react-router";
import { useContext } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";

function VariableDescription({
  match: {
    params: { id },
  },
}) {
  const { variables } = useContext(Context);
  const variable = variables.find((element) => element.ID === +id);

  return (
    <div className="container">
      <nav>
        <Link to={"/"} className="container_button">
          На главную
        </Link>
        <Link to={"/variables"} className="container_button">
          Назад
        </Link>
      </nav>
      {variable ? (
        <ul className="container_description">
          <li className="container_description-item">
            <p className="container_description-title">Имя</p>
            <div className="container_description-text">{variable.Name}</div>
          </li>
          <li className="container_description-item">
            <p className="container_description-title">Группа</p>
            <div className="container_description-text">
              {variable.GroupName}
            </div>
          </li>
          <li className="container_description-item">
            <p className="container_description-title">Тип</p>
            <div className="container_description-text">
              {variable.DataType}
            </div>
          </li>
          <li className="container_description-item">
            <p className="container_description-title">ID</p>
            <div className="container_description-text">{variable.ID}</div>
          </li>
          <li className="container_description-item">
            <p className="container_description-title">Описание</p>
            <div className="container_description-text">
              {variable.Description}
            </div>
          </li>
        </ul>
      ) : (
        <p>Упс..., что-то пошло не так, попробуйте позже.</p>
      )}
    </div>
  );
}

export default withRouter(VariableDescription);
