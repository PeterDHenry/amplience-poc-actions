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

  test('Check if props are assigned correctly', () => {
    const { container } = render(
      <PushPanelRow {...fourPushPanelListProps} />,
      {}
    )

    const pushPanelImg = container.querySelector(
      '.push-panel-item:nth-child(1) img'
    )
    const pushPanelImgImgAlt = pushPanelImg?.getAttribute('alt')
    const pushPanelImgImgSrc = pushPanelImg?.getAttribute('data-src')

    expect(pushPanelImgImgAlt).toMatch(
      fourPushPanelListProps.pushPanelList[0].textAndCTA.strapline
    )

    expect(pushPanelImgImgSrc).toMatch(
      'https://cdn.media.amplience.net/i/wigglecrcnonprd/' +
        fourPushPanelListProps.pushPanelList[0].mainImg.name
    )

    const pushPanelH2 = container.querySelector(
      '.push-panel-item:nth-child(1) h2'
    )?.textContent

    const pushPanelH3 = container.querySelector(
      '.push-panel-item:nth-child(1) h3'
    )?.textContent

    const pushPanelButton = container.querySelector(
      '.push-panel-item:nth-child(1) button'
    )?.textContent

    expect(pushPanelH2).toMatch(
      fourPushPanelListProps.pushPanelList[0].textAndCTA.headline
    )

    expect(pushPanelH3).toMatch(
      fourPushPanelListProps.pushPanelList[0].textAndCTA.strapline
    )

    expect(pushPanelButton).toMatch(
      fourPushPanelListProps.pushPanelList[0].textAndCTA.callToActionText
    )
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
      width: 13,
      mainImg: {
        name: 'homepageb3d2',
      },
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
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
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
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
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
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
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
      },
      color: 'black',
      fontWeight: 100,
    },
  ],
}
