import { BarChart3 } from "lucide-react";

const AverageCheckCard = () => {
  return (
    <div className="p-4 h-full bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2 mb-1" style={{ marginTop: '4px' }}>
        <BarChart3 className="w-5 h-5 text-primary" />
        <p className="text-xs text-muted-foreground font-medium">Средний чек</p>
      </div>
      <div className="space-y-1" style={{ marginTop: '40px' }}>
        <div>
          <p className="text-xs text-muted-foreground">Было: 1410₽</p>
          <p className="text-2xl font-bold text-foreground">2 190₽</p>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-primary rounded-full" style={{ width: '75%' }} />
        </div>
      </div>
    </div>
  );
};

export default AverageCheckCard;
