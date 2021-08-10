import { render } from '@testing-library/react'
import ThreePushPanel from './ThreePushPanel'
import { PushPanelListProps } from './types'

describe('ThreePushPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ThreePushPanel {...pushPanelListProps} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

const pushPanelListProps: PushPanelListProps = {
  pushPanelList: [
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328756873',
      },
      mainImg: {
        name: 'homepageb3d2',
      },
      headerText: 'Test header text',
      subText: 'Default Sub text',
      calltoactiontext: 'Default CTA',
      linkURL: 'https://www.wiggle.co.uk/triathlon-2021?range=ne',
      color: 'black',
      fontWeight: 100,
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328776873',
      },
      mainImg: {
        name: 'homepageb3d2',
      },
      headerText: 'Test header text',
      subText: 'Default Sub text',
      calltoactiontext: 'Default CTA',
      linkURL: 'https://www.wiggle.co.uk/triathlon-2021?range=ne',
      color: 'black',
      fontWeight: 100,
    },
  ],
}
