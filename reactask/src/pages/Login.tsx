import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role: string) => {
    navigate(`/dashboard?role=${role}`);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => handleLogin("Admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("Editor")}>Login as Editor</button>
      <button onClick={() => handleLogin("Viewer")}>Login as Viewer</button>
    </div>
  );
};

export default Login;