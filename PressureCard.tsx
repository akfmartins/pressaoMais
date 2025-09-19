import { Activity, TrendingUp, Calendar, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function PressureCard() {
  return (
    <Card className="mx-4 mb-4 bg-white border-0 shadow-lg rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-semibold text-gray-800">Medição Atual</h2>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 rounded-full px-2 py-1 text-xs">
            Normal
          </Badge>
        </div>
        
        {/* Pressão Arterial e Batimentos */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Pressão Arterial */}
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <Activity className="w-4 h-4 text-blue-600 mr-1" />
              <span className="text-xs text-blue-600 font-medium">Pressão</span>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">120/80</div>
            <div className="text-xs text-gray-600">mmHg</div>
          </div>
          
          {/* Batimentos Cardíacos */}
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-xs text-green-600 font-medium">Pulso</span>
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">72</div>
            <div className="text-xs text-gray-600">bpm</div>
          </div>
        </div>
        
        {/* Informações adicionais */}
        <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>Hoje, 14:30</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="text-green-600">Estável</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}