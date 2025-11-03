import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Стоимость",
      agency: "от 50 тысяч/мес",
      me: "от 15 тысяч/мес",
      highlight: true,
    },
    {
      feature: "Контакт",
      agency: "Нет прямого контакта",
      me: "Прямой контакт 24/7",
    },
    {
      feature: "Правки",
      agency: "3-7 дней",
      me: "В течение суток",
    },
    {
      feature: "Отчетность",
      agency: "Непрозрачная",
      me: "Полный доступ к кабинетам",
    },
    {
      feature: "Опыт",
      agency: "Работают джуны",
      me: "5+ лет в маркетинге",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Агентство</span> vs{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Я</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-primary/30 backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-card/70">
                  <th className="py-4 px-6 text-left font-bold text-lg">Параметр</th>
                  <th className="py-4 px-6 text-center font-bold text-lg">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      Агентство
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center font-bold text-lg bg-gradient-to-r from-primary/20 to-primary/10">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      Работа со мной
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-border/50 hover:bg-card/30 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <td className="py-4 px-6 font-medium">{item.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent font-bold ${item.highlight ? '' : 'md:text-white md:font-normal md:bg-none'}`}>
                        {item.agency}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-semibold">
                      <span className={`bg-gradient-primary bg-clip-text text-transparent font-bold ${item.highlight ? '' : 'md:text-white md:font-normal md:bg-none'}`}>
                        {item.me}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="font-bold text-lg mb-4">{item.feature}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Агентство:</div>
                      <div className={`bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent font-bold ${item.highlight ? '' : 'md:text-white md:font-normal md:bg-none'}`}>
                        {item.agency}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Работа со мной:</div>
                      <div className={`bg-gradient-primary bg-clip-text text-transparent font-bold ${item.highlight ? '' : 'md:text-white md:font-normal md:bg-none'}`}>
                        {item.me}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Savings highlight */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-sm border-2 border-primary rounded-lg text-center shadow-glow animate-glow-pulse">
            <div className="text-lg text-muted-foreground mb-2">Экономия</div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              от 20 000Р
            </div>
            <div className="text-xl text-muted-foreground mt-2">в месяц</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
