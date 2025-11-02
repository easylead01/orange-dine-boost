import { Target, Users as UsersIcon, Image, BarChart3, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Контекстная реклама",
    description: "Яндекс.Директ, Google Ads",
  },
  {
    icon: UsersIcon,
    title: "Таргетированная реклама",
    description: "VK, Instagram*",
  },
  {
    icon: Image,
    title: "Креативы и посадочные страницы",
    description: "Дизайн и разработка",
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчеты",
    description: "Еженедельные отчеты",
  },
  {
    icon: Settings,
    title: "Настройка CRM",
    description: "И интеграций",
  },
  {
    icon: Zap,
    title: "Прямой контакт",
    description: "Правки в течение 24 часов",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что <span className="bg-gradient-primary bg-clip-text text-transparent">входит в работу</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="w-12 h-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
