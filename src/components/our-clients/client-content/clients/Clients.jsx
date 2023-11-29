import "./Clients.scss";
import { useEffect } from "react";
import api from "../../../../api/api";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ClosedClient from "./closed-client/ClosedClient";
import OpenClient from "./open-client/OpenClient";

const Clients = () => {
  const dispatch = useDispatch();
  const clientsData = useSelector((state) => state.clients);

  const changeDetails = (id) => {
    dispatch({ type: "change_details", id });
  };

  useEffect(() => {
    async function getData() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        try {
          const res = await axios.get(api.client);
          data.push(res.data.results[0]);
        } catch (err) {
          console.log(err);
        }
      }
      dispatch({ type: "add_clients", data });
    }
    getData();
  }, []);

  return (
    <div className="users">
      {clientsData[0] &&
        clientsData.map((user, idx) => {
          return user.openDetails ? (
            <OpenClient
              key={idx}
              user={user}
              idx={idx}
              changeDetails={changeDetails}
            />
          ) : (
            <ClosedClient
              key={idx}
              user={user}
              idx={idx}
              changeDetails={changeDetails}
            />
          );
        })}
    </div>
  );
};

export default Clients;
