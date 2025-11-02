import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "СТАРТ",
    price: "35 000₽",
    period: "/мес",
    features: [
      "Ведение 1 канала (Директ или VK)",
      "До 3 кампаний",
      "Базовая аналитика",
      "Еженедельные отчеты",
    ],
    suitable: "Небольших франшиз",
    budget: "бюджет до 50к/мес",
    isPopular: false,
  },
  {
    name: "РОСТ",
    price: "45 000₽",
    period: "/мес",
    features: [
      "Ведение 2 каналов (Директ + VK/Таргет)",
      "До 6 кампаний",
      "Глубокая аналитика",
      "Креативы и тексты",
      "Еженедельные созвоны",
    ],
    suitable: "Средних франшиз",
    budget: "бюджет 50-150к/мес",
    isPopular: true,
  },
  {
    name: "МАКСИМУМ",
    price: "60 000₽",
    period: "/мес",
    features: [
      "Ведение всех каналов",
      "Неограниченное количество кампаний",
      "Посадочные страницы",
      "A/B тесты",
      "SMM (базовый) или подключение SMM-специалиста",
      "Ежедневная связь",
    ],
    suitable: "Крупных франшиз",
    budget: "бюджет 150к+/мес",
    isPopular: false,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange-light/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Стоимость</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card/50 backdrop-blur-sm rounded-lg transition-all duration-300 animate-fade-in-up ${
                plan.isPopular
                  ? "border-2 border-primary shadow-glow-strong scale-105"
                  : "border border-border hover:border-primary/50 hover:shadow-glow"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full flex items-center gap-1 shadow-glow">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <span className="text-sm font-bold">Популярный</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-1">Подходит для:</p>
                <p className="font-semibold mb-1">{plan.suitable}</p>
                <p className="text-sm text-muted-foreground">({plan.budget})</p>
              </div>

              <Button
                variant={plan.isPopular ? "gradient" : "gradient-outline"}
                className="w-full mt-6"
                onClick={scrollToContact}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center p-6 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg max-w-2xl mx-auto">
          <p className="text-xl">
            В любом случае это{" "}
            <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
              в 2 раза дешевле агентства
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
