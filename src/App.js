import Navbar from './Components/navbar';
import PressHere from './Components/presshere';
import { Navigate, Route, Routes } from 'react-router-dom';
import Acceuil from './Components/acceuil'
import Apropos from './Components/apropos'
import Services from './Components/services'
import Nosprojets from './Components/nosprojets'
import Gallery from './Components/gallery'
import Contact from './Components/contact'

function Mainpage() {
  return (
      <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Navigate to="/Acceuil" replace />} />
            <Route path="/Acceuil" element={<Acceuil /> }></Route>
            <Route path="/Apropos" element={<Apropos />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Nosprojets" element={<Nosprojets />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
      </>
  );
}
function App() {
  return (
          <Routes>
              <Route path="/" element={<PressHere />} />
              <Route path="/*" element={<Mainpage />} />
          </Routes>
  );
}

export default App;
