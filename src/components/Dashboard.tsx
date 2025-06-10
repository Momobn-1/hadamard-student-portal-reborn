
import React from 'react';
import { Calendar, Clock, BookOpen, TrendingUp, Video, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* En-tête avec titre */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-hadamard-primary">Tableau de bord</h1>
        <p className="text-hadamard-gray mt-2">Bienvenue sur votre portail élève Hadamard</p>
      </div>

      {/* Widget "Prochain cours" - Priorité absolue */}
      <div className="widget-next-course border-l-4 border-hadamard-secondary">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-hadamard-secondary rounded-xl flex items-center justify-center">
              <Video className="w-6 h-6 text-hadamard-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-hadamard-primary">Prochain cours</h3>
              <p className="text-hadamard-gray">Mathématiques - Aujourd'hui à 14h00</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-hadamard-gray">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Dans 2h 15min
                </span>
                <span>Prof. Martin Dubois</span>
              </div>
            </div>
          </div>
          <Button className="btn-hadamard-primary">
            <Video className="w-4 h-4 mr-2" />
            Rejoindre maintenant
          </Button>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="widget-stats accent-primary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hadamard-gray">Cours cette semaine</p>
                <p className="text-2xl font-bold text-hadamard-primary">4</p>
              </div>
              <BookOpen className="w-8 h-8 text-hadamard-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="widget-stats accent-secondary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hadamard-gray">Heures ce mois</p>
                <p className="text-2xl font-bold text-hadamard-primary">18h</p>
              </div>
              <Clock className="w-8 h-8 text-hadamard-stages" />
            </div>
          </CardContent>
        </Card>

        <Card className="widget-stats accent-ruche">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-hadamard-gray">Progression</p>
                <p className="text-2xl font-bold text-hadamard-primary">+15%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-hadamard-ruche" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Planning de la semaine */}
      <Card className="mini-calendar">
        <CardHeader>
          <CardTitle className="text-hadamard-primary flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Planning de la semaine
          </CardTitle>
          <CardDescription>Vos prochains cours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* Cours 1 */}
            <div className="course-item cours-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-12 bg-hadamard-primary rounded-full"></div>
                  <div>
                    <p className="font-medium text-hadamard-primary">Mathématiques</p>
                    <p className="text-sm text-hadamard-gray">Aujourd'hui 14h00-15h30</p>
                    <p className="text-xs text-hadamard-gray">Prof. Martin Dubois</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-50 text-hadamard-primary px-2 py-1 rounded">Visio</span>
                </div>
              </div>
            </div>

            {/* Cours 2 */}
            <div className="course-item stages-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-12 bg-hadamard-secondary rounded-full"></div>
                  <div>
                    <p className="font-medium text-hadamard-primary">Stage Physique</p>
                    <p className="text-sm text-hadamard-gray">Demain 9h00-12h00</p>
                    <p className="text-xs text-hadamard-gray">Salle A12</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-hadamard-gray" />
                  <span className="text-xs bg-yellow-50 text-hadamard-primary px-2 py-1 rounded">Présentiel</span>
                </div>
              </div>
            </div>

            {/* Cours 3 */}
            <div className="course-item ruche-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-12 bg-hadamard-ruche rounded-full"></div>
                  <div>
                    <p className="font-medium text-hadamard-primary">Anglais - Ruche</p>
                    <p className="text-sm text-hadamard-gray">Jeudi 16h00-17h00</p>
                    <p className="text-xs text-hadamard-gray">Groupe B2</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-emerald-50 text-hadamard-primary px-2 py-1 rounded">Ruche</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button variant="outline" className="w-full btn-hadamard-secondary">
              <Calendar className="w-4 h-4 mr-2" />
              Voir le planning complet
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <Card className="hadamard-card">
        <CardHeader>
          <CardTitle className="text-hadamard-primary">Actions rapides</CardTitle>
          <CardDescription>Accès direct aux fonctionnalités principales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="btn-hadamard-primary h-auto p-4 justify-start">
              <BookOpen className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Demander un cours</div>
                <div className="text-xs opacity-75">Nouveau cours particulier</div>
              </div>
            </Button>

            <Button variant="outline" className="btn-hadamard-secondary h-auto p-4 justify-start">
              <Phone className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Contact</div>
                <div className="text-xs opacity-75">01 47 89 36 36</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
