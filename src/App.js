import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Animal from './components/Animal';
import Topo from './layout/topo/Topo';
import Principal from './layout/principal/Principal';
import AnimalList from './components/AnimalList';

function App() {

  return (
    
<Router>

    
<Topo/>


  <Routes>

    <Route path='/' exact element={<Principal/>}></Route>

    <Route path='/animal' element={<Animal/>}> </Route>

    <Route path='/lista' element={<AnimalList/>}> </Route>

  </Routes>

</Router>

    
  );
}

export default App;
