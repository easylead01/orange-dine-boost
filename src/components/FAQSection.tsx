import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Работаете только с Фарфор?",
    answer:
      "Нет, я работаю с любыми доставками еды — суши, пицца, бургеры и т.д. Опыт с Фарфор позволяет мне быстро адаптироваться под любую нишу доставок.",
  },
  {
    question: "Нужно ли разрывать договор с агентством?",
    answer:
      "Не обязательно. Мы можем начать работу параллельно, чтобы вы увидели разницу в подходе и результатах. После этого вы сами примете решение.",
  },
  {
    question: "Даете ли вы доступы к кабинетам?",
    answer:
      "Да, вы получаете полный доступ ко всем рекламным кабинетам и аналитике. Полная прозрачность — один из моих главных принципов работы.",
  },
  {
    question: "Есть ли договор?",
    answer:
      "Да, мы заключаем официальный договор. Работаю как самозанятый, все легально и прозрачно.",
  },
  {
    question: "Какой минимальный рекламный бюджет?",
    answer:
      "Я подготовлю медиаплан с оптимальным рекламным бюджетом под ваш регион и цели.",
  },
  {
    question: "Как быстро будут первые результаты?",
    answer:
      "Первые улучшения заметны через 2-3 недели после запуска оптимизированных кампаний. Максимальные результаты достигаются через 2-3 месяца работы.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Частые <span className="bg-gradient-primary bg-clip-text text-transparent">вопросы</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 hover:border-primary/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
