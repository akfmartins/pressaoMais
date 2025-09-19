import { Home, BarChart3, Calendar, Brain } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationBarProps {
  currentScreen?: string;
  onNavigate?: (screen: string) => void;
}

export function NavigationBar({ currentScreen = "home", onNavigate }: NavigationBarProps) {
  const navItems = [
    { icon: Home, label: 'Início', screen: 'home' },
    { icon: BarChart3, label: 'Histórico', screen: 'history' },
    { icon: Brain, label: 'IA & Dicas', screen: 'ai' },
    { icon: Calendar, label: 'Agenda', screen: 'schedule' },
  ];

  const handleNavigation = (screen: string) => {
    if (onNavigate) {
      onNavigate(screen);
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => handleNavigation(item.screen)}
            className={`flex-col space-y-1 h-12 px-3 ${
              currentScreen === item.screen 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}