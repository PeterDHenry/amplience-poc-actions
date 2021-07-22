import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  background-color: #e7e7e7;
`

export default function Footer() {
  return (
    <Foot className="text-center p-5" data-page-area="Footer">
      <p className="text-secondary">
        <a
          data-ga-label="Terms &amp; conditions"
          href="/h/option/terms_conditions?isInLightBox=True&amp;isCheckout=True"
          className=""
        >
          Terms &amp; conditions
        </a>
      </p>
      <small className="text-center">
        © 2021 Wiggle Ltd. 1000 Lakeside, Suite 310, Third Floor N E Wing,
        Portsmouth, Hampshire, PO6 3EN, United Kingdom
        <br />
        Company No: 2667809 | VAT No: GB 884 2571 94
      </small>
    </Foot>
  )
}
