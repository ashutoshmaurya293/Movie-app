import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./Trending.scss";
import SwitchTab from "../../../components/switchTab/switchTab";

const Trending = () => {
  const onTabChange = (tab) => {};
  return (
    <div className="crouselSection">
      <ContentWrapper>
        <span className="crouseTitle">Trending</span>
        <SwitchTab data={["day", "week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
