import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import alexanderPhoto from "@/assets/alexander-photo.jpg";
import AverageCheckCard from "@/infocards/AverageCheckCard";
import ConversionCard from "@/infocards/ConversionCard";
import CPAReductionCard from "@/infocards/CPAReductionCard";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange-light/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left space-y-4 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full animate-glow-pulse">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Работаю напрямую с франчайзи</span>
              </div>

              {/* Main heading */}
              <h1 className="font-bold leading-tight animate-fade-in-left" style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.75rem)" }}>
                Увеличу конверсию вашей доставки{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">в 2 раза</span>{" "}
                и снижу стоимость заказа{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">на 40%</span>
              </h1>

              {/* Subheading */}
              <p className="text-muted-foreground animate-fade-in-left" style={{ animationDelay: "0.2s", fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}>
                Без агентских наценок — экономия{" "}
                <span className="text-primary font-semibold">от 30 000₽/мес</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 md:gap-2 justify-center lg:justify-start items-center pt-2 md:pt-4">
                <Button 
                  variant="gradient" 
                  size="sm" 
                  onClick={scrollToContact}
                  className="group h-auto py-3 -translate-x-[10px] text-sm"
                >
                  Получить аудит рекламы бесплатно
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="gradient-outline" 
                  size="sm"
                  onClick={() => document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" })} 
                  className="h-auto py-3 text-sm"
                >
                  Посмотреть кейсы
                </Button>
              </div>
            </div>

            {/* Right column - Photo */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full scale-110" />
                
                {/* Photo container */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-glow">
                  <img 
                    src={alexanderPhoto} 
                    alt="Александр Сыроватский - Специалист по рекламе доставок"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/90 to-transparent" />
                  
                  {/* Name badge */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 p-2 md:p-4 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg">
                    <h3 className="text-base md:text-xl font-bold">Александр Сыроватский</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Специалист по рекламе Food Delivery</p>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-24 md:pt-16 max-w-5xl mx-auto items-stretch animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <AverageCheckCard />
            <ConversionCard />
            <CPAReductionCard />
          </div>

          {/* Stats Preview - moved below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            {[
              { value: "35+", label: "франчайзи по России" },
              { value: "110%", label: "рост конверсии" },
              { value: "от 30%", label: "снижение стоимости заказа" },
              { value: "5+ лет", label: "опыт в маркетинге" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow transition-all duration-300 text-center flex flex-col items-center justify-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
