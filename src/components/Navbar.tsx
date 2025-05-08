import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Adsumtec" 
            width={150} 
            height={40} 
            className="h-auto"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-squid-ink hover:text-royal-azure transition-colors">
          Home
        </Link>
        <Link href="/solucoes" className="text-squid-ink hover:text-royal-azure transition-colors">
          Soluções
        </Link>
        <Link href="/quem-somos" className="text-squid-ink hover:text-royal-azure transition-colors">
          Quem somos
        </Link>
        <Link href="/contato" className="text-squid-ink hover:text-royal-azure transition-colors">
          Contato
        </Link>
      </div>
      
      <div>
        <Link 
          href="/contato" 
          className="bg-rich-black text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors font-medium"
          style={{
            backgroundColor: '#070D16',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '9999px'
          }}
        >
          Entre em contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
