
import React, { useState } from 'react';
import { CreditCard, Calculator, FileText, Info, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

const CreditImpot = () => {
  const [montantSimulation, setMontantSimulation] = useState('');
  
  const donnees = {
    creditDisponible: 2850,
    creditUtilise: 1200,
    creditRestant: 1650,
    avanceEnCours: 800,
    prochainVersement: '15 juillet 2024'
  };

  const demandes = [
    {
      id: 'AV-2024-001',
      date: '2024-05-15',
      montant: 800,
      statut: 'approuve',
      dateVersement: '2024-06-15',
      type: 'Avance immédiate'
    },
    {
      id: 'AV-2024-002',
      date: '2024-04-10',
      montant: 400,
      statut: 'verse',
      dateVersement: '2024-05-10',
      type: 'Avance immédiate'
    },
    {
      id: 'CR-2023-001',
      date: '2024-01-20',
      montant: 1200,
      statut: 'verse',
      dateVersement: '2024-02-20',
      type: 'Crédit annuel'
    }
  ];

  const calculerCredit = (montant: number) => {
    return Math.min(montant * 0.5, 12000); // 50% plafonné à 12 000€
  };

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case 'verse':
        return <Badge className="bg-hadamard-green text-white"><CheckCircle className="w-3 h-3 mr-1" />Versé</Badge>;
      case 'approuve':
        return <Badge className="bg-hadamard-blue text-white"><Clock className="w-3 h-3 mr-1" />Approuvé</Badge>;
      case 'en_attente':
        return <Badge variant="outline"><Clock className="w-3 h-3 mr-1" />En attente</Badge>;
      case 'refuse':
        return <Badge className="bg-hadamard-red text-white"><AlertCircle className="w-3 h-3 mr-1" />Refusé</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const progressPourcentage = (donnees.creditUtilise / donnees.creditDisponible) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Crédit d'impôt</h1>
          <p className="text-muted-foreground">Gérez vos avantages fiscaux et demandes d'avance</p>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Crédit disponible</CardTitle>
            <CreditCard className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{donnees.creditDisponible}€</div>
            <p className="text-xs text-green-600">Pour cette année fiscale</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Crédit utilisé</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{donnees.creditUtilise}€</div>
            <div className="mt-2">
              <Progress value={progressPourcentage} className="h-2" />
              <p className="text-xs text-blue-600 mt-1">{progressPourcentage.toFixed(1)}% utilisé</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Avance en cours</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{donnees.avanceEnCours}€</div>
            <p className="text-xs text-purple-600">Versement le {donnees.prochainVersement}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simulateur */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="w-5 h-5" />
              <span>Simulateur de crédit d'impôt</span>
            </CardTitle>
            <CardDescription>
              Calculez votre économie d'impôt potentielle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="montant">Montant des cours (€)</Label>
              <Input
                id="montant"
                type="number"
                placeholder="Ex: 2000"
                value={montantSimulation}
                onChange={(e) => setMontantSimulation(e.target.value)}
              />
            </div>
            
            {montantSimulation && (
              <div className="p-4 bg-muted rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span>Montant des cours :</span>
                  <span className="font-semibold">{montantSimulation}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Crédit d'impôt (50%) :</span>
                  <span className="font-semibold text-hadamard-green">
                    {calculerCredit(Number(montantSimulation))}€
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Coût réel après crédit :</span>
                  <span className="text-hadamard-blue">
                    {Number(montantSimulation) - calculerCredit(Number(montantSimulation))}€
                  </span>
                </div>
              </div>
            )}

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Le crédit d'impôt pour les cours particuliers est de 50% des sommes versées, 
                plafonné à 12 000€ par an (soit 6 000€ de crédit maximum).
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Demande d'avance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Demander une avance</span>
            </CardTitle>
            <CardDescription>
              Recevez immédiatement 60% de votre crédit d'impôt
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-hadamard-blue/10 border border-hadamard-blue/20 rounded-lg">
              <h4 className="font-semibold text-hadamard-blue mb-2">Avance immédiate disponible</h4>
              <div className="text-2xl font-bold text-hadamard-blue mb-2">
                {Math.floor(donnees.creditRestant * 0.6)}€
              </div>
              <p className="text-sm text-muted-foreground">
                Basé sur votre crédit restant de {donnees.creditRestant}€
              </p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-hadamard-blue hover:bg-hadamard-blue/90">
                <CreditCard className="w-4 h-4 mr-2" />
                Demander l'avance immédiate
              </Button>
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                Télécharger les justificatifs
              </Button>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                L'avance immédiate est versée sous 5 jours ouvrés après validation 
                de votre dossier. Le solde sera versé après votre déclaration d'impôt.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Historique des demandes */}
      <Card>
        <CardHeader>
          <CardTitle>Historique des demandes</CardTitle>
          <CardDescription>
            Suivi de vos demandes d'avance et crédits d'impôt
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {demandes.map((demande) => (
              <div key={demande.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold">{demande.id}</span>
                    {getStatutBadge(demande.statut)}
                  </div>
                  <p className="text-sm text-muted-foreground">{demande.type}</p>
                  <p className="text-xs text-muted-foreground">
                    Demandé le {new Date(demande.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{demande.montant}€</div>
                  <p className="text-xs text-muted-foreground">
                    {demande.statut === 'verse' ? 'Versé' : 'Prévu'} le{' '}
                    {new Date(demande.dateVersement).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guide étape par étape */}
      <Card>
        <CardHeader>
          <CardTitle>Comment ça marche ?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-hadamard-blue rounded-full flex items-center justify-center text-white font-bold mx-auto">
                1
              </div>
              <h3 className="font-semibold">Payez vos cours</h3>
              <p className="text-sm text-muted-foreground">
                Réglez vos séances normalement. Nous générons automatiquement vos justificatifs.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-hadamard-green rounded-full flex items-center justify-center text-white font-bold mx-auto">
                2
              </div>
              <h3 className="font-semibold">Demandez votre avance</h3>
              <p className="text-sm text-muted-foreground">
                Recevez immédiatement 60% de votre crédit d'impôt, sans attendre la déclaration.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-hadamard-purple rounded-full flex items-center justify-center text-white font-bold mx-auto">
                3
              </div>
              <h3 className="font-semibold">Déclarez vos impôts</h3>
              <p className="text-sm text-muted-foreground">
                Le solde de votre crédit sera versé après votre déclaration annuelle.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditImpot;
