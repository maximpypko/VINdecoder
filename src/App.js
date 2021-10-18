import React, { useState, useEffect, useRef } from "react";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Context from "./Context";
import { getVin } from "./utils/requests";
import Main from "./containers/Main";
import Variables from "./containers/Variables";
import VariableDescription from "./containers/VariableDescription";

const history = createBrowserHistory();

function States() {
  const [vin, setVin] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseValue, setResponseValue] = useState([]);
  const [historyRequests, setHistoryRequests] = useState([]);
  const [variables, setVariables] = useState([]);
  const [variable, setVariable] = useState({});
  const [validateMessage, setValidateMessage] = useState("");

  useEffect(() => {
    if (vin) {
      getVin(vin)
        .then(async (response) => response.json())
        .then((data) => {
          if (data) {
            setResponseMessage(data.Message);
            const newResponseValue = data.Results.filter(
              (element) => element.Value
            );
            setResponseValue(newResponseValue);
            setVin("");
          }
        });
    }
  }, [responseValue, vin]);

  function validateFormValue(value) {
    const res = /^[a-z0-9]+$/;
    if (value.length > 17 || !value.length) {
      setValidateMessage("*Недопустимая длина VIN");
      return;
    } else if (!res.test(value.toLowerCase())) {
      setValidateMessage("*Присутствуют недопустимые символы");
      return;
    } else {
      return true;
    }
  }

  const formRef = useRef();

  function hendlerForm(e) {
    setResponseMessage("");
    const [text] = formRef.current;
    let vin = "";
    typeof e === "string" ? (vin = e) : (vin = text.value);
    const isValidate = validateFormValue(vin);

    if (isValidate) {
      setValidateMessage("");
      setVin(vin.toUpperCase());
      const request = {
        id: Date.now(),
        text: vin,
      };

      historyRequests.length > 4
        ? setHistoryRequests([request, ...historyRequests.slice(0, 4)])
        : setHistoryRequests([request, ...historyRequests]);

      text.value = "";
    }
  }

  return {
    vin,
    setVin,
    responseMessage,
    responseValue,
    historyRequests,
    setHistoryRequests,
    variables,
    setVariables,
    variable,
    setVariable,
    formRef,
    hendlerForm,
    validateMessage,
  };
}

export default function App() {
  return (
    <Context.Provider value={States()}>
      <Router history={history}>
        {/* BrowserRouter поменял на HashRouter для корректной работы github-pages */}
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/variables/:id" component={VariableDescription} />
            <Route path="/variables" component={Variables} />
          </Switch>
        </HashRouter>
      </Router>
    </Context.Provider>
  );
}
