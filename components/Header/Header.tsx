// import React, { memo } from 'react'
// import styled from 'styled-components'
// import { t } from '../../utils/getTheme'
import React from 'react'

// const StyledHeader = styled.div`
//   width: 100%;
//   height: 30px;
//   border-bottom: 1px solid black;
//   padding: 8px;
//   background: ${t('colors.white.off')};
//   font-family: ${t('fonts.header')};
//   font-size: ${t('fontSizes.2')};
// `

interface Props {
  title?: string
}

//export default memo(function Header({ title }: Props) {
export default function Header() {
  //return <StyledHeader>{title ? title : 'Test'}</StyledHeader>
   return( <div className="bg-gray-800 row-auto p-2.5">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-5 text-center md:text-right">
      </div>
      <div className="col-span-2 text-center mb-6 md:mb-0">
        <a id="wiggle-logo" href="/" itemProp="url" tabIndex={1}>
          <img src="//www.wigglestatic.com/images/ui/wiggle-logo/desktop-wiggle_master_rgb_logo.svg" itemProp="logo" className="max-h-10" />
        </a>
      </div>
      <div className="col-span-5 text-center md:text-right">
      </div>
    </div>
  </div>)
}
