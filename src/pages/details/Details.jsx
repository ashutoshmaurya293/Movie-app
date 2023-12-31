import React from 'react'
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom'
import Usefeth from '../../hooks/UseFetch'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './cast/crousel/Similar'
import Recommendation from './cast/crousel/Recommendation'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading} = Usefeth(`/${mediaType}/${id}/videos`)
  // const {data:credits,loading:creditsLoading} = Usefeth(`/${mediaType}/${id}/credits`)
  const { data: credits, loading: creditsLoading } = Usefeth(
    `/${mediaType}/${id}/credits`
);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/> 
      <Recommendation mediaType={mediaType} id={id}/> 
    </div>
  )
}

export default Details