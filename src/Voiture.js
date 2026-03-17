import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur }) {
  return (
    <p>
      🚘 <strong>Véhicule :</strong> {marque} {modele} | <em>Teinte : {couleur}</em>
    </p>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default Voiture;