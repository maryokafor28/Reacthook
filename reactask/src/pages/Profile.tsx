import { useLocation, Link } from "react-router-dom";

const Profile = () => {
  const query = new URLSearchParams(useLocation().search);
  const role = query.get("role");

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Your profile details go here.</p>
      <Link to={`/dashboard?role=${role}`}>Back to Dashboard</Link>
    </div>
  );
};

export default Profile;