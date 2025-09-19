import { useState } from 'react';
import { Header } from './components/Header';
import { PressureCard } from './components/PressureCard';
import { NewMeasurementButton } from './components/NewMeasurementButton';
import { AISuggestionCard } from './components/AISuggestionCard';
import { MiniGraphCard } from './components/MiniGraphCard';
import { ReminderCard } from './components/ReminderCard';
import { NavigationBar } from './components/NavigationBar';
import { AIScreen } from './components/AIScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleNavigation = (screen: string) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'ai':
        return <AIScreen />;
      case 'history':
        return (
          <div className="h-screen w-full max-w-[390px] mx-auto bg-gray-50 flex flex-col">
            <Header userName="Ana" />
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Tela de Histórico em desenvolvimento</p>
            </div>
            <NavigationBar currentScreen={currentScreen} onNavigate={handleNavigation} />
          </div>
        );
      case 'schedule':
        return (
          <div className="h-screen w-full max-w-[390px] mx-auto bg-gray-50 flex flex-col">
            <Header userName="Ana" />
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Tela de Agenda em desenvolvimento</p>
            </div>
            <NavigationBar currentScreen={currentScreen} onNavigate={handleNavigation} />
          </div>
        );
      default:
        return (
          <div className="h-screen w-full max-w-[390px] mx-auto bg-gray-50 flex flex-col">
            {/* Header */}
            <Header userName="Ana" />
            
            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="pt-2 pb-4">
                {/* Bloco de Medição Atual */}
                <PressureCard />
                
                {/* Botão de Nova Medição */}
                <NewMeasurementButton />
                
                {/* Sugestão da IA */}
                <AISuggestionCard />
                
                {/* Mini Gráfico de Histórico */}
                <MiniGraphCard />
                
                {/* Lembrete */}
                <ReminderCard />
              </div>
            </div>
            
            {/* Rodapé de Navegação */}
            <NavigationBar currentScreen={currentScreen} onNavigate={handleNavigation} />
          </div>
        );
    }
  };

  return renderScreen();
}