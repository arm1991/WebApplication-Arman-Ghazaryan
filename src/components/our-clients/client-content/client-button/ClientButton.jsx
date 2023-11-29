import "./ClientButton.scss";
import { useNavigate } from "react-router-dom";

const ClientButton = () => {
  const navigate = useNavigate();

  return (
    <div className="our-clients-content-button">
      <button
        onClick={() => {
          navigate(`/sign-in`);
        }}
      >
        <span>Become our Client</span>
      </button>
    </div>
  );
};

export default ClientButton;
