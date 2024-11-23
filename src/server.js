const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json()); // Pour analyser le corps JSON des requêtes
app.use(cors()); // Pour gérer les requêtes entre différents ports (Frontend - Backend)

// Route pour envoyer le message de contact
app.post('/api/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation simple
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  // Configurer le transporteur de mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'simorifai181@gmail.com', // Ton adresse email
      pass: 'wcys ludf jgvs kfph',   // Ton mot de passe ou mot de passe d'application
    },
  });

  // Configuration de l'email
  const mailOptions = {
    from: email,  // L'email de l'utilisateur qui a soumis le formulaire
    to: 'simorifai181@gmail.com',  // Ton adresse email
    subject: `Message de ${name}`,  // Sujet du message
    text: message,  // Corps du message
  };

  try {
    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message :', error);  // Afficher l'erreur dans la console
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message', details: error.message });
  }
});

// Servir les fichiers statiques générés par React (après le build)
app.use(express.static(path.join(__dirname, 'build')));

// Route de base pour tester le serveur
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend !');
});

// Si aucune route n'est trouvée, renvoie l'index.html de React (pour gérer les routes côté client)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Démarrer le serveur sur le port 5000
app.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000');
});
