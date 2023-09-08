const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './images/';
const outputImg = './output.png';
const maxWidth = 1920;

// Dimensions cibles pour le redimensionnement (peut être null si aucune redimension n'est souhaitée)
// Target dimensions for resizing (can be null if no resizing is wanted)
const targetWidth = null;
const targetHeight = null;

const createFinalImage = async () => {
    // Récupération des noms de fichiers des images du dossier spécifié
    // Retrieve image filenames from the specified folder
    const imageFilenames = fs.readdirSync(inputDir).filter(file => ['.jpg', '.jpeg', '.png'].includes(path.extname(file)));

    // Convertir chaque image en buffer, éventuellement la redimensionner, puis obtenir ses métadonnées
    // Convert each image to buffer, optionally resize it, then get its metadata
    const imagesData = await Promise.all(imageFilenames.map(async (filename) => {
        let image = sharp(path.join(inputDir, filename));
        
        if (targetWidth && targetHeight) {
            image = image.resize(targetWidth, targetHeight);
        }

        const buffer = await image.toBuffer();
        const metadata = await sharp(buffer).metadata();
        return { buffer, metadata };
    }));

    let x = 0;  // Position actuelle en X (largeur) pour la prochaine image
               // Current X (width) position for the next image

    let y = 0;  // Position actuelle en Y (hauteur) pour la prochaine image
               // Current Y (height) position for the next image

    let rowHeight = 0;  // Hauteur de la ligne actuelle
                       // Height of the current row

    const compositions = [];  // Contiendra les données pour la fusion
                             // Will contain data for the merging

    for (const { buffer, metadata } of imagesData) {
        // Vérifier si l'image dépasse la largeur maximale et nécessite un retour à la ligne
        // Check if the image exceeds the max width and needs a newline
        if (x + metadata.width > maxWidth) {
            y += rowHeight;
            x = 0;
            rowHeight = 0;
        }
        
        compositions.push({ input: buffer, left: x, top: y });
        
        // Mettre à jour la position X et la hauteur de la ligne
        // Update the X position and the row height
        x += metadata.width;
        rowHeight = Math.max(rowHeight, metadata.height);
    }

    // Créer une nouvelle image et y ajouter toutes les images du tableau "compositions"
    // Create a new image and composite all the images from "compositions" array onto it
    sharp({ create: { width: maxWidth, height: y + rowHeight, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
        .composite(compositions)
        .toFile(outputImg, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Image générée: ${outputImg}`);
            }
        });
};

createFinalImage();