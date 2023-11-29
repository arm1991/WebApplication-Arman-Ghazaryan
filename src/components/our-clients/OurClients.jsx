import "./OurClients.scss";
import ClientContent from "./client-content/ClientContent";
import ClientTitle from "./client-title/ClientTitle";

const OurClients = () => {
  return (
    <>
      <section className="our-clients">
        <ClientTitle />
        <ClientContent />
      </section>
    </>
  );
};

export default OurClients;
