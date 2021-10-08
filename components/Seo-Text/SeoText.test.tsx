import { render } from '@testing-library/react'
import { SeoText, checkPropIsValid } from './SeoText'
import { defaultSeoTextProps, SeoTextProps } from './types'
import '@testing-library/jest-dom'

describe('SEO Text component', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(<SeoText {...seoTextProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('Check HTML for forbidden tags and bad props', () => {
    const badProp = `<h1>H1 tags</h1><script src='script.js'></script>`
    render(<SeoText mainText={badProp} />, {})

    expect(checkPropIsValid('<h1>Testing h1 Tag</h1>')).toBeFalsy()
    expect(checkPropIsValid('<script src="test.js"></script>')).toBeFalsy()
    expect(checkPropIsValid('<link href="stylesheet.css"')).toBeFalsy()
    expect(
      checkPropIsValid('<style>h1 {text-align: center}</style>')
    ).toBeFalsy()
  })

  test('Check HTML for valid tags', () => {
    render(<SeoText {...seoTextProps} />, {})

    expect(checkPropIsValid('<h3>This is a h3 tag</h3>')).toBeTruthy()
    expect(
      checkPropIsValid(
        '<p>This is a p tag</p><ul><li>List 1</li><li>List 2</li></ul>'
      )
    ).toBeTruthy()
  })
})

const seoTextProps: SeoTextProps = defaultSeoTextProps
