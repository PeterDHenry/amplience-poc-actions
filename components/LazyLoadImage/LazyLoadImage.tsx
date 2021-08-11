import React from 'react'
import { SimpleImg } from 'react-simple-img'

export interface LazyLoadImageProps {
  animationDuration: number
  applyAspectRatio: boolean
  height: number
  id?: string
  width: number
}

function LazyLoadImage({
  animationDuration,
  applyAspectRatio,
  height,
  id,
  width,
}: LazyLoadImageProps) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${id}`
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration={animationDuration}
      width={width}
      height={height}
      applyAspectRatio={applyAspectRatio}
    />
  )
}

LazyLoadImage.defaultProps = {
  id: 'homepage-h-d',
}

export default LazyLoadImage
