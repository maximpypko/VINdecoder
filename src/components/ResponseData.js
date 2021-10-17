import { useContext } from "react";
import Context from "../Context";
import ResponseDataItem from "./ResponseDataItem";

function ResponseData() {
  const { responseValue } = useContext(Context);

  return (
    <div className="content">
      <h1 className="content_title">По вашему запросу найдены данные:</h1>
      <table className="content_table">
        <tbody>
          {responseValue.map((element) => {
            return (
              <ResponseDataItem key={element.VariableId} element={element} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResponseData;
