import "./App.css";
import { Outlet } from "react-router-dom";
import background from "./assets/background.webp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./components/context/ContextProvider";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        margin: 0,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <ContextProvider>
        <div style={{ position: "relative", zIndex: 2 }}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
