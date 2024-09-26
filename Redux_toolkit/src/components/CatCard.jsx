import PropTypes from 'prop-types';

export default function CatCard({
  imgSrc,
  title = 'Card title',
  text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  buttonText = 'Go somewhere',
  buttonLink = '#',
}) {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}

CatCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};