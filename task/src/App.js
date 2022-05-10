import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./custom.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Insertdata from "../src/Components/InsertData";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Insertdata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
