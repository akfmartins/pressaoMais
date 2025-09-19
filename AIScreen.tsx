import { Header } from './Header';
import { PatternAlerts } from './PatternAlerts';
import { HealthRecommendations } from './HealthRecommendations';
import { RiskPrediction } from './RiskPrediction';
import { ExportReport } from './ExportReport';
import { NavigationBar } from './NavigationBar';

export function AIScreen() {
  return (
    <div className="h-screen w-full max-w-[390px] mx-auto bg-gray-50 flex flex-col">
      {/* Header */}
      <Header userName="Ana" />
      
      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="pt-2 pb-4">
          {/* Alertas de Padrão */}
          <PatternAlerts />
          
          {/* Dicas de Saúde */}
          <HealthRecommendations />
          
          {/* Previsão de Risco */}
          <RiskPrediction />
          
          {/* Exportar Relatório */}
          <ExportReport />
        </div>
      </div>
      
      {/* Rodapé de Navegação */}
      <NavigationBar currentScreen="ai" />
    </div>
  );
}