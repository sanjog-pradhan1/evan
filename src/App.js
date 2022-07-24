import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Volunteer from './components/Volunteer';
import Project from './components/Project';
import SignUp from './components/signup';


function App() {
  return (
    
      <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<AboutUs/>}/>
            <Route  path='/project' element={<Project/>}/>
            <Route  path='/contactUs' element={<ContactUs/>}/>
            <Route  path='/volunteer' element={<Volunteer/>}/>
            <Route  path='/signup' element={<SignUp/>}/>
            {/* <Route exact path='/components/Volunteer' component={}></Route> */}
          </Routes>
      </div>
    
  );
}

export default App;
