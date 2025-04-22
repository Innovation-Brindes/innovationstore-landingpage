"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FreeSection() {
  const scrollToPrev = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('target');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="free" className="py-20 min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">
              É <span className="text-primary">GRÁTIS</span> para sua empresa
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa plataforma não possui custos para implementação. Você só paga pelos brindes que adquirir.
            </p>
            <p className="text-muted-foreground">
              Tenha acesso a mais de 1000 itens personalizados, com preços online e prazos de entrega claros.
            </p>
          </div>
          <div className="flex-1 rounded-lg bg-muted flex items-center justify-center">
            <Image src='https://static.wixstatic.com/media/cfc1a5_679de7a1935b403f9626eb6537c0780af000.jpg/v1/fill/w_1195,h_842,al_t,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/cfc1a5_679de7a1935b403f9626eb6537c0780af000.jpg' alt="Imagem ilustrativa do serviço gratuito"  width={999} height={688} className="rounded-lg" />
          </div>
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
