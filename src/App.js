import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";


export default function App() {

  return (
    <div className="App">
      <nav>

        <Link to="/whiskey">Whiskey</Link>
        <Link to="/rusty">Rusty</Link>
        <Link to="/casey">Casey</Link>
      </nav>
    </div>
  );
}
