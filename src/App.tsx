import { Navigate, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Notes from "./Notes";

function App() {
  return (
    <div className="flex justify-center h-screen bg-gray-50 overflow-scroll">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Todo />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
// bg-gradient-to-r from-[#427D9D] to-[#164863
