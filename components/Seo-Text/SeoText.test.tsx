import { render } from '@testing-library/react'
import SeoText from './SeoText'
import { SeoTextProps } from './types'
import '@testing-library/jest-dom'

describe('SEO Text component', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(<SeoText {...seoTextProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('HTML does not contain forbidden tags', () => {
    const { container } = render(<SeoText {...seoTextProps} />, {})

    expect(container.querySelector('.seo-text-wrapper h1')).not.toBeTruthy()
    expect(container.querySelector('.seo-text-wrapper script')).not.toBeTruthy()
    expect(container.querySelector('.seo-text-wrapper link')).not.toBeTruthy()
    expect(container.querySelector('.seo-text-wrapper style')).not.toBeTruthy()
  })
})

const seoTextProps: SeoTextProps = {
  mainText: '<h3>Default title</h3><p>Default Text</p>',
}
