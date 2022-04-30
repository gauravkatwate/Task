import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./custom.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Insertdata from "../src/Components/InsertData";
import Summery from "../src/Components/Summerydata";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Insertdata />} />
          <Route path="summery" element={<Summery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
