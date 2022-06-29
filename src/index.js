import React from 'react';
import './styles/index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<>
<App />
</>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Navbar/>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );