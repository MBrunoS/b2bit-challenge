import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <GlobalStyle />
      <Toaster />
    </AuthContextProvider>
  );
}

export default App;
