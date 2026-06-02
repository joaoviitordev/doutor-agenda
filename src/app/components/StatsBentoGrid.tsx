import { HeartPulseIcon, UsersIcon } from "lucide-react";

export default function StatsBentoGrid() {
  return (
    <section className="bg-[#f3f4f5] py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 flex flex-col justify-between rounded-[0.5rem] border border-[#c4c6d2]/10 bg-[#ffffff] p-10 shadow-sm md:col-span-8">
            <div>
              <h3 className="font-headline mb-4 text-3xl font-bold text-[#001b44]">
                Tecnologia que Transforma
              </h3>
              <p className="max-w-lg leading-relaxed text-[#434750]">
                Nosso sistema utiliza processamento de dados em tempo real para
                garantir que cada decisão clínica seja baseada em informações
                precisas e atualizadas.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="mb-1 text-2xl font-black text-[#00affe]">
                  99.9%
                </div>
                <div className="text-xs font-bold tracking-widest text-[#434750] uppercase">
                  Uptime Garantido
                </div>
              </div>
              <div>
                <div className="mb-1 text-2xl font-black text-[#00affe]">
                  15ms
                </div>
                <div className="text-xs font-bold tracking-widest text-[#434750] uppercase">
                  Latência Média
                </div>
              </div>
              <div>
                <div className="mb-1 text-2xl font-black text-[#00affe]">
                  256bit
                </div>
                <div className="text-xs font-bold tracking-widest text-[#434750] uppercase">
                  Criptografia
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col items-center justify-center rounded-[0.5rem] bg-gradient-to-br from-[#0B68F7] to-[#00affe] p-10 text-center text-white md:col-span-4">
            <span className="mb-6 text-6xl opacity-80">
              <HeartPulseIcon className="h-16 w-16 text-[#ffffff]" />
            </span>
            <h4 className="mb-2 text-xl font-bold">Segurança de Dados</h4>
            <p className="text-sm text-[#aec6ff]">
              Conformidade total com LGPD e padrões internacionais de saúde
              HIPAA.
            </p>
          </div>
          <div className="col-span-12 flex items-center gap-6 rounded-[0.5rem] bg-[#cae6ff] p-8 md:col-span-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[0.75rem] bg-white text-[#006493]">
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
          <div className="col-span-12 flex flex-col items-center gap-8 rounded-[0.5rem] border border-[#c4c6d2]/10 bg-white p-8 shadow-sm md:col-span-8 md:flex-row">
            <div className="flex-1">
              <h4 className="font-headline mb-2 text-xl font-bold text-[#001b44]">
                Suporte Especializado 24/7
              </h4>
              <p className="text-sm text-[#434750]">
                Nossa equipe de especialistas está pronta para auxiliar sua
                clínica em qualquer fuso horário.
              </p>
            </div>
            <button className="cursor-pointer rounded-[0.75rem] border-2 border-[#0B68F7] px-6 py-3 font-bold whitespace-nowrap text-[#0B68F7] transition-all hover:bg-[#0B68F7] hover:text-white">
              Falar com Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
