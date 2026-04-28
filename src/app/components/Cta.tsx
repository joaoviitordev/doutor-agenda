export default function Cta() {
    return (
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#001b44] to-[#002f6c] rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}></div>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white mb-8">
                Pronto para transformar sua gestão?
              </h2> 
              <p className="text-[#d8e2ff] text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
                Junte-se a milhares de médicos que já digitalizaram suas
                clínicas com a Doutor Agenda.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  className="cursor-pointer px-10 py-5 bg-white text-[#001b44] font-bold rounded-[0.75rem] hover:shadow-2xl transition-all">
                  Começar Teste Grátis
                </button>
                <button
                  className="cursor-pointer px-10 py-5 border border-white/30 text-white font-bold rounded-[0.75rem] hover:bg-white/10 transition-all">
                  Acessar Planos
                </button>
              </div>
            </div>
          </div>
        </section>
    );
}