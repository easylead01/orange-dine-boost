import { TrendingUp } from "lucide-react";

const ConversionCard = () => {
  return (
    <div className="p-4 h-full bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2 mb-1" style={{ marginTop: '4px' }}>
        <TrendingUp className="w-5 h-5 text-primary" />
        <p className="text-xs text-muted-foreground font-medium">Конверсия</p>
      </div>
      <div className="flex items-center gap-2 mb-1" style={{ marginTop: '30px' }}>
        <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent" style={{ fontSize: 'calc(10px + 1.5rem)' }}>+110%</span>
        <TrendingUp className="w-6 h-6 text-primary" />
      </div>
      <div className="h-16 flex items-end gap-1">
        {[40, 45, 50, 60, 75, 85, 100].map((height, i) => (
          <div 
            key={i} 
            className={`flex-1 rounded-t opacity-80 ${i < 3 ? '' : 'bg-gradient-primary'}`}
            style={{ 
              height: `${height}%`,
              ...(i < 3 && { background: 'linear-gradient(to top, #ef4444, #dc2626)' })
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversionCard;
