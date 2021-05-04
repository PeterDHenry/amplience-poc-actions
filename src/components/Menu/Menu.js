import React from 'react';
import Link from 'next/link';

const Menu = () => (
  <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-2.5 row-auto">
    <div className="w-full block flex-grow">
      <div className="md:flex-grow">
        <Link href="/">
          <a className="block md:inline-block text-gray-300 hover:text-white mr-4">
            Home
          </a>
        </Link>
        <Link href="/heros">
          <a className="block md:inline-block text-gray-300 hover:text-white mr-4">
            Heros
          </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Menu;
