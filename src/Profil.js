import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div className="carte-profil">
      <img src={utilisateur.photo} alt={`Avatar de ${utilisateur.nom}`} width="120" />
      <p><strong>Identité :</strong> {utilisateur.nom}</p>
      <p><strong>Hauteur :</strong> {taille} cm</p>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 120,
};

export default Profil;