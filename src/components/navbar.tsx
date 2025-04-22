"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'free', 'target', 'benefits', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };



    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          setActiveSection(targetElement.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getButtonClass = (section: string) => {
    if (section === activeSection) {
      return "bg-primary/10 text-primary font-medium";
    }
    return "hover:bg-primary/5";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo%20mobile-01.svg" 
            alt="Innovation Store" 
            width={40} 
            height={40} 
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('home')}
            className={getButtonClass('home')}
          >
            Página Inicial
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('free')}
            className={getButtonClass('free')}
          >
            É GRÁTIS
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('target')}
            className={getButtonClass('target')}
          >
            A QUEM SE DESTINA
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('benefits')}
            className={getButtonClass('benefits')}
          >
            BENEFÍCIOS
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('about')}
            className={getButtonClass('about')}
          >
            A INNOVATION
          </Button>
          <Button 
            variant={activeSection === 'contact' ? 'default' : 'outline'} 
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'bg-primary/80' : ''}
          >
            CONTATO
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className={getButtonClass('home')}
            >
              Página Inicial
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('free')}
              className={getButtonClass('free')}
            >
              É GRÁTIS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('target')}
              className={getButtonClass('target')}
            >
              A QUEM SE DESTINA
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('benefits')}
              className={getButtonClass('benefits')}
            >
              BENEFÍCIOS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className={getButtonClass('about')}
            >
              A INNOVATION
            </Button>
            <Button 
              variant={activeSection === 'contact' ? 'default' : 'outline'}
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'bg-primary/80' : ''}
            >
              CONTATO
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
