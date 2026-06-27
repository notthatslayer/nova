import { Gamepad2, Shield, Heart, ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-nova-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company branding columns */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-nova-primary to-nova-secondary p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-nova-dark">
                  <span className="font-display text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-nova-primary to-nova-secondary">
                    N
                  </span>
                </div>
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-white">
                NOVA<span className="text-nova-secondary">PLAY</span>
              </span>
            </button>
            <p className="text-white/40 text-sm max-w-sm">
              Deploying bleeding edge cloud rendering structures to unify modern visual pipelines with browser based low latency gameplay.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-widest uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <button onClick={() => scrollToSection("games")} className="hover:text-white transition-colors cursor-pointer">
                  Games Catalog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tournaments")} className="hover:text-white transition-colors cursor-pointer">
                  Tournaments Arenas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("plans")} className="hover:text-white transition-colors cursor-pointer">
                  VIP Memberships
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors cursor-pointer">
                  FAQ Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Social / Connections Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white text-xs tracking-widest uppercase">
              LEGAL LOBBIES
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Protocols
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Combat Engagement
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Refund Architecture
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  System SLA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 w-full mb-8" />

        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs font-mono">
            &copy; {currentYear} NovaPlay Interactive. All licenses reserved.
          </div>

          {/* Naturally placed portfolio attribution exactly as requested */}
          <div className="text-white/40 text-xs font-mono flex items-center space-x-1">
            <span>Designed and developed by</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-nova-secondary hover:text-nova-primary hover:underline transition-colors font-medium"
            >
              Tayyaba Shaikh
            </a>
          </div>

          {/* Back to top helper */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-1.5 text-xs font-bold text-white/40 hover:text-white cursor-pointer transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
