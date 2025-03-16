import { useLocation, Navigate, Link } from "react-router-dom";

const Settings = () => {
  const query = new URLSearchParams(useLocation().search);
  const role = query.get("role");

  if (role !== "Admin") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h2>Settings Page</h2>
      <p>Admin settings configuration.</p>
      <Link to={`/dashboard?role=${role}`}>Back to Dashboard</Link>
    </div>
  );
};

export default Settings;