import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../trending/Trending.scss"
import SwitchTab from "../../../components/switchTab/switchTab";
import { useState } from "react";
import Usefeth from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
    const [endPoints, setEndPoints] = useState("movie")
    const {data,loading} = Usefeth(`/${endPoints}/popular`)
    // console.log(data);
  const onTabChange = (tab) => {
      console.log(tab);
setEndPoints(tab==="Movies"?"movie":"tv")
// console.log(endPoints);
  };
  return (
    <div className="crouselSection">
      <ContentWrapper>
        <span className="crouseTitle">What's popular</span>
        <SwitchTab data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoints = {endPoints}/>
    </div>
  );
};

export default Popular;
