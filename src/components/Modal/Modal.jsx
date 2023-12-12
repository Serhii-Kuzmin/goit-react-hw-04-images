import { ModalStyle, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, selectedPhoto }) => {
  useEffect(() => {
    const onEscapeCloseModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onEscapeCloseModal);

    return () => {
      window.removeEventListener('keydown', onEscapeCloseModal);
    };
  }, [onClose]);

  const onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalStyle>
        <img src={selectedPhoto} alt="preview img" />
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.string,
};
