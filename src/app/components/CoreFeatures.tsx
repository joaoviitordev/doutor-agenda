import { CalendarDaysIcon, DollarSignIcon, NotebookIcon } from "lucide-react";

export default function CoreFeatures() {
    return (
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-headline text-4xl font-bold text-[#001b44] mb-6">
                Projetado para Profissionais de Elite
              </h2>
              <p className="text-[#434750]">
                Elimine o ruído administrativo e foque no que realmente
                importa: o cuidado com o paciente.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div
                  className="w-12 h-12 bg-[#e7e8e9] rounded-[0.25rem] flex items-center justify-center mb-6 group-hover:bg-[#0B68F7] transition-colors">
                  <span className="material-symbols-outlined text-[#0B68F7] group-hover:text-white">
                    <CalendarDaysIcon />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#001b44] mb-3">
                  Agenda Inteligente
                </h3>
                <p className="text-[#434750] text-sm leading-relaxed">
                  Algoritmos que otimizam seu tempo, reduzindo janelas ociosas
                  e evitando conflitos de horários automaticamente.
                </p>
              </div>
              <div className="group">
                <div
                  className="w-12 h-12 bg-[#e7e8e9] rounded-[0.25rem] flex items-center justify-center mb-6 group-hover:bg-[#0B68F7] transition-colors">
                  <span className="material-symbols-outlined text-[#0B68F7] group-hover:text-white">
                    <NotebookIcon />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#001b44] mb-3">
                  Prontuário Digital
                </h3>
                <p className="text-[#434750] text-sm leading-relaxed">
                  Histórico completo com linha do tempo intuitiva, permitindo
                  acesso rápido a exames e evoluções anteriores.
                </p>
              </div>
              <div className="group">
                <div
                  className="w-12 h-12 bg-[#e7e8e9] rounded-[0.25rem] flex items-center justify-center mb-6 group-hover:bg-[#0B68F7] transition-colors">
                  <span className="material-symbols-outlined text-[#0B68F7] group-hover:text-white">
                    <DollarSignIcon />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#001b44] mb-3">
                  Gestão Financeira
                </h3>
                <p className="text-[#434750] text-sm leading-relaxed">
                  Fluxo de caixa, faturamento de convênios e controle de
                  repasses em um único painel de controle financeiro.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
}