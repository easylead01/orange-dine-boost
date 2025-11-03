import { AlertCircle, TrendingDown, Users, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    text: "Стоимость заказа 300-500₽ и растет каждый месяц",
  },
  {
    icon: TrendingDown,
    text: "Конверсия сайта/лендинга 3-5% — деньги уходят впустую",
  },
  {
    icon: AlertCircle,
    text: "Агентство берет от 50 тысяч, а результата нет",
  },
  {
    icon: Clock,
    text: "Нет прямого контакта со специалистом — правки делаются неделями",
  },
  {
    icon: Users,
    text: "Не понимаете, куда уходит рекламный бюджет",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Знакомые <span className="bg-gradient-primary bg-clip-text text-transparent">проблемы?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isCenter = index === 4;
            return (
              <div
                key={index}
                className={`group p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 hover:shadow-glow transition-all duration-300 animate-fade-in-up ${isCenter ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg flex-1">
                    {index === 2 ? (
                      <>
                        Агентство берет{" "}
                        <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent font-bold">
                          от 50 тысяч
                        </span>
                        , а результата нет
                      </>
                    ) : (
                      problem.text
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
