import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prototype from './Screens/Prototype/Prototype';

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Prototype />} />
            </Routes>
          </BrowserRouter>
    </>

  );
}

export default App;
