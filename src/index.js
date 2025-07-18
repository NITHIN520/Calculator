import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter as Router,Routes, Route,useParams} from "react-router-dom";
// import{createBrowserRouter,RouterProvider} from 'react-router-dom';
// import Root from './routes/Root';
// import Home from './routes/Home';
// import About from './routes/About';
// import Contact from './routes/Contact';
// import Nopage from './routes/Nopage';
// import Locationdisplay from './routes/Locationdisplay';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MortgageCalculator from './MortgageCalculator';
import BMICalculator from './BMICalculator';
// import Aapp from './Aapp';
// import ParentComponent from './ParentComponent';
// import Parent from './Parent';
// import RegistrationForm from './RegistrationForm';
// import Apps from './Apps';
// import Controlledform from './Controlledform';
// import UncontrolledForm from './UncontrolledForm';
// import App from './App';
// import Greeting from './Greeting';
// import Itemlist from './Itemlist';
// import Usertable from './Usertable';
// import Mycomponent from './Mycomponent';
// import Timer from './Timer';
// const router = createBrowserRouter([
//   { path: '/', 
//     element: <Root />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'locationdisplay', element: <Locationdisplay /> },
//       { path: "*", element: <Nopage /> },
//     ],
//   },
// ]);
    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <MortgageCalculator />
    <BMICalculator />
    {/* <Aapp /> */}
    {/* <ErrorBoundary/> */}
    {/* <ParentComponent /> */}
    {/* <Parent /> */}
    {/* <RegistrationForm /> */}
    

    </React.StrictMode>
  
);
{/* <Controlledform /><br></br>
    <UncontrolledForm /> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

