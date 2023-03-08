import logo from './logo.svg';
import './App.css';
import Create from './Create';
import Table from './Table';
import Update from './Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <><Create /><Table /></>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Create/>}></Route>
        <Route path="/Table" element={<Table/>}></Route>
        <Route path="/Update/:id" element={<Update/>}></Route>
      </Routes>
        </div>
  </BrowserRouter>
  );
}

export default App;
