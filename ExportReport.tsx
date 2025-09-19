import { FileText, Download, Share2, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function ExportReport() {
  const reportData = {
    period: "Últimos 30 dias",
    measurements: 24,
    avgSystolic: 118,
    avgDiastolic: 78,
    avgHeartRate: 74
  };

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <FileText className="w-4 h-4 text-green-500" />
        <h3 className="text-sm font-semibold text-gray-800">Relatório Médico</h3>
      </div>
      
      <Card className="bg-white border-0 shadow-lg rounded-2xl">
        <CardContent className="p-5">
          {/* Resumo do Relatório */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Resumo do Período</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <div className="text-lg font-bold text-gray-800">{reportData.measurements}</div>
                <div className="text-xs text-gray-600">Medições</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <div className="text-lg font-bold text-blue-600">
                  {reportData.avgSystolic}/{reportData.avgDiastolic}
                </div>
                <div className="text-xs text-gray-600">Média PA</div>
              </div>
            </div>
          </div>
          
          {/* Período */}
          <div className="flex items-center justify-between mb-5 p-3 bg-green-50 rounded-xl">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">{reportData.period}</span>
            </div>
            <span className="text-xs text-green-600 font-medium">Completo</span>
          </div>
          
          {/* Botões de Ação */}
          <div className="space-y-3">
            <Button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl">
              <Download className="w-4 h-4 mr-2" />
              Exportar PDF para Médico
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-10 text-xs border-gray-200 hover:bg-gray-50">
                <Share2 className="w-3 h-3 mr-1" />
                Compartilhar
              </Button>
              <Button variant="outline" className="h-10 text-xs border-gray-200 hover:bg-gray-50">
                <FileText className="w-3 h-3 mr-1" />
                Visualizar
              </Button>
            </div>
          </div>
          
          {/* Nota */}
          <div className="mt-4 p-3 bg-yellow-50 rounded-xl">
            <p className="text-xs text-yellow-800 leading-relaxed">
              <strong>Nota:</strong> O relatório inclui todas as medições, padrões detectados 
              e recomendações da IA para facilitar a consulta médica.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}