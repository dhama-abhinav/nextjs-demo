import React from "react";
import Link from "next/link";
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href='/'>
        <Image src='/vercel.svg' width={120} height={100}  />
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/users">
          <a>Listing</a>
        </Link>
      </div>
    </nav>
  );
};
