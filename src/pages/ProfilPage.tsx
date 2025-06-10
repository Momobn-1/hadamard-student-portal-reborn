
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Phone, MapPin, Calendar, Settings, Shield, Bell } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const ProfilPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mon profil</h1>
          <p className="text-muted-foreground">Gérez vos informations personnelles et préférences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Photo et informations principales */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Informations personnelles</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  AM
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Alexandre Martin</h3>
                  <p className="text-muted-foreground">Élève en Terminale S</p>
                </div>
                <Button variant="outline" size="sm">
                  Changer la photo
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">alexandre.martin@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">06 12 34 56 78</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Paris 15e</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Inscrit depuis janvier 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire d'édition */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Modifier mes informations</span>
              </CardTitle>
              <CardDescription>
                Mettez à jour vos informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" defaultValue="Alexandre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" defaultValue="Martin" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input id="email" type="email" defaultValue="alexandre.martin@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input id="telephone" defaultValue="06 12 34 56 78" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="niveau">Niveau scolaire</Label>
                  <Input id="niveau" defaultValue="Terminale S" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="adresse">Adresse</Label>
                <Input id="adresse" defaultValue="123 Rue de la Paix, 75015 Paris" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="etablissement">Établissement</Label>
                  <Input id="etablissement" defaultValue="Lycée Louis Pasteur" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="objectif">Objectif</Label>
                  <Input id="objectif" defaultValue="Préparation Bac S" />
                </div>
              </div>

              <Button className="w-full">
                Sauvegarder les modifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Préférences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>
                Gérez vos préférences de notification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Rappels de cours</h4>
                  <p className="text-sm text-muted-foreground">Recevoir un rappel 1h avant le cours</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Nouvelles factures</h4>
                  <p className="text-sm text-muted-foreground">Être notifié des nouvelles factures</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Crédit d'impôt</h4>
                  <p className="text-sm text-muted-foreground">Notifications sur les crédits d'impôt</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Newsletter</h4>
                  <p className="text-sm text-muted-foreground">Recevoir les actualités Hadamard</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Sécurité</span>
              </CardTitle>
              <CardDescription>
                Gérez la sécurité de votre compte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Changer le mot de passe
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                Activer l'authentification à deux facteurs
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                Voir les connexions récentes
              </Button>
              
              <Separator />
              
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                Télécharger mes données
              </Button>
              
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                Supprimer mon compte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilPage;
