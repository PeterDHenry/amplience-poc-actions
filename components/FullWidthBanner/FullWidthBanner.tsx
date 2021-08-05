import React from 'react'
import styled from 'styled-components'

const ComponentContainer = styled.div`
  position: relative;
  max-height: 350px;
  overflow: hidden;
`

const Link = styled.a`
 text-decoration: none;
 color: #FFD067;
 &:hover {
  color: #FFD067;
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
  transform: translate( -50%, -10% );
  text-align: center;
`

const H2 = styled.h2`
 text-transform: uppercase;
 font-size: 56px;
 font-weight: bold;
 margin-bottom: 30px
`

const H3 = styled.h3`
text-transform: capitalize;
font-size: 38px;
margin-bottom: 35px;
`

const Button = styled.button`
 padding: 5px 15px;
 text-transform: uppercase;
 color: #FFD067;
 border: 2px solid #FFD067;
 background: transparent;

 &:hover {
   background: #FFD067;
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
  cta
}: FullWidthBannerProps) {
  return (
    <div className="container pb-5">
      <div className="row">
        <ComponentContainer className="col-xs-12 col-sm-12">
          {
              <Link href={ linkValue }>
                  <Img src="https://cdn.media.amplience.net/i/wigglecrcnonprd/homepageh1d" alt="" />
                  <ContentContainer>
                    <H2> { header } </H2>
                    <H3> { subHeader } </H3>
                    <Button> { cta } </Button>
                  </ContentContainer>
              </Link>
          }
        </ComponentContainer>
      </div>
    </div>
  )
}