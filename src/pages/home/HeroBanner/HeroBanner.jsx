import React, { useEffect, useState } from "react";
import "./HeroBanner.scss"
import { useNavigate } from "react-router-dom";
import Usefeth from "../../../hooks/UseFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Image from "../../../components/lazyloading/Image";


const HeroBanner = () => {
  const [Background, setBackground] = useState("");
  const [query, setQuary] = useState("");
  const navgate = useNavigate();
  const { data, loading } = Usefeth("/movie/upcoming");
  const { url } = useSelector((state) => state.Home);
  useEffect(() => {
    const bg =
    "https://image.tmdb.org/t/p/original" +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    console.log(bg);
    setBackground(bg);
  }, [data]);

  const searchQuaryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navgate(`/search/${query}`);
    }
  };
  return (
    <div>
      <div className="heroBanner" id="hellow">
        {!loading && (
          <div className="backdrop-img">
            <Image src={Background} />
          </div>
        )}
        <div className="opacity-layer">

        </div>
        <ContentWrapper>
          <div className="wrapper">
            <div className="heroBannerContent">
              <span className="title">Welcome.</span>
              <span className="subtitle">Lorem ipsum dolor sit amet.</span>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search movies and tv shows"
                  onKeyUp={searchQuaryHandler}
                  onClick={(e) => setQuary(e.target.value)}
                />
                <button>Search</button>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default HeroBanner;
