import { BriefcaseMedicalIcon } from "lucide-react";
import Image from "next/image";

export default function DoctorsPreview() {
  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-2">
            <div
              className="relative z-20 rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-[#c4c6d2]/20"
            >
              <Image alt="Doctors Preview" className="w-full h-auto rounded-2xl" src="/medicos.png" width={1200} height={800}/>
            </div>
            {/* Metric Cards */}
            <div
              className="absolute -bottom-6 -left-6 z-30 bg-white p-6 rounded-[0.5rem] shadow-xl border border-[#c4c6d2]/20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 bg-[#cae6ff] rounded-[0.75rem] flex items-center justify-center text-[#006493]"
                >
                  <span className="material-symbols-outlined">
                    <BriefcaseMedicalIcon />
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#001b44]">
                    25+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                    Médicos na Plataforma
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-1">
            <h2 className="font-['Manrope'] text-4xl lg:text-5xl font-bold text-[#001b44] mb-6 leading-tight">
              A gestão completa da sua equipe médica.
            </h2>
            <p className="text-[#434750] text-lg leading-relaxed mb-10">
              Controle a agenda de todos os profissionais da sua clínica em um único lugar. Acompanhe a disponibilidade, defina horários e garanta um atendimento de excelência.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-[#f3f4f5] rounded-[0.5rem] border border-[#c4c6d2]/10">
                <div className="text-3xl font-black text-[#00affe] mb-1">
                  12
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                  Especialidades
                </div>
              </div>
              <div className="p-6 bg-[#f3f4f5] rounded-[0.5rem] border border-[#c4c6d2]/10">
                <div className="text-3xl font-black text-[#00affe] mb-1">
                  150+
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#434750]">
                  Profissionais
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}