import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import SignPage from './components/page/SignPage';
import MainPage from './components/page/MainPage';
import NewsPage from './components/page/NewsPage';
import IntroPage from './components/page/IntroPage';
import MaTalkPage from './components/page/MaTalkPage';
import MaTalkWritePage from './components/page/MaTalkWritePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign" element={<SignPage />} />

                <Route path="/" element={<MainPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/intro" element={<IntroPage />} />

                {/* 마! 톡 */}
                <Route path="/maTalk" element={<MaTalkPage />} />
                <Route path="/maTalk/write" element={<MaTalkWritePage />} />


            </Routes>
        </BrowserRouter>
    );
}

export default App;
