import React from 'react'
import Loader from 'react-spinners/PuffLoader'
const Loading = () => {
  return (
    <div className="flex justify-center items-center my-40">
        <Loader color="#00BFFF" height={550} width={80} />
    </div>
  )
}

export default Loading;