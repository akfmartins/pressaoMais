import { Brain, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function AISuggestionCard() {
  return (
    <Card className="mx-4 mb-4 bg-gradient-to-r from-purple-50 to-blue-50 border-0 shadow-md rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Sugestão da IA</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sua pressão está ótima! Continue com exercícios leves e mantenha a hidratação regular.
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-white/50 rounded-full flex-shrink-0">
            <ArrowRight className="w-3 h-3 text-gray-400" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}