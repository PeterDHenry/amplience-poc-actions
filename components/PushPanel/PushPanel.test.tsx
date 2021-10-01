import { render } from '@testing-library/react'
import { PushPanel } from './PushPanel'
import { PushPanelProps } from './types'

describe('PushPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<PushPanel {...pushPanelProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

// const pushPanelProps: PushPanelProps = {
//   height: 500,
//   width: 500,
//   _meta: {
//     name: 'name',
//     schema: 'schema',
//     deliveryId: '328756873',
//   },
//   mainImg: {
//     name: 'homepageb3d2',
//   },
//   textAndCTA: {
//     callToActionURL: 'https://www.wiggle.co.uk/discover-different',
//     headline: 'Default headline',
//     strapline: 'Default Strapline',
//     callToActionText: 'Default call to action',
//   },
//   color: 'black',
//   fontWeight: 100,
//   mobileStack: true,
//   cssClass: 'col-lg-6',
// }

const pushPanelProps: PushPanelProps = {
  _meta: {
    name: 'Training tech',
    schema: 'https://wiggle.com/push-panel',
    deliveryId: 'da7f4c01-5cae-4032-9070-1c65446641fa',
  },
  mainImg: {
    _meta: {
      schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
    },
    id: 'ef717f48-99e2-4717-89da-6f906056eae1',
    name: 'CCC-11-5-a',
    endpoint: 'wigglecrcnonprd',
    defaultHost: 'cdn.media.amplience.net',
  },
  textAndCTA: {
    headline: 'Training tech',
    strapline: 'Our latest deals',
    callToActionText: 'View range',
    callToActionURL: 'https://www.wiggle.co.uk',
  },
  component: 'PushPanel',
}
