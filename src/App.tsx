import { BrowserRouter, Routes, Route } from "react-router-dom";

import PHome from "./pages/PHome/PHome";
import PServicos from "./pages/PServicos/PServicos";
import PContatos from "./pages/PContatos/PContatos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/servicos" element={<PServicos />} />
        <Route path="/contatos" element={<PContatos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;