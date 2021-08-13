import { render } from '@testing-library/react'
import SeoText from './SeoText'
import { SeoTextProps } from './types'

describe('SEO Text component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<SeoText {...seoTextProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const seoTextProps: SeoTextProps = {
  mainText: 'Default Text',
  heading1: 'Default Heading One',
  heading2: 'Default Heading Two'
}