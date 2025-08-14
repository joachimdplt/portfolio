import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Créer le dossier dist s'il n'existe pas
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Copier les assets publics
if (fs.existsSync('public/build')) {
    if (!fs.existsSync('dist/build')) {
        fs.mkdirSync('dist/build', { recursive: true });
    }
    
    // Copier le dossier build
    copyDir('public/build', 'dist/build');
}

// Copier les images
if (fs.existsSync('public/img')) {
    if (!fs.existsSync('dist/img')) {
        fs.mkdirSync('dist/img', { recursive: true });
    }
    copyDir('public/img', 'dist/img');
}

// Copier les vidéos
if (fs.existsSync('public/video')) {
    if (!fs.existsSync('dist/video')) {
        fs.mkdirSync('dist/video', { recursive: true });
    }
    copyDir('public/video', 'dist/video');
}

// Copier favicon
if (fs.existsSync('public/favicon.ico')) {
    fs.copyFileSync('public/favicon.ico', 'dist/favicon.ico');
}

// Lire le manifest pour obtenir les bons noms de fichiers
let manifest = {};
if (fs.existsSync('public/build/manifest.json')) {
    manifest = JSON.parse(fs.readFileSync('public/build/manifest.json', 'utf8'));
}

// Créer index.html statique avec les bons chemins
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joachim Duplat - Portfolio</title>
    <meta name="description" content="Full Stack Developer Portfolio - Joachim Duplat">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <script type="module" crossorigin src="/build/assets/app-DiB3h8b8.js"></script>
    <link rel="stylesheet" crossorigin href="/build/assets/app-DeDnJxOv.css">
</head>
<body>
    <div id="app"></div>
</body>
</html>`;

fs.writeFileSync('dist/index.html', indexHtml);

console.log('✅ Build statique créé dans le dossier dist/');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
