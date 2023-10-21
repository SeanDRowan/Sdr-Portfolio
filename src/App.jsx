import Header from './components/Header';
import  Body   from './components/Body'
//import Footer from './components/Footer'

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return <div><Header/>
  ,
<Body/>,

  </div>
   ;
}

export default App;
