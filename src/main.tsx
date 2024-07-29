import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/Home.tsx";
import "./index.css";
import Detail from "./pages/Detail.tsx";
import Edit from "./pages/Edit.tsx";
import Create from "./pages/Create.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </Router>
);
