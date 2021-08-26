import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { SeoTextProps } from './types'

const MainTextWrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 5px;
  margin: 20px auto;
  text-align: center;
  font-family: 'roboto condensed';
`

const Heading = styled.div`
  width: 100%;
  margin-bottom: 10px;
  h2 {
    font-size: 40px;
    span {
      font-weight: bold;
      margin-left: 10px;
    }
  }
`

const MainTextArea = styled.div`
  width: 100%;
`

const SeoText = ({ mainText, heading1, heading2 }: SeoTextProps) => {
  const html = parse(mainText)
  return (
    <MainTextWrapper>
      <Heading>
        <h2>
          {heading1.toUpperCase()}
          <span>{heading2.toUpperCase()}</span>
        </h2>
      </Heading>
      <MainTextArea>{html}</MainTextArea>
    </MainTextWrapper>
  )
}

SeoText.defaultProps = {
  mainText: 'Default Text',
  heading1: 'Default Heading One',
  heading2: 'Default Heading Two',
}

export default SeoText
