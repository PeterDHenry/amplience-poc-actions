//TODO best way to test with different counts hint this isn't it
import { render } from '@testing-library/react'
import PushPanelRow from './PushPanelRow'
import { PushPanelListProps } from './types'

describe('ThreePushPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <PushPanelRow {...twoPushPanelListProps} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("three doesn't matches snapshot", () => {
    const { asFragment } = render(
      <PushPanelRow {...threePushPanelListProps} />,
      {}
    )
    expect(!asFragment()).toMatchSnapshot()
  })
})

const twoPushPanelListProps: PushPanelListProps = {
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

const threePushPanelListProps: PushPanelListProps = {
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
