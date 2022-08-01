import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { history, store } from "./redux/app/store";
import { HistoryRouter as BrowserRouter } from "redux-first-history/rr6";
import AppRoutes from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
