import Image from "next/image";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="no-line-rule bg-background/80 fixed top-0 z-50 w-full shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-8">
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
              className="font-manrope text-muted-foreground hover:text-primary text-sm font-semibold tracking-tight transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="font-manrope text-muted-foreground hover:text-primary text-sm font-semibold tracking-tight transition-colors"
            >
              Agendamentos
            </Link>

            <Link
              href="#"
              className="font-manrope text-muted-foreground hover:text-primary text-sm font-semibold tracking-tight transition-colors"
            >
              Médicos
            </Link>

            <Link
              href="#"
              className="font-manrope text-muted-foreground hover:text-primary text-sm font-semibold tracking-tight transition-colors"
            >
              Pacientes
            </Link>

            <Link
              href="#"
              className="font-manrope text-muted-foreground hover:text-primary text-sm font-semibold tracking-tight transition-colors"
            >
              Planos
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/authentication?tab=login"
            className="text-primary hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-all sm:px-5 sm:py-2 sm:text-sm"
          >
            Fazer Login
          </Link>

          <Link
            href="/authentication?tab=register"
            className="bg-primary text-primary-foreground cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-all hover:shadow-md sm:px-5 sm:py-2 sm:text-sm"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </nav>
  );
}
