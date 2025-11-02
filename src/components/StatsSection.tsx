import { Users, TrendingUp, TrendingDown, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12+",
    label: "франчайзи по всей России",
  },
  {
    icon: TrendingUp,
    value: "110%",
    label: "рост конверсии в среднем",
  },
  {
    icon: TrendingDown,
    value: "47%",
    label: "снижение стоимости заказа",
  },
  {
    icon: Award,
    value: "3+",
    label: "года работы в нише доставок",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Почему <span className="bg-gradient-primary bg-clip-text text-transparent">со мной работают</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-500 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
