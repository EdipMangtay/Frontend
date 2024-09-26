import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import AxiosCategories from "./pages/axios/AxiosCategories";
import FetchCategories from "./pages/fetch/FetchCategroies";
import HomePage from "./pages/HomePage";
import { Route,Routes } from "react-router-dom";
import RTKQueryCategories from "./pages/rtk/RTKQueryCategories";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Row>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fetch-categories" element={<FetchCategories />} />
          <Route path="/axios-categories" element={<AxiosCategories />} />
          <Route path="/rtk-categories" element={<RTKQueryCategories />} />

      </Routes>
      </Row>

      </Container>

    </> 
  );
}

export default App;