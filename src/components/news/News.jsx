import { useEffect, useState } from "react";
import api from "../../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./News.scss";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const navigate = useNavigate();
  const changePath = (path) => navigate(path);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(api.news);
        setNewsData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <section className="news">
      {newsData &&
        newsData.map((news) => {
          return (
            <div key={news.id} className="news-item">
              <h1
                className="news-item-title"
                onClick={() => {
                  changePath(`/news/${news.id}`);
                }}
              >
                {news.title}
              </h1>
              <p className="news-item-body">{news.body}</p>
            </div>
          );
        })}
    </section>
  );
};

export default News;
