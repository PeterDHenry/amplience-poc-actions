// import React, { memo } from 'react'
// import { t } from '../../utils/getTheme'
import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

const Logo = styled.img`
  height: 60px;
  padding: 10px;
`

interface Props {
  title?: string
}

//export default memo(function Header({ title }: Props) {
export default function Header() {
  //return <StyledHeader>{title ? title : 'Test'}</StyledHeader>
  return (
    <nav className="container-fluid bg-dark">
      <div className="container text-center">
        <div className="col-xs-12">
          <a href="/" data-ga-action="Logo" itemProp="url">
            <Logo
              src="//www.wigglestatic.com/images/ui/wiggle-logo/desktop-wiggle_master_rgb_logo.svg"
              itemProp="logo"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
