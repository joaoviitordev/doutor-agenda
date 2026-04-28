import { TrendingUp } from "lucide-react";
import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="relative bg-[#ffffff] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-20 overflow-hidden rounded-2xl border border-[#c4c6d2]/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
              <Image
                alt="Dashboard Preview"
                className="h-auto w-full rounded-2xl"
                src="/dashboard.png"
                width={1200}
                height={800}
              />
            </div>
            {/* Overlapping Metric Cards */}
            <div className="absolute -right-6 -bottom-6 z-30 hidden rounded-[0.5rem] border border-[#c4c6d2]/20 bg-white p-6 shadow-xl md:block">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.75rem] bg-[#cae6ff] text-[#006493]">
                  <span className="material-symbols-outlined">
                    <TrendingUp />
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#001b44]">
                    99.9%
                  </div>
                  <div className="text-xs font-bold tracking-widest text-[#434750] uppercase">
                    Disponibilidade
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 font-headline text-4xl leading-tight font-bold text-[#001b44] lg:text-5xl">
              Potência e Precisão em cada detalhe.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-[#434750]">
              Nossa plataforma administrativa foi desenhada para oferecer
              controle total sobre sua operação. De fluxos financeiros complexos
              a análises de desempenho clínico, transformamos dados em decisões
              estratégicas.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-[0.5rem] border border-[#c4c6d2]/10 bg-[#f3f4f5] p-6">
                <div className="mb-1 text-3xl font-black text-[#00affe]">
                  300+
                </div>
                <div className="text-xs font-bold tracking-widest text-[#434750] uppercase">
                  Atendimentos Diários
                </div>
              </div>
              <div className="rounded-[0.5rem] border border-[#c4c6d2]/10 bg-[#f3f4f5] p-6">
                <div className="mb-1 text-3xl font-black text-[#00affe]">
                  50+
                </div>
                <div className="text-xs font-bold tracking-widest text-[#434750] uppercase">
                  Clínicas Parceiras
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
