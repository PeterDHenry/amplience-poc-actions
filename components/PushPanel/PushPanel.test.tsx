import { render } from '@testing-library/react'
import PushPanel from './PushPanel'
import { PushPanelProps } from './types'

describe('PushPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<PushPanel {...pushPanelProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const pushPanelProps: PushPanelProps = {
  height: 1,
  width: 1,
  _meta: {
    name: 'name',
    schema: 'schema',
    deliveryId: '328756873',
  },
  mainImg: {
    name: 'homepageb3d2',
  },
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/discover-different',
    headline: 'Default headline',
    strapline: 'Default Strapline',
    callToActionText: 'Default call to action',
  },
  color: 'black',
  fontWeight: 100,
}
