const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 BuildaBaller. All rights reserved.
          </p>
          
          {/* Brand Mark */}
          <a
            href="https://t.me/mejrifx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
          >
            Built with <span className="text-red-500 group-hover:scale-110 transition-transform inline-block">❤️</span> by{" "}
            <span className="font-semibold text-foreground group-hover:text-secondary transition-colors">
              @Mejrifx
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

