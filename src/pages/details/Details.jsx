import React from 'react'
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom'
import Usefeth from '../../hooks/UseFetch'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading} = Usefeth(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading} = Usefeth(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    </div>
  )
}

export default Details