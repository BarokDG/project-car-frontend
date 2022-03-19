import {
  ModalContainer,
  SlideShowContainer,
  SlideShowItem,
} from "../styles/Modal.style";

import { useEffect } from "react";

export default function Modal({ closeModal }) {
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
          <SlideShowItem className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2021/10/29/12/25/toyota-gr-yaris-6751755_960_720.jpg"
              alt=""
            />
          </SlideShowItem>
          <SlideShowItem className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_960_720.jpg"
              alt=""
            />
          </SlideShowItem>
          <SlideShowItem className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2019/06/29/09/51/suzuki-sx4-4305877_960_720.jpg"
              alt=""
            />
          </SlideShowItem>
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
