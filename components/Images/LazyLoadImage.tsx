import React from 'react'
import { SimpleImg } from 'react-simple-img'
import { LazyLoadImageProps, defaultLazyLoadImageProps } from './types'

export const LazyLoadImage = ({
  animationDuration,
  applyAspectRatio,
  height,
  id,
  width,
  altText,
}: LazyLoadImageProps) => {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${id}?w=${width}&h=${height}&sm=C`
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration={animationDuration}
      width={width}
      height={height}
      applyAspectRatio={applyAspectRatio}
      alt={altText}
    />
  )
}

LazyLoadImage.defaultProps = defaultLazyLoadImageProps
