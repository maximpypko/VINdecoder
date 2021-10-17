import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import VariableItem from "../components/VariableItem";
import { getDescription } from "../utils/requests";

function Variables() {
  const { error, variables, setVariables } = useContext(Context);

  useEffect(() => {
    getDescription()
      .then((data) => data.json())
      .then((data) => setVariables([...data.Results]));
  }, [setVariables]);

  return (
    <>
      <div className="container">
        <Link to={`/`} className="container_button">
          Назад
        </Link>
        <div className="container_variables">
          <h1 className="container_title">Переменные</h1>
          {<h1>{error}</h1> &&
            variables.map((element) => {
              return <VariableItem key={element.ID} element={element} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Variables;
