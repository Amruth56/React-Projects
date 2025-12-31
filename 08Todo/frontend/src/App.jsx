import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export default function App() {
  // const token = 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={ <div>Login Page</div> } />
      <Route path="/" element={ <div>Todo Page</div> } />
      <Route path="*" element={ <Navigate to="/login" replace /> } />
    </Routes>
    </BrowserRouter>
  )
}