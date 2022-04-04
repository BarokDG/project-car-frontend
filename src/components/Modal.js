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
        <button className="close-modal" onClick={closeModal}>
          &#10006;
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
                  <img
                    src={
                      "http://localhost:5000/" +
                      image.filePath.replace("\\", "/")
                    }
                    alt=""
                  />
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
  );
}
