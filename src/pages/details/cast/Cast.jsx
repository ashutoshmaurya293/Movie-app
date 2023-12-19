import React from "react";
import { useSelector } from "react-redux";

import "./Cast.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import avatar from "../../../assets/avatar.png";
import Image from "../../../components/lazyloading/Image";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.Home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        {data?.map((item) => {
                            let Imgurl = item.profile_path
                                ? url.profile + item.profile_path : avatar
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg">
                                        <Image src={Imgurl} />
                                    </div>
                                    <div className="name">
                                            {item.name}
                                        </div>
                                        <div className="character">
                                            {item.character}
                                        </div>
                                </div>
                            )
                        })}
                        {/* {!loading ? (
                            <div className="listItems">
                                {data?.map((item) => {
                                    let imgUrl = item.profile_path
                                        ? url.profile + item.profile_path
                                        : avatar;
                                    return (
                                        <div key={item.id} className="listItem">
                                            <div className="profileImg">
                                                <Image src={imgUrl} />
                                            </div>
                                            <div className="name">{item.name}</div>
                                            <div className="character">
                                                {item.character}
                                            </div>
                                        </div>
                                    );
                                })} */}
                            </div>
                        ) : (
                            <div className="castSkeleton">
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                            </div>
                        )}
                    </ContentWrapper>
        </div>
    );
};

export default Cast;