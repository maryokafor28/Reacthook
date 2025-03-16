import { useLocation, Link } from "react-router-dom";

const Dashboard = () => {
  const query = new URLSearchParams(useLocation().search);
  const role = query.get("role");

  return (
    <div>
      <h2>Dashboard</h2>
      {role === "Admin" ? (
        <p>Welcome, Admin! You have full access.</p>
      ) : role === "Editor" ? (
        <p>Welcome, Editor! You can edit content.</p>
      ) : (
        <p>Welcome, Viewer! You have read-only access.</p>
      )}

      <nav>
        <Link to={`/profile?role=${role}`}>Profile</Link> |{" "}
        {role === "Admin" && <Link to={`/settings?role=${role}`}>Settings</Link>}
      </nav>
    </div>
  );
};

export default Dashboard;