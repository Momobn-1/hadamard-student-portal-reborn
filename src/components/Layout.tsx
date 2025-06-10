
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
    <div className="min-h-screen bg-hadamard-white">
      {/* Header Moderne - Bleu foncé avec accents jaunes */}
      <header className="bg-hadamard-primary shadow-hadamard border-b border-hadamard-primary/20">
        <div className="hadamard-container">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-hadamard-secondary rounded-xl flex items-center justify-center shadow-hadamard">
                  <span className="text-hadamard-primary font-bold text-lg">H</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-hadamard-white">Hadamard</span>
                  <span className="text-sm text-hadamard-secondary block leading-none">Portail Élève</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-hadamard-white/10 border-hadamard-secondary text-hadamard-white hover:bg-hadamard-secondary hover:text-hadamard-primary transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">01 47 89 36 36</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-hadamard-secondary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-hadamard-primary" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-sm font-semibold text-hadamard-white block">Alexandre Martin</span>
                  <span className="text-xs text-hadamard-secondary">Élève</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Moderne avec sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-hadamard-primary min-h-screen shadow-hadamard-hover">
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
                      "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                      isActive
                        ? "bg-hadamard-secondary text-hadamard-primary shadow-hadamard"
                        : "text-hadamard-white hover:bg-hadamard-white/10 hover:text-hadamard-secondary"
                    )}
                  >
                    <Icon className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isActive ? "text-hadamard-primary" : "text-hadamard-secondary group-hover:scale-110"
                    )} />
                    <div>
                      <span className="block">{item.label}</span>
                      <span className={cn(
                        "text-xs opacity-75",
                        isActive ? "text-hadamard-primary/70" : "text-hadamard-white/60"
                      )}>{item.description}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Actions rapides dans la sidebar */}
            <div className="mt-8 pt-6 border-t border-hadamard-white/20">
              <h3 className="text-xs font-semibold text-hadamard-secondary uppercase tracking-wider mb-3">
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
                  className="w-full bg-hadamard-white/10 border-hadamard-white/20 text-hadamard-white hover:bg-hadamard-white/20 text-sm justify-start"
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
        <main className="flex-1 bg-hadamard-white">
          <div className="hadamard-container py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
