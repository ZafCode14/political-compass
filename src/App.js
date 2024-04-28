import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
    ); 
}

export default App;
