import './App.css';
import Homepage from './Pages/Homepage/Homepage.jsx';
import News from './Pages/News/News.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Common/Navbar/Layout.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Homepage/>} />
            <Route path='/news' element={<News/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
