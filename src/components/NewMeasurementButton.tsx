import { Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function NewMeasurementButton() {
  return (
    <Card className="mx-4 mb-4 bg-blue-500 border-0 shadow-lg rounded-2xl">
      <CardContent className="p-4">
        <Button className="w-full h-14 bg-transparent hover:bg-blue-600 text-white border-0 shadow-none">
          <div className="flex items-center justify-center space-x-3">
            <Plus className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Nova Medição</div>
              <div className="text-sm opacity-90">Registrar pressão arterial agora</div>
            </div>
          </div>
        </Button>
      </CardContent>
    </Card>
  );
}