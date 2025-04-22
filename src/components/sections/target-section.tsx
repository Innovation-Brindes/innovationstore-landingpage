"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function TargetSection() {
  const scrollToPrev = () => {
    const element = document.getElementById('free');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="target" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-2 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-16">
          A QUEM SE <span className="text-primary">DESTINA</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Franquias */}
          <Card className="flex flex-col h-full border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-center">FRANQUIAS</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-6">
              <p className="mb-6">
                Seja você uma franquia de pequeno ou grande porte, produzimos brindes a partir
                de 1 unidade e com a garantia de ter a sua marca impressa da forma correta, respeitando o seu manual de identidade.
              </p>
              <p className="font-bold text-center my-6">
                E QUANTO MAIS BRINDES SEUS FRANQUEADOS ADQUIREM,
                MAIS VOCÊ GANHA
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">MAIS BENEFÍCIOS</Button>
            </CardFooter>
          </Card>

          {/* Card Distribuidores */}
          <Card className="flex flex-col h-full border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-center">DISTRIBUIDORES</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-6">
              <p className="mb-6">
                Se sua empresa tem muitos canais de distribuição de seus produtos, tenha uma loja de brindes personalizados exclusiva.
              </p>
              <p className="font-bold text-center my-6">
                E QUANTO MAIS BRINDES SEUS DISTRIBUIDORES ADQUIREM,
                MAIS VOCÊ GANHA
              </p>
            </CardContent>
            <CardFooter>
              <Button  className="w-full">MAIS BENEFÍCIOS</Button>
            </CardFooter>
          </Card>

          {/* Card Empresas */}
          <Card className="flex flex-col h-full border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-center">EMPRESAS</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-6">
              <p className="mb-6">
                Minimize custos operacionais com funcionários, cotações, logísticas promocionais e ainda tenha controle total de tudo o que é adquirido por seus colaboradores em brindes personalizados.
              </p>
              <p className="font-bold text-center my-6">
                E QUANTO MAIS BRINDES SUA EMPRESA ADQUIRE, 
                MAIS ELA GANHA
              </p>
            </CardContent>
            <CardFooter>
              <Button  className="w-full">MAIS BENEFÍCIOS</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-between mt-12">
          <Button variant="outline" onClick={scrollToPrev}>
            Voltar
          </Button>
          <Button onClick={scrollToNext} className="bg-primary hover:bg-primary/90">
            Continuar
          </Button>
        </div>
      </div>
    </section>
  );
}
