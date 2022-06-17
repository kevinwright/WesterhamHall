import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import logo from './logo.svg';
import App from './App';
import Home from './pages/home';
import Facilities from './pages/facilities';
import ContactUs from './pages/contact-us';

function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='facilities'>
            <Route path=":selectedroomid" element={<Facilities />} />
            <Route index element={<Facilities />} />
          </Route>
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;