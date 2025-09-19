import { Heart, Settings } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  userName?: string;
}

export function Header({ userName = "Ana" }: HeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          <h1 className="text-lg font-bold text-gray-800">Pressão+</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <p className="text-xs text-gray-500">{getGreeting()},</p>
          <p className="text-sm font-semibold text-gray-800">{userName}!</p>
        </div>
        
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-50 rounded-full">
          <Settings className="w-4 h-4 text-gray-600" />
        </Button>
      </div>
    </div>
  );
}