import { render } from '@testing-library/react'
import LazyLoadImage, { LazyLoadImageProps } from './LazyLoadImage'

describe('Image component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<LazyLoadImage {...ImageProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const ImageProps: LazyLoadImageProps = {
  altText: 'Default alt text',
  id: 'homepage-h-d',
  animationDuration: 0.1,
  width: 1920,
  height: 650,
  applyAspectRatio: true,
}
