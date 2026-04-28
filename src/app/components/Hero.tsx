import { ArrowUpRightIcon } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      data-speed="0.6"
      className="relative overflow-hidden bg-[#f8f9fa] py-12 lg:py-18"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#cae6ff]/20 via-transparent to-transparent"></div>
      <div className="mx-auto max-w-4xl px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#006493] uppercase bg-[#cae6ff] rounded-full">
          GESTÃO DE ALTO NÍVEL
        </span>
        <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-[#001b44] leading-[1.1] tracking-tighter mb-8">
          O LUGAR PERFEITO PARA{" "}
          <span className="text-[#00affe]">SUA CLÍNICA</span>
        </h1>
        <p className="text-[#434750] text-lg lg:text-xl leading-relaxed mb-10 font-body max-w-2xl mx-auto">
          Eleve o padrão do seu atendimento com uma plataforma desenvolvida para
          precisão clínica. Gerencie pacientes, agendas e prontuários em um
          ecossistema integrado e sofisticado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="cursor-pointer px-8 py-4 bg-[#0B68F7] text-white font-bold rounded-full hover:shadow-lg hover:bg-[#0B68F7]/90 transition-all flex items-center justify-center gap-2 group shadow-md">
            Começar Agora
            <span className="text-lg group-hover:translate-x-1 transition-transform">
              <ArrowUpRightIcon />
            </span>
          </button>
          <button className="cursor-pointer px-8 py-4 bg-[#00affe]/10 text-[#0B68F7] border-2 border-[#0B68F7]/20 font-bold rounded-full hover:bg-[#00affe]/20 transition-all">
            Ver Demonstração
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-3 overflow-hidden">
            <img
              alt="User avatar"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJMAywLStpPqZdW9deGsGuy62seITpBGlk46WxsT7rQ9YsZhmR2mhBjvEVa5-qeJuObI0vSYRJqgWuun7kGzETUUQvb55D128RfGdMrMavs5FGnllmLXWx6xpMFrftQJ0LIjmsfzmwky-vPixp9NzWzXfJsekAfTTsnB76PSDi6EZdEPEfSEcaqHvR52uABOCO0y1LzrtJ8dYh5RzXaoKkDICAZHtuq-uWoiNmWKSZ9v2RP1izrrKPaUD8DsmhHmd2CNDjXoe_5TE"
            />
            <img
              alt="User avatar"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlbHY65uDJodb-7fyehrt65KEUxnskusXCNLfBiQxY_pYZ2oW-PkJB0Tf3xFa8rLMDP049D11hfjmlTgR14whAM6W2wXQ1uFlO2JXnv7RHPLTbB7KxVFMz-LmW6qgLjcf0YxseA41V86uTx7h4txDhpt_7j7cfWWQd8iyNI23aAc0LZItZ1eEz3zpkagynvOeAT7Si-sZpOBiKWvmaKRA7ONhrdKJBmvAnSr0-5sszRi-Km22DWuZPjcy0W02d2MEngZjnXeu52w0"
            />
            <img
              alt="User avatar"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKXDfIohzz2XHMl1T-ejrHH3xwjH5AsKluPionD7NQHAHSsNzw-se-0YOqoW7wfbKWE6HvC323ebTrla3gszq9ZQTQnpTwLdv4PUC1p5O33eF5IHOcLRcbxFPUymdePKaugIiIB54ytnluen1-qpPc0OQ3YjuCCy14rglv9jKxfHcsJF_1xs8Mo0y9hnKv26iVgXfv5otiLrQGamvVdpkBYuPNGkyfl8mT7YUBDRT8BllUNJw8yxbrGR987YwP6FBTTCB9jBVluTE"
            />
            <img
              alt="User avatar"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF6jIB8RXCWBYPlf_4tV3GpTQT7AtcFhw4XAGMNEOuaHO1mM6WrZ30msVZa1ot30vtg9CU7Xw7n5a7ufSKvSYlo1apsSUInO867eR_J1LMdy1OzHC-75Ja9i0KJspgGlQsQUsNSEUKGLI-xU1JUmkribRnShlr-KqszXiYe_yxneDoJ_6wQ8_BZpPSifd370KLERax7S7rdc0wDsMZU72s39hHgeUC8Qs3-XfCw8vXx4BcTTCRjoREwGIfkzekavB67VpgcH3dI1M"
            />
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 ring-2 ring-white text-[10px] font-bold text-slate-500">
              +500
            </div>
          </div>
          <p className="text-sm font-semibold text-[#434750]">
            +500 clínicas cadastradas em todo o Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
