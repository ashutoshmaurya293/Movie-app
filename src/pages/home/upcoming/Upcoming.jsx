import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../trending/Trending.scss"
import SwitchTab from "../../../components/switchTab/switchTab";
import { useState } from "react";
import Usefeth from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const Upcoming = () => {
    const [endPoints, setEndPoints] = useState("movie")
    const {data,loading} = Usefeth(`/${endPoints}/upcoming`)
    // console.log(data);
  const onTabChange = (tab) => {
      console.log(tab);
setEndPoints("movie")
// console.log(endPoints); 
  };
  return (
    <div className="crouselSection">
      <ContentWrapper>
        <span className="crouseTitle">New & Upcoming Movie </span>
        <SwitchTab data={["Movies"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoints = {endPoints}/>
    </div>
  );
};

export default Upcoming;
