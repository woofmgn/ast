import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "../../HOC/ProtectedRoute";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { getLocalStorage, getSessionStorage } from "../../utils/storage";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./App.module.css";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const jwtLocalStorage = getLocalStorage("token");
    const jwtSessionStorage = getSessionStorage("token");

    if (jwtLocalStorage || jwtSessionStorage) {
      setIsLogged(true);
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute logged={isLogged} element={<HomePage />} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
