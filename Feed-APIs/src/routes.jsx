import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Feed from './pages/Feed'
import Header from './components/Header'
import Container from './components/Container'
import PageBase from './pages/PageBase'

//Qual a necessidade da PageBase e de adicionar "path='/' element={ <PageBase /> }" e na rota home "<Route index element={ <Home /> }></Route>"
function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
                <Container>
                    <Routes path='/' element={ <PageBase /> }>
                        <Route index element={ <Home /> }></Route>
                        <Route path="/feed" element={<Feed />} ></Route>
                        <Route path="*" element={<Page404 />} ></Route>
                    </Routes>
                </Container>
        </BrowserRouter>
    )
}

export default AppRoutes