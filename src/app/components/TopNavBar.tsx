import Image from "next/image";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="no-line-rule fixed top-0 z-50 w-full bg-background/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-8">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Doutor Agenda"
              width={120}
              height={40}
            />
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="#"
              className="font-manrope text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="font-manrope text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
            >
              Agendamentos
            </Link>

            <Link
              href="#"
              className="font-manrope text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
            >
              Médicos
            </Link>

            <Link
              href="#"
              className="font-manrope text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
            >
              Pacientes
            </Link>

            <Link
              href="#"
              className="font-manrope text-sm font-semibold tracking-tight text-muted-foreground transition-colors hover:text-primary"
            >
              Planos
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-primary rounded-full px-5 py-2 text-sm font-semibold transition-all hover:bg-accent hover:text-accent-foreground">
            Fazer Login
          </button>

          <button className="bg-primary rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-md">
            Criar Conta
          </button>
        </div>
      </div>
    </nav>
  );
}
