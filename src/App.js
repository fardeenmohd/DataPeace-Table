import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetail from "./pages/UserDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="users" />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
