import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Mchemical from './components/Mchemical';
import Mcp from './components/Mcp';
import Mcsd from './components/Mcsd';
import Mec from './components/Mec';
import Mee from './components/Mee';
import Miot from './components/Miot';
import Mit from './components/Mit';
import Mme from './components/Mme';
import Mmecha from './components/Mmecha';
import Home from './components/Home';
import Mcivil from './components/Mcivil';
import Lchemical from './components/Lchemical';
import Lcivil from './components/Lcivil';
import Lcp from './components/Lcp';
import Lcsd from './components/Lcsd';
import Lec from './components/Lec';
import Lee from './components/Lee';
import Liot from './components/Liot';
import Lit from './components/Lit';
import Lme from './components/Lme';
import Lmecha from './components/Lmecha';
import About from './components/About';
function App() {
  return (
    <div className='main'>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}> </Route>
        <Route exact path='/Mchemical.js' element={<Mchemical/>}> </Route>
        <Route exact path='/Mcivil.js' element={<Mcivil/>}></Route>
        <Route exact path='/Mcp.js' element={<Mcp/>}> </Route>
        <Route exact path='/Mcsd.js' element={<Mcsd/>}> </Route>
        <Route exact path='/Mec.js' element={<Mec/>}> </Route>
        <Route exact path='/Mee.js' element={<Mee/>}> </Route>
        <Route exact path='/Miot.js' element={<Miot/>}> </Route>
        <Route exact path='/Mit.js' element={<Mit/>}> </Route>
        <Route exact path='/Mme.js' element={<Mme/>}> </Route>
        <Route exact path='/Mmecha.js' element={<Mmecha/>}> </Route>
       
        <Route exact path='/Lchemical.js' element={<Lchemical/>}> </Route>
        <Route exact path='/Lcivil.js' element={<Lcivil/>}></Route>
        <Route exact path='/Lcp.js' element={<Lcp/>}> </Route>
        <Route exact path='/Lcsd.js' element={<Lcsd/>}> </Route>
        <Route exact path='/Lec.js' element={<Lec/>}> </Route>
        <Route exact path='/Lee.js' element={<Lee/>}> </Route>
        <Route exact path='/Liot.js' element={<Liot/>}> </Route>
        <Route exact path='/Lit.js' element={<Lit/>}> </Route>
        <Route exact path='/Lme.js' element={<Lme/>}> </Route>
        <Route exact path='/Lmecha.js' element={<Lmecha/>}> </Route>
        <Route exact path='/About.js' element={<About/>}> </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
