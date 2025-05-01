import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./css/App.css"

// import {MainMap} from "./main-map"
import { MainGlobal } from "./components/main-global";
// import {ComponentAnt} from './components/component-ant';

export function App() {

  return (
    <section className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainMap />} /> */}
          {/* <Route path="/component-ant" element={<ComponentAnt />} /> */}
          <Route path="/" element={<MainGlobal />} />
          <Route path="/login" element={<MainGlobal />} />
          <Route path="/register" element={<MainGlobal />} />
          <Route path="/task" element={<MainGlobal />} />
          <Route path="/add-task" element={<MainGlobal />} />
          <Route path="/task/:id" element={<MainGlobal />} />
          <Route path="/profile" element={<MainGlobal />} />
        </Routes>
      </BrowserRouter>
    
    </section>
  );
}


