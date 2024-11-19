'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assumindo que você está usando os botões do Shadcn
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Importa ícones do Shadcn UI

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado de aberto/fechado do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botão de ícone de hambúrguer */}
      <Button variant="ghost" onClick={toggleMenu}>
        {isOpen ? <X className="w-6 h-6 bg-transparent text-white" /> : <Menu className="w-6 h-6 bg-transparent text-white" />}
      </Button>

      {/* Menu suspenso para dispositivos móveis */}
      {isOpen && (
        <div className="absolute top-10 right-0  shadow-md rounded-lg w-20 ">
          <nav className="flex bg-black flex-col space-y-2 p-2 rounded-md">
            <Link href="#" className="text-white hover:text-slate-400">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-slate-400">
              Projects
            </Link>
            <Link href="#" className="text-white hover:text-slate-400">
              Certified
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
