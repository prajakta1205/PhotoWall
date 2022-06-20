import React  from "react";
// import Main from "./Components/Main";
import './Styles/stylesheet.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
 import App from './Components/App'


const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);
