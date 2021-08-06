import React from 'react'
import styled from 'styled-components'

const ComponentContainer = styled.div`
  position: relative;
  max-height: 350px;
  overflow: hidden;
`

const Link = styled.a`
  text-decoration: none;
  color: #ffd067;
  &:hover {
    color: #ffd067;
  }
`
const Img = styled.img`
  max-width: 100%;
`

const ContentContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  text-align: center;
`

const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 30px;
`

const H3 = styled.h3`
  text-transform: capitalize;
  font-size: 38px;
  margin-bottom: 35px;
`

const Button = styled.button`
  padding: 5px 15px;
  text-transform: uppercase;
  color: #ffd067;
  border: 2px solid #ffd067;
  background: transparent;

  &:hover {
    background: #ffd067;
    color: #222;
  }
`

export interface FullWidthBannerProps {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  image: { name: string }
  linkValue: string
  header: string
  subHeader: number
  cta: string
}

export default function FullWidthBanner({
  image,
  linkValue,
  header,
  subHeader,
  cta,
}: FullWidthBannerProps) {
  const imgUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${image.name}`
  return (
    <div className="container pt-5">
      <div className="row">
        <ComponentContainer className="col-xs-12 col-sm-12">
          {
            <Link href={linkValue}>
              <Img src={imgUrl} alt="" />
              <ContentContainer>
                <H2> {header} </H2>
                <H3> {subHeader} </H3>
                <Button> {cta} </Button>
              </ContentContainer>
            </Link>
          }
        </ComponentContainer>
      </div>
    </div>
  )
}

FullWidthBanner.defaultProps = {
  image: { name: 'homepageh1d' },
  linkValue: 'https://www.wiggle.co.uk/run-new-season-2021',
  header: 'Default header',
  subHeader: 'Default subheader',
  cta: 'Default cta',
}
