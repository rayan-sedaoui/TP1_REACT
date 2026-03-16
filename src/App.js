import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Rayan', photo: '/user.jng' };

  const coursesMaison = ["Pain", "Lait", "Oeufs"];
  const coursesBricolage = ["Clous", "Marteau", "Peinture"];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Rayan" />
      <Profil utilisateur={utilisateur} taille={180} />

      <hr />
      <h3>Mon Garage :</h3>
      <Voiture marque="Renault" modele="Clio" couleur="Rouge" />
      <Voiture marque="Peugeot" modele="208" couleur="Noire" />
      <Voiture marque="Toyota" modele="Yaris" couleur="Blanche" />

      <hr />
      <h3>Courses pour la maison :</h3>
      <ListeCourses elements={coursesMaison} />

      <h3>Courses pour le bricolage :</h3>
      <ListeCourses elements={coursesBricolage} />
    </div>
  );
}

export default App;