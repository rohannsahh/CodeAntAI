
import Dashboard from './components/dashboard';
import Login from './components/login/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
  
<Router>
  <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/dashboard" element={<Dashboard/>} />
  </Routes>

</Router>
   
  );
};

export default App;
