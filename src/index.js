import React  from "react";
import Main from "./Components/Main";
import './Styles/stylesheet.css';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main/>);
