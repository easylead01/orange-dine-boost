import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Кейсы", id: "case-study" },
    { label: "Услуги", id: "services" },
    { label: "Стоимость", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Контакты", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16 w-full">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="gradient"
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Получить аудит
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden w-12 h-12">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className="h-[60px] w-[60px]">
                  <rect x="4" y="12" width="62" height="5" fill="currentColor"/>
                  <rect x="4" y="52" width="62" height="5" fill="currentColor"/>
                  <rect x="10" y="32" width="50" height="5" fill="currentColor"/>
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    variant="gradient"
                    size="default"
                    onClick={() => scrollToSection("contact")}
                    className="w-full"
                  >
                    Получить аудит
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

