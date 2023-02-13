import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Notification from "./pages/Notification";
import Anouncements from "./pages/Anouncements";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import Shedule from "./pages/Shedule";
import Material from "./pages/Material";
import Waiting from "./pages/Waiting";
import Submitted from "./pages/Submitted";
import Late from "./pages/Late";
import Students from "./pages/Students";
import SinglePage2 from "./pages/SinglePage2";
import Rating from "./pages/Rating";

function App() {
  return (
    <DivStyle>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="courses/*" element={<Courses />}>
            <Route path="material" element={<Material />} />
            <Route path="material/:id/*" element={<SinglePage />}>
              <Route path="submitted" element={<Submitted />} />
              <Route path="waiting" element={<Waiting />} />
              <Route path="late" element={<Late />} />
            </Route>
            <Route path="students" element={<Students/>} />
            <Route path="students/:id" element={<SinglePage2/>}/>
            <Route path="rating" element={<Rating/>} />
          </Route>
          <Route path="Anouncements" element={<Anouncements />} />
          <Route path="notification" element={<Notification />} />
          <Route path="shedule" element={<Shedule />} />
        </Route>
      </Routes>
    </DivStyle>
  );
}

export default App;

const DivStyle = styled.div`
  text-align: center;
`;
