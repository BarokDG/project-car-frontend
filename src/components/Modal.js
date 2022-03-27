import {
  ModalContainer,
  SlideShowContainer,
  SlideShowItem,
} from "../styles/Modal.style";

import { useEffect } from "react";

export default function Modal({ images, closeModal }) {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

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
    <>
      <ModalContainer>
        <SlideShowContainer
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          {images.map((image) => {
            return (
              <SlideShowItem className="slide">
                <img
                  src={
                    "http://localhost:5000/" + image.filePath.replace("\\", "/")
                  }
                  alt=""
                />
              </SlideShowItem>
            );
          })}
        </SlideShowContainer>
        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </ModalContainer>
    </>
  );
}
