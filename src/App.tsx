import Shell from "./components/shell/basicshell";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}