import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png";
import "./Carousel.scss";
import Image from "../lazyloading/Image";

const Carousel = ({ data, loading }) => {
  const carouselConainer = useRef();
  const { url } = useSelector((state) => state.Home);
  const navigate = useNavigate();
  const navigation = () => {};

  return (
    <div className="carousel">
      <BsFillArrowLeftCircleFill
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      {!loading?(
        <div className="carouselItems">
         
        </div>
      ):(
        <span>loading..</span>
      )}
    </div>
  );
};

export default Carousel;
