import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./Trending.scss";
import SwitchTab from "../../../components/switchTab/switchTab";
import { useState } from "react";
import Usefeth from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
    const [endPoints, setEndPoints] = useState("day")
    const {data,loading} = Usefeth(`/trending/all/${endPoints}`)
    // console.log(data);
  const onTabChange = (tab) => {
      console.log(tab);
setEndPoints(tab==="day"?"day":"week")
// console.log(endPoints);
  };
  return (
    <div className="crouselSection">
      <ContentWrapper>
        <span className="crouseTitle">Trending</span>
        <SwitchTab data={["day", "week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
