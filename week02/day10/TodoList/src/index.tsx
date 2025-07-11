import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import ListTaskPage from "./pages/ListTaskPage";
import AuthContext from "./context";
import type { User } from "./types";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";

const TaskManagement = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Private Route */}
          {user && <Route path="/task" element={<ListTaskPage />} />}
          {user && <Route path="/create" element={<CreateTaskPage />} />}
          {user && (
            <Route path="/update-task/:id" element={<UpdateTaskPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default TaskManagement;
