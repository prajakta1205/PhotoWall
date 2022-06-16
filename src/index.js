import React  from "react";
import Main from "./Components/Main";
import './Styles/stylesheet.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter><Main/></BrowserRouter>);
