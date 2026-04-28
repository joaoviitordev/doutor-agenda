import { HeartPulseIcon, UsersIcon } from "lucide-react";

export default function StatsBentoGrid() {
    return (
        <section className="py-24 bg-[#f3f4f5]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-12 gap-8">
              <div
                className="col-span-12 md:col-span-8 bg-[#ffffff] p-10 rounded-[0.5rem] border border-[#c4c6d2]/10 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-[#001b44] mb-4">
                    Tecnologia que Transforma
                  </h3>
                  <p className="text-[#434750] leading-relaxed max-w-lg">
                    Nosso sistema utiliza processamento de dados em tempo real
                    para garantir que cada decisão clínica seja baseada em
                    informações precisas e atualizadas.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="text-4xl font-black text-[#00affe] mb-1">
                      99.9%
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                      Uptime Garantido
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#00affe] mb-1">
                      15ms
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                      Latência Média
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#00affe] mb-1">
                      256bit
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                      Criptografia
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-4 bg-gradient-to-br from-[#0B68F7] to-[#00affe] p-10 rounded-[0.5rem] flex flex-col items-center justify-center text-center text-white">
                <span className="text-6xl mb-6 opacity-80">
                    <HeartPulseIcon className="w-16 h-16 text-[#ffffff]" />
                </span>
                <h4 className="text-xl font-bold mb-2">Segurança de Dados</h4>
                <p className="text-[#aec6ff] text-sm">
                  Conformidade total com LGPD e padrões internacionais de
                  saúde HIPAA.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 bg-[#cae6ff] p-8 rounded-[0.5rem] flex items-center gap-6">
                <div className="w-16 h-16 rounded-[0.75rem] bg-white flex items-center justify-center text-[#006493]">
                  <span className="material-symbols-outlined text-3xl">
                    <UsersIcon />
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#001e30]">
                    Colaborativo
                  </div>
                  <div className="text-sm text-[#004b70]">
                    Acesso multi-usuário simultâneo
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-8 bg-white p-8 rounded-[0.5rem] shadow-sm border border-[#c4c6d2]/10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="font-headline font-bold text-xl text-[#001b44] mb-2">
                    Suporte Especializado 24/7
                  </h4>
                  <p className="text-[#434750] text-sm">
                    Nossa equipe de especialistas está pronta para auxiliar
                    sua clínica em qualquer fuso horário.
                  </p>
                </div>
                <button
                  className="cursor-pointer px-6 py-3 border-2 border-[#0B68F7] text-[#0B68F7] font-bold rounded-[0.75rem] hover:bg-[#0B68F7] hover:text-white transition-all whitespace-nowrap">
                  Falar com Consultor
                </button>
              </div>
            </div>
          </div>
        </section>
    )
};