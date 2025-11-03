import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={handleGoHome}
            className="mb-8 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            На главную
          </Button>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </h1>

            <p className="text-muted-foreground mb-12">
              Дата последнего обновления: 29 октября 2025 г.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сайта
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Самозанятый Сыроватский Александр Анатольевич (ИНН 360307406695) обязуется соблюдать конфиденциальность персональных данных пользователей.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Используя данный сайт и оставляя свои персональные данные, вы даете согласие на их обработку в соответствии с настоящей Политикой.
                </p>
              </div>

              {/* Section 2 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">2. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
                <p className="text-muted-foreground mb-4">При заполнении форм обратной связи мы собираем следующую информацию:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Имя</li>
                  <li>Номер телефона</li>
                  <li>Telegram/WhatsApp для связи</li>
                  <li>Текущий рекламный бюджет</li>
                  <li>Данные о браузере и устройстве (для корректной работы сайта)</li>
                </ul>
                <p className="text-muted-foreground mt-6 font-semibold">Мы НЕ собираем:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>IP-адреса</li>
                  <li>Адреса электронной почты (если вы не указали их добровольно)</li>
                  <li>Другие персональные данные, не указанные выше</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">3. ДЛЯ ЧЕГО МЫ ИСПОЛЬЗУЕМ ДАННЫЕ</h2>
                <p className="text-muted-foreground mb-4">Собранные данные используются для:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Обработки заявок и связи с вами</li>
                  <li>Предоставления консультаций и коммерческих предложений</li>
                  <li>Подготовки медиаплана и аудита рекламы</li>
                  <li>Заключения договора на оказание услуг</li>
                  <li>Улучшения качества сервиса</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">4. КАК МЫ ЗАЩИЩАЕМ ДАННЫЕ</h2>
                <p className="text-muted-foreground mb-4">Мы принимаем необходимые меры для защиты ваших данных:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Данные хранятся на защищенных серверах</li>
                  <li>Доступ к данным имеет только уполномоченное лицо</li>
                  <li>Мы не передаем ваши данные третьим лицам без вашего согласия</li>
                  <li>Исключение: передача данных требуется по закону</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">5. СРОК ХРАНЕНИЯ ДАННЫХ</h2>
                <p className="text-muted-foreground mb-4">Персональные данные хранятся в течение:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Срока действия договора на оказание услуг</li>
                  <li>3 лет после окончания сотрудничества (для бухгалтерской отчетности)</li>
                  <li>До момента вашего запроса на удаление данных</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">6. ВАШИ ПРАВА</h2>
                <p className="text-muted-foreground mb-4">Вы имеете право:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Получить информацию о ваших персональных данных</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                </ul>
                <p className="text-muted-foreground mt-6">
                  Для реализации своих прав свяжитесь с нами по контактам, указанным ниже.
                </p>
              </div>

              {/* Section 7 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">7. ФАЙЛЫ COOKIE</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Сайт использует файлы cookie для:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                  <li>Улучшения работы сайта</li>
                  <li>Анализа посещаемости</li>
                  <li>Корректного отображения контента</li>
                </ul>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  Вы можете отключить cookie в настройках браузера, но это может ограничить функциональность сайта.
                </p>
              </div>

              {/* Section 8 */}
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h2 className="text-2xl font-bold mb-4">8. ИЗМЕНЕНИЯ В ПОЛИТИКЕ</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице. Дата последнего обновления указана в начале документа.
                </p>
              </div>

              {/* Section 9 */}
              <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">9. КОНТАКТЫ</h2>
                <p className="text-muted-foreground mb-4">По вопросам обработки персональных данных обращайтесь:</p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="font-semibold">Сыроватский Александр Анатольевич</li>
                  <li>ИНН: 360307406695</li>
                  <li>Телефон: <a href="tel:+79507727307" className="text-primary hover:underline">+7 (950) 772-73-07</a></li>
                  <li>Telegram: <a href="https://t.me/easylead01" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@easylead01</a></li>
                </ul>
              </div>

              {/* Back Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  variant="gradient"
                  onClick={handleGoHome}
                  className="group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  На главную
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

