import { TrendingUp, TrendingDown, Award } from "lucide-react";

const CaseStudySection = () => {
  const beforeData = {
    period: "Май-июнь 2025",
    conversion: "11-12%",
    cpa: "204-275₽",
    bounceRate: "~50%",
  };

  const duringData = {
    period: "Июль-сентябрь 2025",
    conversion: "24,44%",
    conversionChange: "+110%",
    cpa: "147-170₽",
    cpaChange: "-47%",
    bounceRate: "44%",
  };

  const afterData = {
    period: "Октябрь 2025 (новый специалист)",
    conversion: "20,40%",
    conversionChange: "падение",
    cpa: "199₽",
    cpaChange: "рост",
  };

  return (
    <section id="case-study" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Главный кейс</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Кейс: Франшизы доставки{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Фарфор</span>
          </h2>
          <p className="text-xl text-muted-foreground">За 3 месяца работы:</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Before */}
            <div className="p-6 bg-card/30 backdrop-blur-sm border border-border rounded-lg animate-fade-in-up">
              <div className="text-sm text-muted-foreground mb-4">{beforeData.period}</div>
              <h3 className="text-2xl font-bold mb-6">ДО</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Конверсия</div>
                  <div className="text-2xl font-bold">{beforeData.conversion}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">CPA (стоимость заказа)</div>
                  <div className="text-2xl font-bold">{beforeData.cpa}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Отказы</div>
                  <div className="text-2xl font-bold">{beforeData.bounceRate}</div>
                </div>
              </div>
            </div>

            {/* During (Result) */}
            <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary rounded-lg shadow-glow animate-fade-in-up relative overflow-hidden" style={{ animationDelay: "100ms" }}>
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                РЕЗУЛЬТАТ
              </div>
              <div className="text-sm text-muted-foreground mb-4 mt-6">{duringData.period}</div>
              <h3 className="text-2xl font-bold mb-6 text-primary">РЕЗУЛЬТАТ</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Конверсия</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold text-primary">{duringData.conversion}</div>
                    <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                      <TrendingUp className="w-4 h-4" />
                      {duringData.conversionChange}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">CPA (стоимость заказа)</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold text-primary">{duringData.cpa}</div>
                    <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                      <TrendingDown className="w-4 h-4" />
                      {duringData.cpaChange}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Отказы</div>
                  <div className="text-2xl font-bold text-primary">{duringData.bounceRate}</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-6 bg-card/30 backdrop-blur-sm border border-border rounded-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="text-sm text-muted-foreground mb-4">{afterData.period}</div>
              <h3 className="text-2xl font-bold mb-6">ПОСЛЕ УХОДА</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Конверсия</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold">{afterData.conversion}</div>
                    <div className="text-sm font-medium text-red-500">({afterData.conversionChange})</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">CPA</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold">{afterData.cpa}</div>
                    <div className="text-sm font-medium text-red-500">({afterData.cpaChange})</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart visualization */}
          <div className="p-8 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg">
            <h4 className="text-xl font-bold mb-6">Динамика показателей по месяцам</h4>
            <div className="space-y-6">
              {[
                { month: "Май", value: 11, label: "11%" },
                { month: "Июнь", value: 12, label: "12%" },
                { month: "Июль", value: 18, label: "18%" },
                { month: "Август", value: 22, label: "22%" },
                { month: "Сентябрь", value: 24, label: "24.44%" },
                { month: "Октябрь", value: 20, label: "20.40%", isDecline: true },
              ].map((item, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 text-sm text-muted-foreground">{item.month}</div>
                    <div className="flex-1 h-8 bg-secondary rounded-full overflow-hidden relative">
                      <div
                        className={`h-full ${item.isDecline ? 'bg-gradient-to-r from-red-600 to-red-400' : 'bg-gradient-primary'} transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                        style={{ width: `${(item.value / 25) * 100}%` }}
                      >
                        <span className="text-xs font-bold text-white">{item.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center mt-12 p-6 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg">
            <p className="text-lg">
              Работал с <span className="text-primary font-bold">12+ франчайзи Фарфор</span> по всей России.{" "}
              После моего ухода показатели у всех начали <span className="text-red-500 font-semibold">падать</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
