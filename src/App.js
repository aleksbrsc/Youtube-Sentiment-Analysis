import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "@pages/Landing";
import '@css/global.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}/>
        {/* <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}/>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
