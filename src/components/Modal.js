import {
  ModalContainer,
  SlideShowContainer,
  SlideShowItem,
} from "../styles/Modal.style";

import { useEffect } from "react";

import { ReactComponent as Close } from "../assets/close.svg";

export default function Modal({ images, showModal, closeModal }) {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (!slides.length) {
      return;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  return (
    showModal && (
      <>
        <ModalContainer>
          <button className="close-modal" onClick={closeModal}>
            <Close />
          </button>
          <SlideShowContainer
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            {images.map((image, index) => {
              return (
                <>
                  <SlideShowItem className="slide" key={index}>
                    <div className="slide-position">
                      {index + 1 + " / " + images.length}
                    </div>
                    <img src={image} alt="" />
                  </SlideShowItem>
                </>
              );
            })}
          </SlideShowContainer>
          <button
            className="slide-control"
            id="prev"
            onClick={() => plusSlides(-1)}
          >
            &#10094;
          </button>
          <button
            className="slide-control"
            id="next"
            onClick={() => plusSlides(1)}
          >
            &#10095;
          </button>
        </ModalContainer>
      </>
    )
  );
}
