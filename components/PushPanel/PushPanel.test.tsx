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
  _meta: {
    name: 'name',
    schema: 'schema',
    deliveryId: '328756873',
  },
  mainImg: {
    name: 'homepageb3d2',
  },
  headerText: 'Default header text',
  subText: 'Default Sub text',
  calltoactiontext: 'Default CTA',
  linkURL: 'https://www.wiggle.co.uk/triathlon-2021?range=ne',
  color: 'black',
  fontWeight: 100,
}
