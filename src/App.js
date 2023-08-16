
import './App.css';
import Experience from './Experience';
import Footer from './Footer';
import Form from './Form';
import Info from './Info';
import Landing from "./Landing.js";
import Ports from './Ports';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div>
       <Landing/>
       <Info/>
       <Ports/>
       <Experience/>
       <Form/>
       <Footer/>
       <ScrollToTop/>
    </div>
  );
}

export default App;
