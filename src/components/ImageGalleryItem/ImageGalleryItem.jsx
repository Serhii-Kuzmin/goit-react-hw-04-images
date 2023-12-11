import {
  ImageGalleryItemStyled,
  ImageGalleryImg,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  smallUrl,
  largeImageURL,
  tags,
  onClickImageItem,
}) => (
  <ImageGalleryItemStyled
    key={id}
    onClick={() => onClickImageItem(largeImageURL)}
  >
    <ImageGalleryImg src={smallUrl} alt={tags} />
  </ImageGalleryItemStyled>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallUrl: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,

  tags: PropTypes.string.isRequired,
  onClickImageItem: PropTypes.func.isRequired,
};
