import "./SingleNews.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";

const SingleNews = () => {
  const [singleNewsData, setSingleNewsData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`${api.news}/${id}`);
        setSingleNewsData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div className="single-news">
      <h2 className="single-news-title" style={{ color: "red" }}>
        {singleNewsData.title}
      </h2>
      <p className="single-news-description" style={{ color: "blue" }}>
        {singleNewsData.body}
      </p>
    </div>
  );
};

export default SingleNews;
