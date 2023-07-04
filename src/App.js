import Home from './Home';
import {Routes, Route} from "react-router-dom";
import Create from './Create';
import History from './History'
import Explore from './Explore';
import Hero from './components/Hero';
import Collection from './Collection';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/explore' element={<Explore/>}/>
        <Route path = '/history' element={<History/>}/>
        <Route path = '/create' element={<Create/>}/>
      {/* <NavBar/> */}
      {/* <Home/> */}
      {/* <Hero/> */}
      {/* <Create/> */}
      {/* <History/> */}
      {/* <Explore/> */}
      {/* <Collection/> */}
      </Routes>
    </div>
  );
}

export default App;
