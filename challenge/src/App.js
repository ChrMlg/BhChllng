import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../src/Pages/MainPage';
import About from '../src/Pages/ShowFood';


function App() {
  return (
    
    <Routes>
        <Route path="/" element={<Navigate to = "/MainPage" />} />
        <Route path="/MainPage" element={<Home />} />
        <Route path="/MainPage/ShowFood" element={<About />} />
    </Routes>
  );
}

export default App;
