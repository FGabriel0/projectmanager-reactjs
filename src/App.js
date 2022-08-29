import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'

import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

import Container from './components/Layout/Container'
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>  
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>

  )
}
export default App;