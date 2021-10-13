import React from 'react'
import styled from 'styled-components'
import { FullWidthBannerProps, defaultProps } from './types'

const ComponentContainer = styled.div`
  position: relative;
  max-height: 350px;
  overflow: hidden;
`

const Link = styled.a`
  text-decoration: none;
  text-shadow: 1px 1px #fff;
  color: #222;
  &:hover {
    color: #222;
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
  color: #222;
  border: 2px solid #222;
  background: #fff;

  &:hover {
    background: #222;
    color: #ffd067;
  }
`

export function FullWidthBanner({
  image: { name },
  textAndCTA: { callToActionURL, callToActionText, headline, strapline },
}: FullWidthBannerProps) {
  const imgUrl = `https://cdn.media.amplience.net/i/wigglecrcnonprd/${name}`
  return (
    <div className="container pt-5">
      <div className="row">
        <ComponentContainer className="col-xs-12 col-sm-12">
          {
            <Link href={callToActionURL}>
              <Img src={imgUrl} alt="" />
              <ContentContainer>
                <H2> {headline} </H2>
                <H3> {strapline} </H3>
                <Button> {callToActionText} </Button>
              </ContentContainer>
            </Link>
          }
        </ComponentContainer>
      </div>
    </div>
  )
}

FullWidthBanner.defaultProps = defaultProps
