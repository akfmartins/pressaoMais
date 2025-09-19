import { Lightbulb, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function HealthTips() {
  const tips = [
    {
      title: "Hidrate-se regularmente",
      description: "Beba pelo menos 2 litros de água por dia para manter a pressão equilibrada.",
      category: "Hidratação"
    },
    {
      title: "Pratique exercícios leves",
      description: "30 minutos de caminhada diária ajudam a controlar a pressão arterial.",
      category: "Exercício"
    }
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Dicas Inteligentes</h3>
        <Lightbulb className="w-4 h-4 text-yellow-500" />
      </div>
      
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <Card key={index} className="bg-white border-0 shadow-md rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                      {tip.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">{tip.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
                <Button variant="ghost" size="sm" className="ml-2 p-2 hover:bg-gray-50 rounded-full flex-shrink-0">
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}