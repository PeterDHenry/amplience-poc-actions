import { render } from '@testing-library/react'
import { PushPanelRow } from './PushPanelRow'
import { PushPanelRowProps, defaultPanelRowProps } from './types'

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
    const pushPanelH3 = container.querySelector(
      '.push-panel-item:nth-child(1) h3'
    )?.textContent

    if (fourPushPanelListProps.pushPanelList[0].textAndCTA.strapline) {
      expect(pushPanelH3).toMatch(
        fourPushPanelListProps.pushPanelList[0].textAndCTA.strapline
      )
      expect(pushPanelImgImgAlt).toMatch(
        fourPushPanelListProps.pushPanelList[0].textAndCTA.strapline
      )
    } else {
      expect(pushPanelH3).toBeUndefined
      expect(pushPanelImgImgAlt).toBeUndefined
    }

    expect(pushPanelImgImgSrc).toMatch(
      'https://cdn.media.amplience.net/i/wigglecrcnonprd/' +
        fourPushPanelListProps.pushPanelList[0].mainImg.name
    )

    const pushPanelH2 = container.querySelector(
      '.push-panel-item:nth-child(1) h2'
    )?.textContent

    const pushPanelButton = container.querySelector(
      '.push-panel-item:nth-child(1) button'
    )?.textContent

    expect(pushPanelH2).toMatch(
      fourPushPanelListProps.pushPanelList[0].textAndCTA.headline
    )

    expect(pushPanelButton).toMatch(
      fourPushPanelListProps.pushPanelList[0].textAndCTA.callToActionText
    )
  })
})

const fourPushPanelListProps: PushPanelRowProps = defaultPanelRowProps
