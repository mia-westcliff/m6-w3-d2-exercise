import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      </Routes>
    </Router> 
  );
}

function Home() {
    return (
<div style={{ padding: 20 }}>
<h2>Home View</h2>
<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
</div> );
}
function About() {
  return (
<div style={{ padding: 20 }}>
<h2>About View</h2>
<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
</div> );
}

export default App;
