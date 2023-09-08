# DeckFusion

*English version below*

DeckFusion est un outil de fusion d'images permettant de combiner plusieurs cartes à jouer en une seule image. Il offre également la possibilité de redimensionner les images avant leur fusion.
## 📋 Prérequis

* Node.js
* Package **sharp** de npm pour le traitement des images

## 🔧 Installation

1. **Installation de Node.js** : Assurez-vous d'avoir Node.js installé sur votre machine.

2. **Récupération du projet** : Clonez ou téléchargez ce dépôt sur votre machine.

3. **Installation des dépendances** : Dans le répertoire du projet, exécutez la commande :

 `npm install`

## 🚀 Utilisation

1. **Préparation des images** : Placez toutes vos images à fusionner dans le dossier **images**.

2. **Redimensionnement (optionnel)** : Si vous souhaitez redimensionner les images avant la fusion, modifiez les valeurs **targetWidth** et **targetHeight** dans le script principal.

3. **Exécution du script** : Lancez le script avec la commande :

`node app.js`

4. **Récupération du résultat** : L'image fusionnée sera sauvegardée sous le nom output.png.

## ⚙️ Paramètres

* **targetWidth** et **targetHeight** :
    * Ces paramètres définissent la taille de redimensionnement souhaitée pour les images sources avant fusion.
    * Si vous ne souhaitez pas redimensionner, laissez ces valeurs à **null**.

## 📜 Licence

MIT

---

# DeckFusion

*English version*

DeckFusion is an image merging tool designed to combine multiple playing cards into a single image. It also offers the ability to resize the images prior to merging.

## 📋 Prerequisites

* Node.js
* **sharp** npm package for image processing

## 🔧 Installation

1. **Node.js Installation**: Ensure you have Node.js installed on your system.

2. **Project Setup**: Clone or download this repository to your machine.

3. **Dependency Installation**: Navigate to the project directory and run the following command:

`npm install`

## 🚀 Usage

1. **Image Preparation**: Place all your images to be merged in the images folder.

2. **Resizing (optional)**: If you wish to resize the images before merging, modify the **targetWidth** and **targetHeight** values in the main script.

3. **Script Execution**: Launch the script using the command:

`node app.js`

4. **Result Retrieval**: The merged image will be saved as **output.png**.

## ⚙️ Parameters

* **targetWidth** and **targetHeight**:
    * These parameters define the desired resizing dimensions for the source images before merging.
    * If you don't wish to resize, leave these values set to **null**.


## 📜 Licence

MIT