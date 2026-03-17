import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 border-t border-border bg-background">
      <div className="w-full px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <p className="font-medium text-base text-muted-foreground tracking-tight">
              © {new Date().getFullYear()} <span className="font-black tracking-widest uppercase text-foreground">LOGUI SOFT</span>. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-medium text-base text-muted-foreground tracking-tight">
              Morteros, Córdoba, Argentina
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;