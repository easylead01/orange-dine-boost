import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContacts = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://t.me/easylead01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <Button
          size="icon"
          variant="gradient"
          className="w-14 h-14 rounded-full shadow-glow animate-glow-pulse"
        >
          <Send className="w-6 h-6" />
        </Button>
      </a>
      
      <a
        href="tel:+79507727307"
        aria-label="Позвонить"
      >
        <Button
          size="icon"
          variant="gradient"
          className="w-14 h-14 rounded-full shadow-glow animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        >
          <Phone className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingContacts;
