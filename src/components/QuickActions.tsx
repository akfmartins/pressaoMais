import { Plus, BarChart3, Calendar, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function QuickActions() {
  const actions = [
    {
      icon: BarChart3,
      title: "Histórico",
      description: "Ver medições",
      color: "bg-gray-500 hover:bg-gray-600"
    },
    {
      icon: Calendar,
      title: "Lembretes",
      description: "Configurar",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: Brain,
      title: "IA Insights",
      description: "Análises",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <div className="px-4 mb-6">
      <h3 className="mb-4 text-sm font-semibold text-gray-800">Ações Rápidas</h3>
      
      {/* Ação principal em destaque */}
      <Card className="mb-5 bg-blue-500 border-0 shadow-lg rounded-2xl">
        <CardContent className="p-4">
          <Button className="w-full h-14 bg-transparent hover:bg-blue-600 text-white border-0 shadow-none">
            <div className="flex items-center justify-center space-x-3">
              <Plus className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Nova Medição</div>
                <div className="text-sm opacity-90">Registrar sua pressão arterial</div>
              </div>
            </div>
          </Button>
        </CardContent>
      </Card>
      
      {/* Outras ações em grid */}
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <Card key={index} className="bg-white border-0 shadow-md rounded-2xl">
            <CardContent className="p-3">
              <Button 
                variant="ghost" 
                className="w-full h-16 flex-col space-y-2 hover:bg-gray-50"
              >
                <action.icon className="w-5 h-5 text-gray-600" />
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-800">{action.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{action.description}</div>
                </div>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}