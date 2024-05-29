import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import EmailSignupForm from "./Components/Authentication/EmailSignupForm";
import AuthForm from "./Components/Authentication/AuthForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/emailsignup" element={<AuthForm isLogin={false} />} />
      </Routes>
    </>
  );
}

export default App;
