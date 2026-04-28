import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function AppointmentsPreview() {
    return (
        <section className="py-24 bg-[#ffffff]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-2">
                <div
                  className="relative z-20 rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-[#c4c6d2]/20">
                  <Image alt="Appointments Preview" className="w-full h-auto rounded-2xl" src="/agendamento.png" width={1200} height={800}/>
                </div>
                {/* Overlapping Metric Cards */}
                <div
                  className="absolute -bottom-6 -right-6 z-30 bg-white p-6 rounded-[0.5rem] shadow-xl border border-[#c4c6d2]/20 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-[#cae6ff] rounded-[0.75rem] flex items-center justify-center text-[#006493]">
                      <span className="material-symbols-outlined">
                        <TrendingUp />
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#001b44]">
                        99.9%
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                        Disponibilidade
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-1">
                <h2 className="font-headline text-4xl lg:text-5xl font-bold text-[#001b44] mb-6 leading-tight">
                  Gestão de agendas sem conflitos.
                </h2>
                <p className="text-[#434750] text-lg leading-relaxed mb-10">
                  Organize consultas com precisão, evite sobreposições e
                  reduza faltas. Tenha controle completo dos horários e
                  otimize a ocupação da sua clínica.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-[#f3f4f5] rounded-[0.5rem] border border-[#c4c6d2]/10">
                    <div className="text-3xl font-black text-[#00affe] mb-1">
                      300+
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                      Atendimentos Diários
                    </div>
                  </div>
                  <div className="p-6 bg-[#f3f4f5] rounded-[0.5rem] border border-[#c4c6d2]/10">
                    <div className="text-3xl font-black text-[#00affe] mb-1">
                      9k+
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                      Agendamentos Mensais
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}