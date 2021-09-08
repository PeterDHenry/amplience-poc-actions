//TODO best way to test with different counts hint this isn't it
import { render } from '@testing-library/react'
import PushPanelRow from './PushPanelRow'
import { PushPanelListProps } from './types'

describe('PushPaneLRow component', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(
      <PushPanelRow {...fourPushPanelListProps} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Check if the PushPaneLRow renders 4 items', () => {
    render(<PushPanelRow {...fourPushPanelListProps} />, {})
    const carouselItems =
      document.getElementsByClassName('push-panel-item').length
    expect(carouselItems).toEqual(4)
  })

  test('Check if the PushPaneLRow renders 3 items', () => {
    fourPushPanelListProps.pushPanelList =
      fourPushPanelListProps.pushPanelList.slice(0, 3)
    render(<PushPanelRow {...fourPushPanelListProps} />, {})
    const carouselItems =
      document.getElementsByClassName('push-panel-item').length
    expect(carouselItems).toEqual(3)
  })

  test('Check if the PushPaneLRow renders 2 items', () => {
    fourPushPanelListProps.pushPanelList =
      fourPushPanelListProps.pushPanelList.slice(0, 2)
    render(<PushPanelRow {...fourPushPanelListProps} />, {})
    const carouselItems =
      document.getElementsByClassName('push-panel-item').length
    expect(carouselItems).toEqual(2)
  })
})

const fourPushPanelListProps: PushPanelListProps = {
  pushPanelList: [
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328756873',
      },
      height: 1,
      width: 1,
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
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328776873',
      },
      height: 1,
      width: 1,
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
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328776874',
      },
      height: 1,
      width: 1,
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
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '3223776874',
      },
      height: 1,
      width: 1,
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
    },
  ],
}
