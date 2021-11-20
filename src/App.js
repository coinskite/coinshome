import { Routes, Route } from 'react-router-dom';
import Footer from './comp/Footer';
import Home from './comp/Home';
import Nav from './comp/Nav';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
