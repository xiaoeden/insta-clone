import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import AuthForm from "./Components/Authentication/AuthForm";
import PageLayout from "./Layout/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<AuthForm isLogin={true} />} />
        <Route path="/emailsignup" element={<AuthForm isLogin={false} />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
