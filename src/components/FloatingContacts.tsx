import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContacts = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
      <a
        href="https://t.me/easylead01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <Button
          size="icon"
          variant="gradient"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-glow animate-glow-pulse"
        >
          <Send className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </a>
      
      <a
        href="tel:+79507727307"
        aria-label="Позвонить"
      >
        <Button
          size="icon"
          variant="gradient"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-glow animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingContacts;
