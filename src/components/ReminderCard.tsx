import { Clock, Edit3 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function ReminderCard() {
  return (
    <Card className="mx-4 mb-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <Clock className="w-4 h-4 text-yellow-600" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Próxima medição</p>
              <p className="text-xs text-gray-600">Hoje às 18:00</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-yellow-100 rounded-full">
            <Edit3 className="w-3 h-3 text-yellow-600" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}