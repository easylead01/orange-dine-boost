import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-primary rounded-lg shadow-glow-strong animate-fade-in overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 text-center md:text-left">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary flex-shrink-0" />
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  Работаю с{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    гарантией результата
                  </span>
                </h2>
              </div>

              <div className="max-w-2xl mx-auto text-center space-y-6">
                <p className="text-lg md:text-2xl leading-relaxed">
                  Если за первый месяц не улучшу ваши показатели (ROI или CPA) —{" "}
                  <span className="font-bold text-primary">следующий месяц работаю со скидкой 50%</span>.
                </p>

                <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Вы ничем не рискуете</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
