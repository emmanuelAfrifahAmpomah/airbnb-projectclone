import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Avatar from './Components/avatar';
import Card from './Components/imgCards';
import { cardDetails } from './Components/imgCards';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// function tick() {
//   const element = (
//     <div>
//     <h1>Hello User!</h1>
//     <h2>The time is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

// const element = <Welcome name="Yaw" />;

const card = cardDetails.map(details=>{
  return(
        <Card key={"details.id"} 
        picture={details.picture}
        rating={details.rating}
        totalRating={details.totalRating}
        title={details.title}
        price={details.price}
        />
  )})



root.render(
  <React.StrictMode>
    <App />
    <Avatar />
    <div className='container'>
      <div className='card-group row row-cols-md-4'>
    {card}
      </div>
    </div>
  </React.StrictMode>
  // element
);






// }
// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
