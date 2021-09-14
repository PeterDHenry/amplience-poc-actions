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

export default function Header() {
  return (
    <header className="container-fluid bg-dark">
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
    </header>
  )
}
