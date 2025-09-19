import { AlertTriangle, TrendingUp, Moon, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function PatternAlerts() {
  const alerts = [
    {
      icon: Moon,
      title: "Padrão Noturno Detectado",
      description: "Sua pressão tende a subir após às 20h nos últimos 7 dias",
      severity: "medium",
      color: "orange"
    },
    {
      icon: Clock,
      title: "Horário de Pico",
      description: "Maior variação entre 14h-16h, considere medir mais neste período",
      severity: "low",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Tendência Crescente",
      description: "Leve aumento nos últimos 5 dias. Monitore com atenção",
      severity: "high",
      color: "red"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'red': return 'text-red-500';
      case 'orange': return 'text-orange-500';
      case 'blue': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <AlertTriangle className="w-4 h-4 text-orange-500" />
        <h3 className="text-sm font-semibold text-gray-800">Padrões Detectados</h3>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <Card key={index} className="bg-white border-0 shadow-md rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <alert.icon className={`w-5 h-5 mt-0.5 ${getIconColor(alert.color)}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-800">{alert.title}</h4>
                    <Badge className={`text-xs px-2 py-1 ${getSeverityColor(alert.severity)}`}>
                      {alert.severity === 'high' ? 'Alta' : alert.severity === 'medium' ? 'Média' : 'Baixa'}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{alert.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}