import { Shield, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';

export function RiskPrediction() {
  const riskData = {
    current: "Baixo",
    futureRisk: 25,
    timeframe: "3 meses",
    factors: [
      { name: "Histórico familiar", impact: "Médio", value: 40 },
      { name: "Idade", impact: "Baixo", value: 20 },
      { name: "Estilo de vida", impact: "Baixo", value: 15 },
      { name: "Pressão atual", impact: "Muito baixo", value: 10 }
    ]
  };

  const getRiskColor = (risk: number) => {
    if (risk < 30) return { bg: 'bg-green-500', text: 'text-green-600', label: 'Baixo' };
    if (risk < 60) return { bg: 'bg-yellow-500', text: 'text-yellow-600', label: 'Moderado' };
    return { bg: 'bg-red-500', text: 'text-red-600', label: 'Alto' };
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Muito baixo': return 'text-green-600 bg-green-100';
      case 'Baixo': return 'text-green-600 bg-green-100';
      case 'Médio': return 'text-yellow-600 bg-yellow-100';
      case 'Alto': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const riskStyle = getRiskColor(riskData.futureRisk);

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="w-4 h-4 text-blue-500" />
        <h3 className="text-sm font-semibold text-gray-800">Previsão de Risco</h3>
      </div>
      
      {/* Card Principal de Risco */}
      <Card className="mb-4 bg-white border-0 shadow-lg rounded-2xl">
        <CardContent className="p-5">
          <div className="text-center mb-4">
            <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-50 mb-3`}>
              <TrendingUp className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">Projeção para {riskData.timeframe}</span>
            </div>
            
            <div className="relative w-24 h-24 mx-auto mb-3">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={riskStyle.bg.replace('bg-', '#')}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${riskData.futureRisk * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xl font-bold ${riskStyle.text}`}>{riskData.futureRisk}%</span>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-gray-800 mb-1">Risco de Hipertensão</h4>
            <p className={`text-xs font-medium px-3 py-1 rounded-full ${riskStyle.text} bg-opacity-20`}>
              {riskStyle.label}
            </p>
          </div>
          
          <div className="border-t border-gray-100 pt-4">
            <h5 className="text-xs font-semibold text-gray-700 mb-3">Fatores de Influência</h5>
            <div className="space-y-2">
              {riskData.factors.map((factor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">{factor.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getImpactColor(factor.impact)}`}>
                        {factor.impact}
                      </span>
                    </div>
                    <Progress value={factor.value} className="h-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Alerta Adicional */}
      <Card className="bg-blue-50 border border-blue-200 rounded-2xl">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-800 mb-1">Recomendação</h4>
              <p className="text-xs text-blue-700 leading-relaxed">
                Continue monitorando regularmente. Suas medições estão controladas, 
                mantendo baixo risco de desenvolvimento de hipertensão.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}