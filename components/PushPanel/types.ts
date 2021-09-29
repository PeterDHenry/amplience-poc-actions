export interface PushPanelProps {
  height: number
  width: number
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  mainImg: { name: string }
  color: string
  fontWeight: number
  mobileStack: boolean
  cssClass: string
  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline: string
  }
}

export interface PushPanelRowProps {
  pushPanelList: PushPanelProps[]
  stackMobileLayout?: boolean
}

export const defaultPanelProps: PushPanelProps = {
  _meta: {
    name: 'name',
    schema: 'schema',
    deliveryId: '328756873',
  },
  height: 500,
  width: 500,
  mainImg: {
    name: 'homepageb4d',
  },
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/discover-different',
    headline: 'Test headline',
    strapline: 'Test Strapline',
    callToActionText: 'Test call to action',
  },
  color: 'black',
  fontWeight: 100,
  mobileStack: true,
  cssClass: 'col-lg-6',
}

export const defaultPanelRowProps: PushPanelRowProps = {
  pushPanelList: [
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328756873',
      },
      height: 500,
      width: 500,
      mainImg: {
        name: 'homepageb4d',
      },
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
      },
      color: 'black',
      fontWeight: 100,
      mobileStack: true,
      cssClass: 'col-lg-6',
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328776873',
      },
      height: 500,
      width: 500,
      mainImg: {
        name: 'homepageb4d',
      },
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
      },
      color: 'black',
      fontWeight: 100,
      mobileStack: true,
      cssClass: 'col-lg-6',
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '328776874',
      },
      height: 500,
      width: 500,
      mainImg: {
        name: 'homepageb4d',
      },
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
      },
      color: 'black',
      fontWeight: 100,
      mobileStack: true,
      cssClass: 'col-lg-6',
    },
    {
      _meta: {
        name: 'name',
        schema: 'schema',
        deliveryId: '3223776874',
      },
      height: 500,
      width: 500,
      mainImg: {
        name: 'homepageb4d',
      },
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Test headline',
        strapline: 'Test Strapline',
        callToActionText: 'Test call to action',
      },
      color: 'black',
      fontWeight: 100,
      mobileStack: true,
      cssClass: 'col-lg-6',
    },
  ],
}
