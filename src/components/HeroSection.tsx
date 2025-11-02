import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import alexanderPhoto from "@/assets/alexander-photo.jpg";

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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full animate-glow-pulse">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Работаю напрямую с франчайзи</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Увеличу конверсию вашей доставки{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">в 2 раза</span>{" "}
                и снижу стоимость заказа{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">на 40%</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-muted-foreground">
                Без агентских наценок — экономия до{" "}
                <span className="text-primary font-semibold">50 000₽/мес</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
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
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg">
                    <h3 className="text-xl font-bold">Александр Сыроватский</h3>
                    <p className="text-sm text-muted-foreground">Специалист по рекламе доставок</p>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Stats Preview - moved below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            {[
              { value: "12+", label: "франчайзи по России" },
              { value: "110%", label: "рост конверсии" },
              { value: "-47%", label: "снижение CPA" },
              { value: "3+ года", label: "опыт в нише" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-glow transition-all duration-300"
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
