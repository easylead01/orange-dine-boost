import { TrendingDown, ArrowRight } from "lucide-react";

const CPAReductionCard = () => {
  return (
    <div className="p-4 h-full bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2 mb-2" style={{ marginTop: '4px' }}>
        <TrendingDown className="w-5 h-5 text-primary" />
        <p className="text-xs text-muted-foreground font-medium">CPA снижение</p>
      </div>
      <div className="flex items-center gap-2" style={{ marginTop: '40px' }}>
        <span className="text-xl font-semibold text-muted-foreground line-through" style={{ fontSize: 'calc(1.25rem + 10px)' }}>249,9₽</span>
        <ArrowRight className="w-4 h-4 text-primary" />
        <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent" style={{ fontSize: 'calc(1.5rem + 10px)' }}>170₽</span>
      </div>
      <p className="text-xs text-primary font-semibold mt-1">-47% стоимость</p>
    </div>
  );
};

export default CPAReductionCard;
