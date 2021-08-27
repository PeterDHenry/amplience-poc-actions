import React from 'react'
import styled from 'styled-components'
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
`

const SeoText = ({ mainText }: SeoTextProps) => (
  <MainTextWrapper>
    <MainTextArea>
      <p>{mainText}</p>
    </MainTextArea>
  </MainTextWrapper>
)

SeoText.defaultProps = {
  mainText: 'Default Text',
}

export default SeoText
