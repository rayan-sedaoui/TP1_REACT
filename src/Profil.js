import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div>
      <img src={utilisateur.photo} alt={utilisateur.nom} width="100" />
      <p>Nom : {utilisateur.nom}</p>
      <p>Taille : {taille} cm</p>
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
  taille: 100,
};

export default Profil;