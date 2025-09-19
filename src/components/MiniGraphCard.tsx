import { BarChart3, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function MiniGraphCard() {
  // Dados mock para o mini gráfico
  const data = [120, 125, 118, 122, 120, 115, 120];
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);

  return (
    <Card className="mx-4 mb-4 bg-white border-0 shadow-md rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-800">Últimos 7 dias</h3>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-600">Estável</span>
          </div>
        </div>
        
        {/* Mini gráfico */}
        <div className="flex items-end space-x-1 h-12 mb-3">
          {data.map((value, index) => {
            const height = ((value - minValue) / (maxValue - minValue)) * 40 + 8;
            return (
              <div
                key={index}
                className="bg-blue-500 rounded-t flex-1"
                style={{ height: `${height}px` }}
              />
            );
          })}
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full h-8 text-xs text-blue-600 hover:bg-blue-50"
        >
          Ver histórico completo
        </Button>
      </CardContent>
    </Card>
  );
}