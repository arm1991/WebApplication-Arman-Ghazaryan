import Clients from "./clients/Clients";
import ClientButton from "./client-button/ClientButton";
import "./ClientContent.scss";

const ClientContent = () => {
  return (
    <div className="our-clients-content">
      <Clients />
      <ClientButton />
    </div>
  );
};

export default ClientContent;
