import { Navigate, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Notes from "./Notes";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-50 overflow-scroll">
      <Nav />
      <div className="mb-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Todo />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
// bg-gradient-to-r from-[#427D9D] to-[#164863
