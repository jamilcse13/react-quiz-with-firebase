import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/login" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/quiz" element={<PrivateRoute />}>
              <Route path="/quiz" element={<Quiz />} />
            </Route>
            <Route path="/result" element={<PrivateRoute />}>
              <Route path="/result" element={<Result />} />
            </Route>
            {/* <PrivateRoute path="/quiz" element={<Quiz />} /> */}
            {/* <PrivateRoute path="/result" element={<Result />} /> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
