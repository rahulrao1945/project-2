import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* We will add more routes here later */}
          <Route path="*" element={<div className="pt-32 text-center text-2xl h-screen">Page Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
