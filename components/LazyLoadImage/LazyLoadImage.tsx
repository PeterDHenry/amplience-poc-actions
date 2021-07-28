import React from 'react'
import { SimpleImg } from 'react-simple-img'


interface LazyLoadImageProps {
  id: string
}

function LazyLoadImage(props: LazyLoadImageProps) {
  const imageUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${props.id}`
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration={1}
      width={1920}
      height={650}
      applyAspectRatio={true}
    />
  )
}

LazyLoadImage.defaultProps = {
  id: 'homepage-h-d',
}

export default LazyLoadImage
