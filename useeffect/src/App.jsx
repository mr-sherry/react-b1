import { Route, Routes } from 'react-router-dom';
import Card from './Components/Cards/Card';
import Card1 from './Components/Cards/Card1';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import UserefHook from './Components/UserefHook';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import GetAllComments from './Components/getAllData/GetAllComments';
import NotFound from './Pages/NotFound';
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetsils/BlogDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
        {/* <Route path='/cards/*' element={<Card />}>
          <Route path='card1' element={<GetAllComments />} />
        </Route> */}
        <Route path='/cards' element={<Card />} />
        <Route path='/cards/card1' element={<Team />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogId' element={<BlogDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
