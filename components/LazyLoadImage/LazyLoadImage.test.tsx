import { render } from '@testing-library/react'
import LazyLoadImage, { LazyLoadImageProps } from './LazyLoadImage'

describe('LazyLoadImage component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<LazyLoadImage {...lazyLoadImageProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const lazyLoadImageProps: LazyLoadImageProps = {
  id: 'homepage-h-d',
  animationDuration: 0.1,
  width: 1920,
  height: 650,
  applyAspectRatio: true,
}
