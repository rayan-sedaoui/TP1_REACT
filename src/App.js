import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  // Changement du nom de la variable et des données
  const profilUser = { nom: 'Léa', photo: '/user.png' };

  // Nouvelles listes
  const achatsSupermarche = ["Pommes", "Pâtes", "Jus d'orange", "Fromage"];
  const achatsJardinerie = ["Terreau", "Graines de tomates", "Pelle"];

  return (
    <div style={{ padding: '20px' }}>
      <HelloWorld />
      <Greeting prenom="Rayan" />
      <Profil utilisateur={profilUser} taille={165} />

      <hr />
      <h3>🚗 Ma concession auto :</h3>
      <Voiture marque="Audi" modele="A3" couleur="Gris Nardo" />
      <Voiture marque="Ford" modele="Mustang" couleur="Jaune" />
      <Voiture marque="Fiat" modele="500" couleur="Vert menthe" />

      <hr />
      <h3>🛒 À acheter au supermarché :</h3>
      <ListeCourses elements={achatsSupermarche} />

      <h3>🌱 Liste pour le jardin :</h3>
      <ListeCourses elements={achatsJardinerie} />
    </div>
  );
}

export default App;