import React from 'react'
import { SimpleImg } from 'react-simple-img'

export interface LazyLoadImageProps {
  altText: string
  animationDuration: number
  applyAspectRatio: boolean
  height: number
  id?: string
  width: number
}

function Image({
  animationDuration,
  applyAspectRatio,
  height,
  id,
  width,
  altText,
}: LazyLoadImageProps) {
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

Image.defaultProps = {
  altText: 'Default alt text',
  id: 'homepage-h-d',
  animationDuration: 0.1,
  width: 1920,
  height: 650,
  applyAspectRatio: true,
}

export default Image
