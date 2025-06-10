
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Video, Home as HomeIcon, Search, Filter, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const HistoriquePage = () => {
  const seancesPassees = [
    {
      id: 1,
      date: '2024-06-08',
      heure: '14:00',
      duree: 120,
      matiere: 'Mathématiques',
      professeur: 'Dr. Sophie Laurent',
      modalite: 'visio',
      prix: 80,
      chapitre: 'Dérivées et primitives',
      couleur: 'hadamard-blue',
      evaluation: 5,
      notes: 'Excellente séance, concepts bien expliqués'
    },
    {
      id: 2,
      date: '2024-06-05',
      heure: '16:30',
      duree: 90,
      matiere: 'Physique',
      professeur: 'M. Pierre Dubois',
      modalite: 'presentiel',
      salle: 'Salle 204',
      prix: 60,
      chapitre: 'Ondes mécaniques',
      couleur: 'hadamard-green',
      evaluation: 4
    },
    {
      id: 3,
      date: '2024-06-01',
      heure: '10:00',
      duree: 120,
      matiere: 'Chimie',
      professeur: 'Mme. Marie Rousseau',
      modalite: 'domicile',
      prix: 70,
      chapitre: 'Réactions acide-base',
      couleur: 'hadamard-orange',
      evaluation: 5,
      notes: 'Très bon suivi, exercices pratiques utiles'
    }
  ];

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h${mins}` : `${hours}h`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Historique</h1>
          <p className="text-muted-foreground">Consultez vos séances passées et vos évaluations</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Total séances</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">156</div>
              <p className="text-xs text-blue-600">Depuis le début</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Heures totales</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">234h</div>
              <p className="text-xs text-green-600">De cours particuliers</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-700">Note moyenne</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-900">4.7/5</div>
              <p className="text-xs text-yellow-600">Satisfaction globale</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700">Ce mois</CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">12h</div>
              <p className="text-xs text-purple-600">En juin 2024</p>
            </CardContent>
          </Card>
        </div>

        {/* Filtres */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher par matière, professeur ou chapitre..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Matière" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes matières</SelectItem>
                  <SelectItem value="mathematiques">Mathématiques</SelectItem>
                  <SelectItem value="physique">Physique</SelectItem>
                  <SelectItem value="chimie">Chimie</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Modalité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes modalités</SelectItem>
                  <SelectItem value="visio">Visioconférence</SelectItem>
                  <SelectItem value="presentiel">Présentiel</SelectItem>
                  <SelectItem value="domicile">Domicile</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Liste des séances */}
        <Card>
          <CardHeader>
            <CardTitle>Séances passées</CardTitle>
            <CardDescription>
              Historique complet de vos cours avec évaluations et notes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {seancesPassees.map((seance) => (
              <div key={seance.id} className="p-6 border rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${seance.couleur} rounded-lg flex items-center justify-center text-white font-semibold`}>
                      {seance.matiere.charAt(0)}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-lg">{seance.matiere}</h3>
                        <Badge variant="secondary">{formatDuration(seance.duree)}</Badge>
                        <Badge variant="outline">{seance.prix}€</Badge>
                      </div>
                      <p className="text-muted-foreground">{seance.professeur}</p>
                      <p className="font-medium">{seance.chapitre}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>
                          {new Date(seance.date).toLocaleDateString('fr-FR', { 
                            weekday: 'long', 
                            day: 'numeric', 
                            month: 'long' 
                          })} à {seance.heure}
                        </span>
                        <div className="flex items-center space-x-1">
                          {seance.modalite === 'visio' && <Video className="w-4 h-4" />}
                          {seance.modalite === 'presentiel' && <MapPin className="w-4 h-4" />}
                          {seance.modalite === 'domicile' && <HomeIcon className="w-4 h-4" />}
                          <span>
                            {seance.modalite === 'visio' && 'Visioconférence'}
                            {seance.modalite === 'presentiel' && seance.salle}
                            {seance.modalite === 'domicile' && 'À domicile'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="flex items-center space-x-1">
                      {renderStars(seance.evaluation)}
                    </div>
                    <p className="text-sm text-muted-foreground">{seance.evaluation}/5</p>
                  </div>
                </div>

                {seance.notes && (
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Mes notes :</p>
                    <p className="text-sm text-muted-foreground">{seance.notes}</p>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Voir les détails
                  </Button>
                  <Button variant="outline" size="sm">
                    Reprendre un cours similaire
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default HistoriquePage;
