import logo from '../logo.svg';
import airbnb from '../AirBnBImgs/airbnb.svg';
import '../App.css';


// const list = [
//   {
//     title: 'react',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// function Bio(props) {
//   return (<div>
//             <h1>Title: {props.title}</h1>
//              <p>Author: {props.author}</p>
//              <p>Website: {props.url}</p>
//            </div>
// )}


// function App() {
//   return (
//     <div>
//       {list.map(function(item){
//         return(<div key={item.objectID}>
//                 {/* <h1>{item.author}</h1> */}
//                 <Bio title = {item.title} author= {item.author} url= {item.url} />
//                </div>
//       )})}
//     </div>
//   )
// }

export default function Navbar () {
  return (
<div>
 <nav className="navbar navbar-light bg-light">
  <div className="container-fluid shadow mb-5 bg-body rounded">
    <a className="navbar-brand" href="home">
      <img src={airbnb} alt="airbnblogo" width="200" height="154" />
    </a>
  </div>
 </nav>
</div>
  )
}


// export default App;
