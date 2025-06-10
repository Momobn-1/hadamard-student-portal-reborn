
import React from 'react';
import { Calendar, Home, FileText, CreditCard, Clock, User, Phone, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLocation, Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard', description: 'Vue d\'ensemble' },
    { path: '/planning', icon: Calendar, label: 'Planning', description: 'Mes cours' },
    { path: '/historique', icon: Clock, label: 'Historique', description: 'Séances passées' },
    { path: '/factures', icon: FileText, label: 'Factures', description: 'Gestion financière' },
    { path: '/credit-impot', icon: CreditCard, label: 'Crédit d\'impôt', description: 'Avantages fiscaux' },
    { path: '/profil', icon: User, label: 'Mon profil', description: 'Informations personnelles' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Moderne - Fond blanc avec ombre */}
      <header className="bg-white border-b border-gray-100 shadow-hadamard">
        <div className="hadamard-container">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-hadamard-secondary rounded-xl flex items-center justify-center shadow-hadamard">
                  <span className="text-black font-bold text-lg">H</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-black">Hadamard</span>
                  <span className="text-sm text-hadamard-gray block leading-none">Portail Élève</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-hadamard-primary text-hadamard-primary hover:bg-hadamard-primary hover:text-white transition-all duration-200 shadow-hadamard"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">01 47 89 36 36</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-hadamard-secondary rounded-full flex items-center justify-center shadow-hadamard">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-sm font-semibold text-black block">Alexandre Martin</span>
                  <span className="text-xs text-hadamard-gray">Élève</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Moderne avec sidebar - Fond blanc avec ombre */}
      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white min-h-screen border-r border-gray-100 shadow-hadamard">
          <div className="p-6">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group shadow-hadamard-card hover:shadow-hadamard",
                      isActive
                        ? "bg-hadamard-secondary text-black"
                        : "text-black hover:bg-gray-50"
                    )}
                  >
                    <Icon className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isActive ? "text-black" : "text-hadamard-gray group-hover:text-black group-hover:scale-110"
                    )} />
                    <div>
                      <span className="block">{item.label}</span>
                      <span className={cn(
                        "text-xs opacity-75",
                        isActive ? "text-black/70" : "text-hadamard-gray"
                      )}>{item.description}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Actions rapides dans la sidebar */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-semibold text-hadamard-gray uppercase tracking-wider mb-3">
                Actions rapides
              </h3>
              <div className="space-y-2">
                <Button 
                  className="w-full btn-hadamard-primary text-sm justify-start"
                  size="sm"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Demander un cours
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-hadamard-primary text-hadamard-primary hover:bg-hadamard-primary hover:text-white text-sm justify-start shadow-hadamard"
                  size="sm"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Voir les stages
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 bg-white">
          <div className="hadamard-container py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
