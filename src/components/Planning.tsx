
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Video, MapPin, Home as HomeIcon, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const Planning = () => {
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filtreMatiere, setFiltreMatiere] = useState('all');

  const cours = [
    {
      id: 1,
      date: '2024-06-11',
      heure: '14:00',
      duree: 120,
      matiere: 'Mathématiques',
      professeur: 'Dr. Sophie Laurent',
      modalite: 'visio',
      prix: 80,
      chapitre: 'Fonctions logarithmiques',
      couleur: 'hadamard-blue',
      statut: 'planifie'
    },
    {
      id: 2,
      date: '2024-06-12',
      heure: '16:30',
      duree: 90,
      matiere: 'Physique',
      professeur: 'M. Pierre Dubois',
      modalite: 'presentiel',
      salle: 'Salle 204',
      prix: 60,
      chapitre: 'Électromagnétisme',
      couleur: 'hadamard-green',
      statut: 'planifie'
    },
    {
      id: 3,
      date: '2024-06-13',
      heure: '10:00',
      duree: 120,
      matiere: 'Chimie',
      professeur: 'Mme. Marie Rousseau',
      modalite: 'domicile',
      prix: 70,
      chapitre: 'Cinétique chimique',
      couleur: 'hadamard-orange',
      statut: 'planifie'
    },
    {
      id: 4,
      date: '2024-06-08',
      heure: '14:00',
      duree: 120,
      matiere: 'Mathématiques',
      professeur: 'Dr. Sophie Laurent',
      modalite: 'visio',
      prix: 80,
      chapitre: 'Dérivées',
      couleur: 'hadamard-blue',
      statut: 'termine'
    }
  ];

  const matieres = ['all', 'Mathématiques', 'Physique', 'Chimie'];

  const getWeekDays = () => {
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay() + 1); // Lundi
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const getCoursForDay = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return cours.filter(c => 
      c.date === dateStr && 
      (filtreMatiere === 'all' || c.matiere === filtreMatiere)
    );
  };

  const formatTime = (time: string) => {
    return time.slice(0, 5);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h${mins}` : `${hours}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Planning</h1>
          <p className="text-muted-foreground">Gérez vos cours et séances</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select value={filtreMatiere} onValueChange={setFiltreMatiere}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Matière" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes matières</SelectItem>
              {matieres.slice(1).map(matiere => (
                <SelectItem key={matiere} value={matiere}>{matiere}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      {/* Contrôles de vue */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'month' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('month')}
              >
                Mois
              </Button>
              <Button
                variant={viewMode === 'week' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('week')}
              >
                Semaine
              </Button>
              <Button
                variant={viewMode === 'day' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('day')}
              >
                Jour
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setDate(newDate.getDate() - 7);
                  setCurrentDate(newDate);
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <h2 className="text-lg font-semibold min-w-48 text-center">
                {viewMode === 'week' && 
                  `Semaine du ${getWeekDays()[0].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}`
                }
                {viewMode === 'month' && 
                  currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
                }
                {viewMode === 'day' && 
                  currentDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
                }
              </h2>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setDate(newDate.getDate() + 7);
                  setCurrentDate(newDate);
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vue semaine */}
      {viewMode === 'week' && (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {getWeekDays().map((day, index) => {
            const dayName = day.toLocaleDateString('fr-FR', { weekday: 'short' });
            const dayNumber = day.getDate();
            const isToday = day.toDateString() === new Date().toDateString();
            const coursOfDay = getCoursForDay(day);

            return (
              <Card key={index} className={cn("min-h-64", isToday && "ring-2 ring-primary")}>
                <CardHeader className="pb-3">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground capitalize">{dayName}</p>
                    <p className={cn(
                      "text-2xl font-bold",
                      isToday ? "text-primary" : "text-foreground"
                    )}>
                      {dayNumber}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {coursOfDay.map((cours) => (
                    <div
                      key={cours.id}
                      className={cn(
                        "p-3 rounded-lg text-white text-xs space-y-1 cursor-pointer hover:opacity-90 transition-opacity",
                        `bg-${cours.couleur}`,
                        cours.statut === 'termine' && "opacity-60"
                      )}
                    >
                      <div className="font-semibold">{cours.matiere}</div>
                      <div className="flex items-center justify-between">
                        <span>{formatTime(cours.heure)}</span>
                        <span>{formatDuration(cours.duree)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {cours.modalite === 'visio' && <Video className="w-3 h-3" />}
                        {cours.modalite === 'presentiel' && <MapPin className="w-3 h-3" />}
                        {cours.modalite === 'domicile' && <HomeIcon className="w-3 h-3" />}
                        <span className="text-xs opacity-90">
                          {cours.modalite === 'visio' && 'Visio'}
                          {cours.modalite === 'presentiel' && cours.salle}
                          {cours.modalite === 'domicile' && 'Domicile'}
                        </span>
                      </div>
                      {cours.modalite === 'visio' && cours.statut === 'planifie' && (
                        <Button size="sm" variant="secondary" className="w-full mt-2 text-xs h-6">
                          Rejoindre
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Liste détaillée pour mobile ou comme vue alternative */}
      <Card>
        <CardHeader>
          <CardTitle>Cours à venir</CardTitle>
          <CardDescription>Liste détaillée de vos prochaines séances</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {cours
            .filter(c => c.statut === 'planifie' && (filtreMatiere === 'all' || c.matiere === filtreMatiere))
            .map((cours) => (
              <div key={cours.id} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                <div className={`w-12 h-12 bg-${cours.couleur} rounded-lg flex items-center justify-center text-white font-semibold`}>
                  {cours.matiere.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-foreground">{cours.matiere}</h3>
                    <Badge variant="secondary" className="text-xs">{formatDuration(cours.duree)}</Badge>
                    <Badge variant="outline" className="text-xs">{cours.prix}€</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cours.professeur}</p>
                  <p className="text-sm text-muted-foreground">{cours.chapitre}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                    <span>{new Date(cours.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {formatTime(cours.heure)}</span>
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
                <div className="flex flex-col space-y-2">
                  {cours.modalite === 'visio' && (
                    <Button size="sm" className="bg-hadamard-blue hover:bg-hadamard-blue/90">
                      <Video className="w-4 h-4 mr-2" />
                      Rejoindre
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    Détails
                  </Button>
                </div>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Planning;
