
import React from 'react';
import { Calendar, Video, MapPin, Home as HomeIcon, Clock, TrendingUp, Bell, BookOpen, CreditCard, ArrowRight } from 'lucide-react';
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
      type: 'cours',
      chapitre: 'Fonctions logarithmiques',
      minutesRestantes: 25
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
      type: 'cours',
      chapitre: 'Électromagnétisme'
    },
    {
      id: 3,
      matiere: 'Stage Maths Sup',
      professeur: 'Équipe Hadamard',
      date: '2024-06-15',
      heure: '09:00',
      duree: '4h',
      modalite: 'presentiel',
      type: 'stage',
      chapitre: 'Révisions intensives'
    }
  ];

  const stats = {
    coursDisponibles: 24,
    creditImpot: 2850,
    prochainCours: '11 juin à 14h00',
    totalSeances: 156
  };

  const prochainCours = prochainsCours[0];
  const peutRejoindre = prochainCours?.minutesRestantes && prochainCours.minutesRestantes < 30;

  return (
    <div className="space-y-8">
      {/* Header moderne */}
      <div className="flex flex-col space-y-3">
        <h1 className="text-4xl font-bold text-hadamard-primary">Bonjour Alexandre !</h1>
        <p className="text-hadamard-gray text-lg">Voici un aperçu de vos activités récentes et à venir.</p>
      </div>

      {/* Widget "Prochain cours" - Phase 1 priorité */}
      {peutRejoindre && (
        <Card className="hadamard-card bg-gradient-to-r from-hadamard-secondary/20 to-hadamard-secondary/10 border-hadamard-secondary">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-hadamard-secondary rounded-xl flex items-center justify-center">
                  <Video className="w-8 h-8 text-hadamard-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hadamard-primary">Votre cours commence bientôt</h3>
                  <p className="text-hadamard-gray">{prochainCours.matiere} avec {prochainCours.professeur}</p>
                  <p className="text-sm text-hadamard-primary font-semibold">Dans {prochainCours.minutesRestantes} minutes</p>
                </div>
              </div>
              <Button className="btn-hadamard-primary text-lg px-8 py-4 h-auto">
                <Video className="w-5 h-5 mr-2" />
                Rejoindre maintenant
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards modernes */}
      <div className="hadamard-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hadamard-card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-hadamard-primary">Prochain cours</CardTitle>
            <Clock className="h-5 w-5 text-hadamard-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hadamard-primary">{stats.prochainCours}</div>
            <p className="text-xs text-hadamard-gray mt-1">Mathématiques - Dr. Sophie Laurent</p>
          </CardContent>
        </Card>

        <Card className="hadamard-card bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-hadamard-primary">Crédits disponibles</CardTitle>
            <BookOpen className="h-5 w-5 text-hadamard-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hadamard-primary">{stats.coursDisponibles}h</div>
            <p className="text-xs text-hadamard-gray mt-1">Cours particuliers</p>
          </CardContent>
        </Card>

        <Card className="hadamard-card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-hadamard-primary">Crédit d'impôt</CardTitle>
            <TrendingUp className="h-5 w-5 text-hadamard-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hadamard-primary">{stats.creditImpot}€</div>
            <p className="text-xs text-hadamard-gray mt-1">Économies potentielles</p>
          </CardContent>
        </Card>

        <Card className="hadamard-card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-hadamard-primary">Séances effectuées</CardTitle>
            <Calendar className="h-5 w-5 text-hadamard-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-hadamard-primary">{stats.totalSeances}</div>
            <p className="text-xs text-hadamard-gray mt-1">Depuis le début</p>
          </CardContent>
        </Card>
      </div>

      <div className="hadamard-grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Planning de la semaine - coloré par service */}
        <Card className="hadamard-card lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2 text-hadamard-primary">
                  <Calendar className="w-5 h-5" />
                  <span>Planning de la semaine</span>
                </CardTitle>
                <CardDescription>Vos prochaines séances avec couleurs par service</CardDescription>
              </div>
              <Link to="/planning">
                <Button variant="outline" size="sm" className="btn-hadamard-secondary">
                  Voir tout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {prochainsCours.map((cours) => (
              <div key={cours.id} className="hadamard-card p-4 hover:scale-[1.02] transition-transform duration-200">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold ${
                    cours.type === 'cours' ? 'bg-hadamard-cours' : 
                    cours.type === 'stage' ? 'bg-hadamard-stages text-hadamard-primary' : 'bg-hadamard-ruche'
                  }`}>
                    {cours.matiere.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-hadamard-primary">{cours.matiere}</h3>
                      <Badge variant="secondary" className="text-xs bg-hadamard-gray-light">{cours.duree}</Badge>
                      {cours.type === 'stage' && (
                        <Badge className="bg-hadamard-stages text-hadamard-primary text-xs">Stage</Badge>
                      )}
                    </div>
                    <p className="text-sm text-hadamard-gray">{cours.professeur}</p>
                    <p className="text-sm text-hadamard-gray">{cours.chapitre}</p>
                    <div className="flex items-center space-x-4 text-xs text-hadamard-gray mt-1">
                      <span>{new Date(cours.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {cours.heure}</span>
                      <div className="flex items-center space-x-1">
                        {cours.modalite === 'visio' && <Video className="w-3 h-3" />}
                        {cours.modalite === 'presentiel' && <MapPin className="w-3 h-3" />}
                        {cours.modalite === 'domicile' && <HomeIcon className="w-3 h-3" />}
                        <span>
                          {cours.modalite === 'visio' && 'Visioconférence'}
                          {cours.modalite === 'presentiel' && (cours.salle || 'Présentiel')}
                          {cours.modalite === 'domicile' && 'À domicile'}
                        </span>
                      </div>
                    </div>
                  </div>
                  {cours.modalite === 'visio' && (
                    <Button className="btn-hadamard-primary">
                      <Video className="w-4 h-4 mr-2" />
                      Rejoindre
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actions rapides et notifications */}
        <div className="space-y-6">
          <Card className="hadamard-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-hadamard-primary">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="hadamard-card p-3 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-hadamard-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-hadamard-primary">Nouveau stage disponible</p>
                    <p className="text-xs text-hadamard-gray">Préparation Maths Sup - Juillet 2024</p>
                  </div>
                </div>
              </div>
              <div className="hadamard-card p-3 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-hadamard-primary">Crédit d'impôt approuvé</p>
                    <p className="text-xs text-hadamard-gray">Votre demande de 1 200€ est validée</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hadamard-card">
            <CardHeader>
              <CardTitle className="text-hadamard-primary">Actions rapides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/credit-impot" className="block">
                <Button className="w-full btn-hadamard-primary justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Demander une avance
                </Button>
              </Link>
              <Link to="/planning" className="block">
                <Button className="w-full btn-hadamard-secondary justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Réserver un cours
                </Button>
              </Link>
              <Button className="w-full btn-hadamard-secondary justify-start">
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
