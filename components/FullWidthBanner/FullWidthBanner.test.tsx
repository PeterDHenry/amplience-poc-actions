import { render } from '@testing-library/react'
import FullWidthBanner, { BannerProps } from './FullWidthBanner'
import '@testing-library/jest-dom'

describe('Full width banner component', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(<FullWidthBanner {...BannerProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('Should render FullWidthBanner component', () => {
    const { container } = render(<FullWidthBanner {...BannerProps} />)
    expect(container.getElementsByTagName('div')).toBeTruthy()
  })

  test('FullWidthBanner to have image with property "src" and end point link', () => {
    render(<FullWidthBanner {...BannerProps} />)
    const imgEl = document.querySelector('img')
    const imgSrc = imgEl?.getAttribute('src')
    const linkEl = document.querySelector('a')
    const linkElHref = linkEl?.getAttribute('href')

    expect(imgEl).toHaveAttribute('src')
    expect(imgSrc).toBeTruthy()
    expect(linkEl).toHaveAttribute('href')
    expect(linkElHref).toBeTruthy()
  })
})
