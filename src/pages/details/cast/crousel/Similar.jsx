import React from "react";

import Carousel from "../../../../components/carousel/Carousel";
import Usefeth from "../../../../hooks/UseFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading } = Usefeth(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <>
      {data?.results.length > 1 && (
        <Carousel
          title={title}
          data={data?.results}
          loading={loading}
          endPoints={mediaType}
        />
      )}
    </>
  );
};

export default Similar;
