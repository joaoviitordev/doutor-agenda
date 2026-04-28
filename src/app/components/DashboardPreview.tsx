import Image from "next/image";

export default function DashboardPreview() {
  return (
    <section className="bg-surface-container-lowest relative py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="border-outline-variant/20 relative z-20 overflow-hidden rounded-2xl border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
              <Image
                alt="Dashboard Preview"
                className="h-auto w-full rounded-2xl"
                src="/dashboard.png"
                width={1200}
                height={800}
              />
            </div>
            {/* Overlapping Metric Cards */}
            <div className="border-outline-variant/20 absolute -right-6 -bottom-6 z-30 hidden rounded-xl border bg-white p-6 shadow-xl md:block">
              <div className="flex items-center gap-4">
                <div className="bg-secondary-fixed text-secondary flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#001b44]">
                    99.9%
                  </div>
                  <div className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">
                    Disponibilidade
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline mb-6 text-4xl leading-tight font-bold text-[#001b44] lg:text-5xl">
              Potência e Precisão em cada detalhe.
            </h2>
            <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
              Nossa plataforma administrativa foi desenhada para oferecer
              controle total sobre sua operação. De fluxos financeiros complexos
              a análises de desempenho clínico, transformamos dados em decisões
              estratégicas.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-surface-container-low border-outline-variant/10 rounded-xl border p-6">
                <div className="text-secondary-container mb-1 text-3xl font-black">
                  300+
                </div>
                <div className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">
                  Atendimentos Diários
                </div>
              </div>
              <div className="bg-surface-container-low border-outline-variant/10 rounded-xl border p-6">
                <div className="text-secondary-container mb-1 text-3xl font-black">
                  50+
                </div>
                <div className="text-on-surface-variant text-xs font-bold tracking-widest uppercase">
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
