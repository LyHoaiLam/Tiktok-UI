import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Page01 from './Pages/Page01';
import Page02 from './Pages/Page02';
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page01">Page 01</Link>
        </li>
        <li>
          <Link to="/page02">Page 02</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/"></Route>
        <Route path="/page01" element={<Page01 />}></Route>
        <Route path="/page02" element={<Page02 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
