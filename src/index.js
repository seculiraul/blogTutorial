import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux" ;
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers"


const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

const store = legacy_createStore(reducers, applyMiddleware(thunk));

root.render(
    <Provider store={ store }>
        <App />
    </Provider>
)