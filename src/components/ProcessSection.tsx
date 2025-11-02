import { Search, FileText, FileSignature, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Аудит текущей рекламы",
    description: "Бесплатный анализ ваших кампаний",
    duration: "1-2 дня",
  },
  {
    icon: FileText,
    number: "02",
    title: "План улучшений",
    description: "И прогноз показателей",
    duration: "1 день",
  },
  {
    icon: FileSignature,
    number: "03",
    title: "Подписание договора",
    description: "И получение доступов",
    duration: "1 день",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Запуск кампаний",
    description: "Настройка и оптимизация",
    duration: "2-3 дня",
  },
  {
    icon: BarChart,
    number: "05",
    title: "Отчеты и оптимизация",
    description: "Еженедельные отчеты",
    duration: "Постоянно",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Как это <span className="bg-gradient-primary bg-clip-text text-transparent">работает</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Number badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow z-10">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        <div className="px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    {/* Number badge */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="flex-1 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                          <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="ml-6 h-6 w-0.5 bg-gradient-to-b from-primary to-primary/30" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-transparent backdrop-blur-sm border border-primary/30 rounded-lg text-center">
            <p className="text-xl">
              <span className="font-bold text-primary">Старт работы:</span>{" "}
              <span className="font-semibold">5-7 дней</span> с момента обращения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
