import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import NewsPage from './components/page/NewsPage';
import IntroPage from './components/page/IntroPage';
import MaTalkPage from './components/page/MaTalkPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/News" element={<NewsPage />} />
                <Route path="/Intro" element={<IntroPage />} />
                <Route path="/MaTalk" element={<MaTalkPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
