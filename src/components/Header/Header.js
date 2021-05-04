import React from 'react';

const Header = () => (
  <div className="bg-gray-800 row-auto p-2.5">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 text-center mb-6 md:mb-0">
        <a id="wiggle-logo" class="bem-header__logo" data-ga-action="Logo" href="/" itemprop="url" tabindex="1">
          <img class="bem-header__logo" src="//www.wigglestatic.com/images/ui/wiggle-logo/desktop-wiggle_master_rgb_logo.svg" itemprop="logo" />
        </a>
      </div>
      <div className="col-span-11 text-center md:text-right">
      </div>
    </div>
  </div>
);

export default Header;
