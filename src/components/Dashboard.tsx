
import React from 'react';
import { Calendar, CreditCard, Video, MapPin, Home as HomeIcon, Clock, TrendingUp, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const prochainsCours = [
    {
      id: 1,
      matiere: 'Mathématiques',
      professeur: 'Dr. Sophie Laurent',
      date: '2024-06-11',
      heure: '14:00',
      duree: '2h',
      modalite: 'visio',
      couleur: 'hadamard-blue',
      chapitre: 'Fonctions logarithmiques'
    },
    {
      id: 2,
      matiere: 'Physique',
      professeur: 'M. Pierre Dubois',
      date: '2024-06-12',
      heure: '16:30',
      duree: '1h30',
      modalite: 'presentiel',
      salle: 'Salle 204',
      couleur: 'hadamard-green',
      chapitre: 'Électromagnétisme'
    },
    {
      id: 3,
      matiere: 'Chimie',
      professeur: 'Mme. Marie Rousseau',
      date: '2024-06-13',
      heure: '10:00',
      duree: '2h',
      modalite: 'domicile',
      couleur: 'hadamard-orange',
      chapitre: 'Cinétique chimique'
    }
  ];

  const stats = {
    coursDisponibles: 24,
    creditImpot: 2850,
    prochainCours: '11 juin à 14h00',
    totalSeances: 156
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Bonjour Alexandre !</h1>
        <p className="text-muted-foreground">Voici un aperçu de vos activités récentes et à venir.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Prochain cours</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{stats.prochainCours}</div>
            <p className="text-xs text-blue-600">Mathématiques - Dr. Sophie Laurent</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Crédits disponibles</CardTitle>
            <CreditCard className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{stats.coursDisponibles}h</div>
            <p className="text-xs text-green-600">Cours particuliers</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Crédit d'impôt</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{stats.creditImpot}€</div>
            <p className="text-xs text-purple-600">Économies potentielles</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Séances effectuées</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">{stats.totalSeances}</div>
            <p className="text-xs text-orange-600">Depuis le début</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Prochains cours */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Prochains cours</span>
                </CardTitle>
                <CardDescription>Vos 3 prochaines séances à venir</CardDescription>
              </div>
              <Link to="/planning">
                <Button variant="outline" size="sm">Voir tout</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {prochainsCours.map((cours) => (
              <div key={cours.id} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <div className={`w-12 h-12 bg-${cours.couleur} rounded-lg flex items-center justify-center text-white font-semibold`}>
                  {cours.matiere.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-foreground">{cours.matiere}</h3>
                    <Badge variant="secondary" className="text-xs">{cours.duree}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cours.professeur}</p>
                  <p className="text-sm text-muted-foreground">{cours.chapitre}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                    <span>{new Date(cours.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {cours.heure}</span>
                    <div className="flex items-center space-x-1">
                      {cours.modalite === 'visio' && <Video className="w-3 h-3" />}
                      {cours.modalite === 'presentiel' && <MapPin className="w-3 h-3" />}
                      {cours.modalite === 'domicile' && <HomeIcon className="w-3 h-3" />}
                      <span>
                        {cours.modalite === 'visio' && 'Visioconférence'}
                        {cours.modalite === 'presentiel' && cours.salle}
                        {cours.modalite === 'domicile' && 'À domicile'}
                      </span>
                    </div>
                  </div>
                </div>
                {cours.modalite === 'visio' && (
                  <Button size="sm" className="bg-hadamard-blue hover:bg-hadamard-blue/90">
                    <Video className="w-4 h-4 mr-2" />
                    Rejoindre
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications et actions rapides */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Nouveau cours disponible</p>
                    <p className="text-xs text-blue-700">Physique quantique - Dr. Martin</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-green-900">Crédit d'impôt approuvé</p>
                    <p className="text-xs text-green-700">Votre demande de 1 200€ est validée</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/credit-impot" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Demander une avance
                </Button>
              </Link>
              <Link to="/planning" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver un cours
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Signaler un problème
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
