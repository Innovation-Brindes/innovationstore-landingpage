"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Truck, Gift, Clock, Package } from "lucide-react";

export function BenefitsSection() {
  const scrollToPrev = () => {
    const element = document.getElementById('target');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="py-20 min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-2 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-primary">BENEFÍCIOS</span>
        </h2>
        <p className="text-xl text-center mb-16">Você e seus colaboradores podem consultar:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Primeira linha */}
          <Card className="border-primary/20 shadow hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <DollarSign className="w-8 h-8 text-primary" />
              <CardTitle>PREÇOS ONLINE</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Consulte preços em tempo real, sem aguardar por orçamentos.</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Truck className="w-8 h-8 text-primary" />
              <CardTitle>PRAZOS E FRETES</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Informações claras sobre prazos de entrega e custos de frete.</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Gift className="w-8 h-8 text-primary" />
              <CardTitle>MAIS DE 1000 ITENS</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ampla variedade de produtos para personalização.</p>
            </CardContent>
          </Card>

          {/* Segunda linha */}
          <Card className="border-primary/20 shadow hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Clock className="w-8 h-8 text-primary" />
              <CardTitle>PRODUÇÃO RÁPIDA</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brindes personalizados a partir de 1 dia de produção.</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <CardTitle>PEQUENAS QUANTIDADES</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brindes personalizados a partir de 1 unidade.</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Package className="w-8 h-8 text-primary" />
              <CardTitle>ACOMPANHAMENTO</CardTitle>
            </CardHeader>
            <CardContent>
              <p>E ainda acompanhar o seu pedido online.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-3 border-primary/20 shadow p-6">
            <h3 className="text-2xl font-bold text-center mb-4">e o melhor</h3>
            <h2 className="text-3xl font-bold text-center text-primary mb-2">TENHA UM GERENTE DE CONTAS</h2>
            <p className="text-center">Atendimento personalizado do jeito que você precisa</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-primary/20 shadow p-6">
            <h2 className="text-2xl font-bold text-center text-primary mb-4">GARANTA O PADRÃO DE QUALIDADE DA SUA MARCA</h2>
            <p className="text-center">Seus brindes personalizados respeitando o seu manual de identidade</p>
          </Card>

          <Card className="border-primary/20 shadow p-6">
            <h2 className="text-2xl font-bold text-center text-primary mb-4">GANHE TEMPO, REDUZA CUSTOS</h2>
            <p className="text-center">Diminua custos operacionais com funcionários, cotações, logísticas promocionais e muito mais</p>
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
