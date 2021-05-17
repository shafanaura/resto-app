import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import persistedStore from "./redux/store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  const { store } = persistedStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:name" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
