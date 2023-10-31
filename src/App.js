import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/auth/Auth";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("jwt") || "");
  }, []);

  return (
    <div className="App">
      {!token ? <Auth setToken={setToken} /> : <p>You are signed in</p>}
    </div>
  );
}

export default App;
