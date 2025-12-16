import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 h-14 w-14 flex items-center justify-center bg-cyan-300 rounded-full z-10">
        <Store size={32} className="text-cyan-100"/>
      </div>
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90"/>
      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">


          <h2 className="font-sans text-heading-xl text-gray-100 text-balance">Crie uma loja online e inicie suas vendas ainda hoje</h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}