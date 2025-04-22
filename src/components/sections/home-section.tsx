"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HomeSection() {
  const scrollToNext = () => {
    const element = document.getElementById('free');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Bem-vindo à <span className="text-primary">Innovation Store</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua plataforma completa para brindes personalizados
            </p>
            <div className="flex gap-4">
              <Button onClick={scrollToNext} className="bg-primary hover:bg-primary/90">
                Conheça nossa solução
              </Button>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-muted h-[400px] flex items-center justify-center">
            <Image src='https://static.wixstatic.com/media/cfc1a5_37429e61e7674044a9c20e859f59bfa1~mv2.jpg/v1/fill/w_999,h_688,al_c,q_85,enc_avif,quality_auto/cfc1a5_37429e61e7674044a9c20e859f59bfa1~mv2.jpg' alt="Innovation Store" width={999} height={688} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
