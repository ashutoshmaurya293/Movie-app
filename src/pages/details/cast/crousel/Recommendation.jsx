import React from "react";

import Carousel from "../../../../components/carousel/Carousel";
import Usefeth from "../../../../hooks/UseFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = Usefeth(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;