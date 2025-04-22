"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const scrollToPrev = () => {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-2 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-6">
          A <span className="text-primary">INNOVATION</span>
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-xl mb-4">Uma plataforma desenvolvida pela</p>
          <div className="flex justify-center mb-8">
            <Image 
              src="https://imgproductioncrm.s3.us-east-2.amazonaws.com/logo%20mobile-01.svg" 
              alt="Innovation Brindes" 
              width={200} 
              height={60} 
            />
          </div>
          <p className="max-w-3xl mx-auto">
            Criada por quem vem mais inovando e automatizando os processos de quem busca brindes personalizados
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">NOSSOS NÚMEROS</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-primary/20">
            <h4 className="text-4xl font-bold text-primary mb-2">5000+</h4>
            <p>Clientes Atendidos</p>
          </Card>
          
          <Card className="text-center p-6 border-primary/20">
            <h4 className="text-4xl font-bold text-primary mb-2">15000+</h4>
            <p>Pedidos Realizados</p>
          </Card>
          
          <Card className="text-center p-6 border-primary/20">
            <h4 className="text-4xl font-bold text-primary mb-2">98%</h4>
            <p>Satisfação dos Clientes</p>
          </Card>
          
          <Card className="text-center p-6 border-primary/20">
            <h4 className="text-4xl font-bold text-primary mb-2">1000+</h4>
            <p>Produtos Diferentes</p>
          </Card>
        </div>
        
        <div className="flex justify-between mt-12">
          <Button 
            onClick={scrollToPrev}
            variant="outline">
            Voltar
          </Button>
          <Button 
            onClick={scrollToNext}
            className="bg-primary hover:bg-primary/90">
            Continuar
          </Button>
        </div>
      </div>
    </section>
  );
}
