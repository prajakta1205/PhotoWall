import React  from "react";
import Main from "./Components/Main";
import './Styles/stylesheet.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import { createStore } from "redux";
// import rootReducer from './redux/reducer'
// import Provider from 'react-redux'

// const store=createStore(rootReducer);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter><Main/></BrowserRouter>);
