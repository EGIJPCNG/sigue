import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {MainGlobal} from "./pages/main-global";
import RegisterPage from "./pages/RegisterPage";
import "./css/App.css"

export function App() {

  return (
    <section className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainGlobal />} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<h1>Tasks Page</h1>} />
          <Route path="/add-task" element={<h1>New Task Page</h1>} />
          <Route path="/task/:id" element={<h1>Task Update Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
        </Routes>
      </BrowserRouter>
    
    </section>
  );
}


