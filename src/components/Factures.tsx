
import React, { useState } from 'react';
import { FileText, Download, Eye, Filter, Search, Calendar, Euro } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Factures = () => {
  const [filtreStatut, setFiltreStatut] = useState('all');
  const [recherche, setRecherche] = useState('');

  const factures = [
    {
      id: 'FAC-2024-001',
      date: '2024-06-01',
      montant: 320,
      statut: 'payee',
      echeance: '2024-06-15',
      services: 'Mathématiques - 4 séances',
      professeur: 'Dr. Sophie Laurent',
      periode: 'Mai 2024'
    },
    {
      id: 'FAC-2024-002',
      date: '2024-06-05',
      montant: 240,
      statut: 'en_attente',
      echeance: '2024-06-20',
      services: 'Physique - 3 séances',
      professeur: 'M. Pierre Dubois',
      periode: 'Juin 2024'
    },
    {
      id: 'FAC-2024-003',
      date: '2024-05-28',
      montant: 450,
      statut: 'en_retard',
      echeance: '2024-06-10',
      services: 'Stage intensif Chimie',
      professeur: 'Mme. Marie Rousseau',
      periode: 'Mai 2024'
    },
    {
      id: 'FAC-2024-004',
      date: '2024-05-15',
      montant: 160,
      statut: 'payee',
      echeance: '2024-05-30',
      services: 'Mathématiques - 2 séances',
      professeur: 'Dr. Sophie Laurent',
      periode: 'Mai 2024'
    }
  ];

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case 'payee':
        return <Badge className="bg-hadamard-green text-white">Payée</Badge>;
      case 'en_attente':
        return <Badge variant="outline">En attente</Badge>;
      case 'en_retard':
        return <Badge className="bg-hadamard-red text-white">En retard</Badge>;
      default:
        return <Badge variant="secondary">{statut}</Badge>;
    }
  };

  const facturesFiltrees = factures.filter(facture => {
    const matchStatut = filtreStatut === 'all' || facture.statut === filtreStatut;
    const matchRecherche = recherche === '' || 
      facture.id.toLowerCase().includes(recherche.toLowerCase()) ||
      facture.services.toLowerCase().includes(recherche.toLowerCase()) ||
      facture.professeur.toLowerCase().includes(recherche.toLowerCase());
    
    return matchStatut && matchRecherche;
  });

  const totalMontant = facturesFiltrees.reduce((sum, facture) => sum + facture.montant, 0);
  const facturesEnAttente = factures.filter(f => f.statut === 'en_attente').length;
  const facturesEnRetard = factures.filter(f => f.statut === 'en_retard').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Factures</h1>
          <p className="text-muted-foreground">Gérez vos factures et paiements</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total facturé</CardTitle>
            <Euro className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{totalMontant}€</div>
            <p className="text-xs text-blue-600">Période affichée</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">En attente</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">{facturesEnAttente}</div>
            <p className="text-xs text-orange-600">Factures à payer</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-700">En retard</CardTitle>
            <FileText className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900">{facturesEnRetard}</div>
            <p className="text-xs text-red-600">Paiements urgents</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Payées</CardTitle>
            <FileText className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{factures.filter(f => f.statut === 'payee').length}</div>
            <p className="text-xs text-green-600">Cette année</p>
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
                  placeholder="Rechercher par numéro, service ou professeur..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filtreStatut} onValueChange={setFiltreStatut}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="payee">Payées</SelectItem>
                <SelectItem value="en_attente">En attente</SelectItem>
                <SelectItem value="en_retard">En retard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table des factures */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des factures</CardTitle>
          <CardDescription>
            {facturesFiltrees.length} facture(s) trouvée(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>N° Facture</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Services</TableHead>
                <TableHead>Professeur</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Échéance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facturesFiltrees.map((facture) => (
                <TableRow key={facture.id}>
                  <TableCell className="font-medium">{facture.id}</TableCell>
                  <TableCell>
                    {new Date(facture.date).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{facture.services}</div>
                      <div className="text-sm text-muted-foreground">{facture.periode}</div>
                    </div>
                  </TableCell>
                  <TableCell>{facture.professeur}</TableCell>
                  <TableCell className="font-semibold">{facture.montant}€</TableCell>
                  <TableCell>{getStatutBadge(facture.statut)}</TableCell>
                  <TableCell>
                    {new Date(facture.echeance).toLocaleDateString('fr-FR')}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Voir
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Télécharger toutes les factures
            </Button>
            <Button variant="outline" className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Demander un récapitulatif
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Programmer un paiement
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Factures;
