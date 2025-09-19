import { Lightbulb, Utensils, Droplets, Activity, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function HealthRecommendations() {
  const recommendations = [
    {
      icon: Utensils,
      title: "Evite sal após às 18h",
      description: "Reduzir sódio no período noturno pode ajudar a controlar a pressão durante o sono",
      category: "Alimentação",
      priority: "high"
    },
    {
      icon: Droplets,
      title: "Hidrate-se pela manhã",
      description: "Beba 2 copos de água ao acordar para regular a pressão arterial",
      category: "Hidratação", 
      priority: "medium"
    },
    {
      icon: Activity,
      title: "Caminhada de 15 minutos",
      description: "Exercício leve após o almoço pode reduzir picos vespertinos",
      category: "Exercício",
      priority: "medium"
    },
    {
      icon: Clock,
      title: "Meça sempre no mesmo horário",
      description: "Consistência nos horários melhora a precisão do monitoramento",
      category: "Rotina",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-50 border-l-red-500';
      case 'medium': return 'bg-orange-50 border-l-orange-500';
      case 'low': return 'bg-blue-50 border-l-blue-500';
      default: return 'bg-gray-50 border-l-gray-500';
    }
  };

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="w-4 h-4 text-yellow-500" />
        <h3 className="text-sm font-semibold text-gray-800">Dicas Personalizadas</h3>
      </div>
      
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Card key={index} className={`bg-white border-0 shadow-md rounded-2xl border-l-4 ${getPriorityColor(rec.priority)}`}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <rec.icon className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-gray-800">{rec.title}</h4>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {rec.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{rec.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}