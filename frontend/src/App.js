import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import ProfilePage from './components/page/ProfilePage';
import NewsPage from './components/page/NewsPage';
import IntroPage from './components/page/IntroPage';
import MaTalkPage from './components/page/MaTalkPage';
import MaTalkWritePage from './components/page/MaTalkWritePage';
import MaTalkDetailPage from './components/page/MaTalkDetailPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/intro" element={<IntroPage />} />

                {/* 마! 톡 */}
                <Route path="/maTalk" element={<MaTalkPage />} />
                <Route path="/maTalk/write" element={<MaTalkWritePage />} />
                <Route path="/maTalk/:id" element={<MaTalkDetailPage />} />


            </Routes>
        </BrowserRouter>
    );
}

export default App;
