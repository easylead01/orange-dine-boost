import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange-light/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full animate-glow-pulse">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Работаю напрямую с франчайзи</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Увеличу конверсию вашей доставки{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">в 2 раза</span>{" "}
            и снижу стоимость заказа{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">на 40%</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Без агентских наценок — экономия до{" "}
            <span className="text-primary font-semibold">50 000₽/мес</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="gradient" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Получить аудит рекламы бесплатно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="gradient-outline" 
              size="xl"
              onClick={() => document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" })}
            >
              Посмотреть кейсы
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { value: "12+", label: "франчайзи по России" },
              { value: "110%", label: "рост конверсии" },
              { value: "-47%", label: "снижение CPA" },
              { value: "3+ года", label: "опыт в нише" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
