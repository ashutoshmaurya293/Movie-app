import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs, { Dayjs } from "dayjs";

import "./DetailsBanner.scss";

import Usefeth from "../../../hooks/UseFetch";
import Genres from "../../../components/genres/Genres";
import PosterFallback from "../../../assets/no-poster.png";
import Image from "../../../components/lazyloading/Image";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import CircleRating from "../../../components/circleRating/CircleRating";
import { PlayIcon } from "../PlayIcon";

const DetailsBanner = ({ video, crew }) => {
    const { mediaType, id } = useParams();
    const { data, loading } = Usefeth(`/${mediaType}/${id}`);
    // console.log(data);
    const { url } = useSelector((State) => State.Home);

    const _genres = data?.genres?.map((e) => e.id)
    const director = crew?.filter((e)=>e.job == "Director")
    const writer = crew?.filter((e)=>e.job == "Screenplay" ||e.job == "Story"||e.job == "writer")

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Image src={url.backdrop + data.backdrop_path} />
                            </div>
                            <div className="opacity-layer"></div>
                            <ContentWrapper>
                                <div className="content">
                                    <div className="left">
                                        {data.poster_path ? (
                                            <Image
                                                className="posterImg"
                                                src={url.backdrop + data.poster_path}
                                            />
                                        ) : (
                                            <Image className="posterImg" src={PosterFallback} />
                                        )}
                                    </div>
                                    <div className="right">
                                        <div className="title">
                                            {`${data.name || data.title} (${dayjs(
                                                data?.release_date
                                            ).format("YYYY")})`}
                                        </div>
                                        <div className="subtitle">{data.tagline}</div>
                                        <Genres data={_genres} />
                                        <div className="row">
                                            <CircleRating rating={data.vote_average.toFixed(1)} />
                                            <div className="playbtn">
                                                <PlayIcon />
                                                <span className="text">Watch Trailer</span>
                                            </div>
                                        </div>
                                        <div className="overview">
                                            <div className="heading">Overview</div>
                                            <div className="description">
                                                {data.overview}
                                            </div>
                                        </div>
                                        <div className="info">
                                            {data.status &&(
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                    Status:{" "}
                                                    </span>
                                                    <span className="text">{data.status}</span>
                                                </div>
                                            )}
                                            {data.release_date &&(
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                    Release Date:{" "}
                                                    </span>
                                                    <span className="text">
                                                       {dayjs(
                                                            data.release_date
                                                            ).format("MMM D, YYYY")}
                                                    </span>
                                                </div>
                                            )}
                                            {data.runtime &&(
                                                <div className="infoItem">
                                                    <span className="text bold">
                                                    RunTime:{" "}
                                                    </span>
                                                    <span className="text">
                                                       {toHoursAndMinutes(data.runtime)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        {director?.length>0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                    Director:{" "}
                                                </span>
                                                <span className="text">
                                                {director?.map((e,i)=>(
                                                <span key={i}>
                                                    {e.name}
                                                    {director.length - 1 !== i && ","}
                                                </span>
                                            ))}
                                                </span>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
