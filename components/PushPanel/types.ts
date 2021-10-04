export type PushPanelProps = {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  mainImg: {
    _meta: {
      schema: string
    }
    name: string
    id: string
    endpoint: string
    defaultHost: string
  }

  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline?: string
  }
  component: string
}

//   height: number
//   width: number
//   color: string
//   fontWeight: number
//   mobileStack: boolean
//   cssClass: string

//   height: 500,
//   width: 500,
//   color: 'black',
//   fontWeight: 100,
//   mobileStack: true,
//   cssClass: 'col-lg-6',

export type PushPanelRowProps = {
  pushPanelList: PushPanelProps[]
  stackMobileLayout?: boolean
}

export const defaultPanelProps: PushPanelProps = {
  _meta: {
    name: 'Training tech',
    schema: 'https://wiggle.com/push-panel',
    deliveryId: 'ae2a4035-49a7-462d-9fe1-e1e51219e00a',
  },
  mainImg: {
    _meta: {
      schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
    },
    id: 'df220a2c-5752-4246-903d-d010693bab2e',
    name: 'homepageb3d2',
    endpoint: 'wigglecrcnonprd',
    defaultHost: 'cdn.media.amplience.net',
  },
  textAndCTA: {
    callToActionText: 'Tri it out...',
    strapline: 'Prepare for your next event',
    headline: 'Latest triathlon kit',
    callToActionURL: 'https://www.wiggle.co.uk/triathlon-2021?range=ne',
  },
  component: 'PushPanel',
}

export const defaultPanelRowProps: PushPanelRowProps = {
  stackMobileLayout: false,
  pushPanelList: [
    {
      _meta: {
        name: 'Clothing Under Armour Push Panel',
        schema: 'https://wiggle.com/push-panel',
        deliveryId: '143d47d0-b010-4583-9d9e-d43e17224184',
      },
      mainImg: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: '533e1520-2a1b-48ca-81c6-3663dd98b3b7',
        name: 'ua-ss21-clothing-min',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: 'Clothing',
        strapline: 'Train to get better every',
        callToActionText: 'Shop now',
        callToActionURL: 'http://localhost:3000/brand?b=nike',
      },
      component: 'PushPanel',
    },
    {
      _meta: {
        name: 'Footer Under Armour Push Panel',
        schema: 'https://wiggle.com/push-panel',
        deliveryId: 'a491aa6e-b78f-42e3-b2cf-c7b091d51733',
      },
      mainImg: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: 'b93dfa05-cf64-4732-bc46-df3d31230f55',
        name: 'ua-ss21-footwear-min',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: 'Footwear',
        callToActionText: 'Shop now',
        strapline: 'Start fast... get faster.',
        callToActionURL: 'http://localhost:3000/brand?b=nike',
      },
      component: 'PushPanel',
    },
    {
      _meta: {
        name: "Mens's Under Armour Push Panel",
        schema: 'https://wiggle.com/push-panel',
        deliveryId: 'db3463d0-3f86-4967-8b90-a2199e5a8157',
      },
      mainImg: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: 'd9af63c7-148f-42a0-bcb1-c22f1f7f8483',
        name: 'ua-ss21-mens-min',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: "Mens'",
        strapline: 'Shop the collection',
        callToActionText: 'Shop now',
        callToActionURL: 'http://localhost:3000/brand?b=nike',
      },
      component: 'PushPanel',
    },
    {
      _meta: {
        name: "Women's Under Armour Push Panel",
        schema: 'https://wiggle.com/push-panel',
        deliveryId: 'c66dd1a5-8aee-4fcb-8157-e13453737f26',
      },
      mainImg: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: '533e1520-2a1b-48ca-81c6-3663dd98b3b7',
        name: 'ua-ss21-clothing-min',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: "Womens'",
        strapline: 'Shop the collection',
        callToActionText: 'Shop now',
        callToActionURL: 'http://localhost:3000/brand?b=nike',
      },
      component: 'PushPanel',
    },
  ],
}
