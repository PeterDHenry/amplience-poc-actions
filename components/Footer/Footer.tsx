import React from 'react'



export default function Footer() {
   return( 
   <footer className="bg-gray-200 text-center p-8" data-page-area="Footer">

         <p className="">
           <a data-ga-label="Terms &amp; conditions" href="/h/option/terms_conditions?isInLightBox=True&amp;isCheckout=True" className="checkoutlightbox">
             Terms &amp; conditions
           </a>
         </p>
         <small className="bem-checkout__footer-info text-center">
           © 2021 Wiggle Ltd. 1000 Lakeside, Suite 310, Third Floor N E Wing, Portsmouth, Hampshire, PO6 3EN, United Kingdom
           <br />
           Company No: 2667809 | VAT No: GB 884 2571 94
         </small>

 </footer>)
}
