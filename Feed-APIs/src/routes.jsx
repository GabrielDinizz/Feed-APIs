import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="*" element={<Page404 />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes