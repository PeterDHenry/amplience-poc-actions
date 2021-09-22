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

const MainTextArea = styled.div`
  width: 100%;
  .bold-text {
    font-weight: 900;
  }
`

export const checkPropIsValid = (mainText: string) => {
  return mainText.indexOf('<h1') > -1 ||
    mainText.indexOf('<script') > -1 ||
    mainText.indexOf('<link') > -1 ||
    mainText.indexOf('<style') > -1
    ? false
    : true
}

const SeoText = ({ mainText }: SeoTextProps) => {
  const html = parse(mainText)
  const isValid = checkPropIsValid(mainText)

  return (
    <>
      {isValid ? (
        <MainTextWrapper className="seo-text-wrapper">
          <MainTextArea className="seo-text">{html}</MainTextArea>
        </MainTextWrapper>
      ) : (
        ''
      )}
    </>
  )
}

SeoText.defaultProps = {
  mainText: '<h3>Default title</h3><p>Default Text</p>',
}

export default SeoText
