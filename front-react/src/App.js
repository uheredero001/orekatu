
import './App.css';
import Contact from './component/Contact';
import Home from './component/Home';
import Layout from './component/Layout';
import Blog from './component/Blog';
import PageNotAvailable from './component/PaigeNotAvailable';
import Services from './component/Services';
import Whoim from './component/Whoim';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreguntasFrecuentes from './component/PreguntasFrecuentes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="whoim" element={<Whoim />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />}/>
          <Route path="faq" element={<PreguntasFrecuentes/>}/>
          <Route path="*" element={<PageNotAvailable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
