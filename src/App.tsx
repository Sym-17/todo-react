import { Navigate, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Notes from "./Notes";
import Home from "./Home";
import Layout from "./Layout";
// import LayoutWithScroll from "./LayoutWithScroll";

function App() {
  return (
    <div className="flex flex-col justify-center bg-[#fdfcfc]">
      <Layout>
        {/* <LayoutWithScroll> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
        {/* </LayoutWithScroll> */}
      </Layout>
    </div>
  );
}

export default App;
// bg-gradient-to-r from-[#427D9D] to-[#164863
