import { render } from '@testing-library/react'
import { PushPanel } from './PushPanel'
import { defaultPanelProps, PushPanelProps } from './types'

describe('PushPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<PushPanel {...pushPanelProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const pushPanelProps: PushPanelProps = defaultPanelProps
