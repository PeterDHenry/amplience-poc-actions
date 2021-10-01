import { render } from '@testing-library/react'
import { LazyLoadImage } from './LazyLoadImage'
import { LazyLoadImageProps, defaultLazyLoadImageProps } from './types'

describe('Image component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<LazyLoadImage {...ImageProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const ImageProps: LazyLoadImageProps = defaultLazyLoadImageProps
