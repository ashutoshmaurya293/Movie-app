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
import CircleRating from "../circleRating/CircleRating";

const Carousel = ({ data, loading }) => {
  const carouselConainer = useRef();
  const { url } = useSelector((state) => state.Home);
  // console.log(url);
  const navigate = useNavigate();
  const navigation = () => {};

  const skItem = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};


  return (
    <div className="carousel">
      <ContentWrapper>
      <BsFillArrowLeftCircleFill
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      {!loading ? (
        <div className="carouselItems">
          {data?.map((e) => {
            console.log(e);
            const posterUrl = e.poster_path
              ? url.poster + e.poster_path
              : PosterFallback;
            return (
              <div className="carouselItem" key={e.id}>
                <div className="posterBlock">
                  <Image src={posterUrl} />
                  <CircleRating rating={e.vote_average.toFixed(1)}/>
                </div>
                <div className="textBlock">
                  <span className="title">
                    {e.title || e.name}
                  </span>
                  <span className="date">
                   {dayjs(e.first_air_date).format("MMM D, YYYY")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
       <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
       </div>
      )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
