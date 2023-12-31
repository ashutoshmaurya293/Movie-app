import React from "react";

import Carousel from "../../../../components/carousel/Carousel";
import Usefeth from "../../../../hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = Usefeth(
        `/${mediaType}/${id}/recommendations`
    );

    return (
      <>
      {
        data?.results.length>1 &&(
            <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endPoints={mediaType}
        />
        )
      }
      </>
    );
};

export default Recommendation;