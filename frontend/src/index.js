import React from 'react';
import ReactDOM from "react-dom";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import registerServiceWorker from "./registerServiceWorker.js";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/index.js";


const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
document.getElementById("root"));

reportWebVitals();
registerServiceWorker();
