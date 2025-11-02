import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь будет отправка данных
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });

    // Очистка формы
    setFormData({
      name: "",
      company: "",
      contact: "",
      budget: "",
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Начнем <span className="bg-gradient-primary bg-clip-text text-transparent">работу?</span>
          </h2>
          <p className="text-xl text-muted-foreground">Получите бесплатный аудит вашей рекламы</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">
                  Ваше имя *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Александр"
                  required
                  className="h-12 bg-card/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-base">
                  Название доставки *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Суши Бар"
                  required
                  className="h-12 bg-card/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-base">
                  Телефон или Telegram *
                </Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="+7 (900) 123-45-67 или @username"
                  required
                  className="h-12 bg-card/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-base">
                  Текущий рекламный бюджет *
                </Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="h-12 bg-card/50 border-border focus:border-primary">
                    <SelectValue placeholder="Выберите бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50k">До 50 000₽</SelectItem>
                    <SelectItem value="50-100k">50 000 - 100 000₽</SelectItem>
                    <SelectItem value="100-200k">100 000 - 200 000₽</SelectItem>
                    <SelectItem value="200k+">Более 200 000₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full group">
                Получить бесплатный аудит
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="p-8 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Контакты</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Александр Сыроватский</h4>
                  <p className="text-muted-foreground">Специалист по рекламе доставок</p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+79507727307"
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>+7 (950) 772-73-07</span>
                  </a>

                  <a
                    href="https://t.me/easylead01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <span>@easylead01</span>
                  </a>

                  <a
                    href="mailto:easylead01@ya.ru"
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>easylead01@ya.ru</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-lg">
              <p className="text-center">
                <span className="text-muted-foreground">Среднее время ответа:</span>
                <br />
                <span className="text-2xl font-bold text-primary">до 1 часа</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
