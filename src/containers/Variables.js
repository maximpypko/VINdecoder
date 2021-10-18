import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import { getDescription } from "../utils/requests";
import VariableItem from "../components/VariableItem";
import VariablesSkeleton from "../skeletons/VariablesSkeleton";

function Variables() {
  const { variables, setVariables } = useContext(Context);

  useEffect(() => {
    getDescription()
      .then((data) => data.json())
      .then((data) => setVariables([...data.Results]));
  }, [setVariables]);

  return (
    <div className="container">
      <Link to={`/`} className="container_button">
        Назад
      </Link>
      <div className="container_variables">
        <h1 className="container_title">Переменные</h1>
        {variables.length > 0 ? (
          variables.map((element) => {
            return <VariableItem key={element.ID} element={element} />;
          })
        ) : (
          <VariablesSkeleton />
        )}
      </div>
    </div>
  );
}

export default Variables;
