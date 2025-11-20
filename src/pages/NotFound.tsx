import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to home
    navigate("/", { replace: true });
  }, [navigate]);

  // Return null while redirecting
  return null;
};

export default NotFound;
