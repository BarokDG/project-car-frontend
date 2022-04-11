import { ModalContainer } from "../styles/Modal.style";
import styled from "styled-components";

import CarCollage from "../assets/car-collage.png";
import InfoBackground from "../assets/info-background.png";

const InfoModalContainer = styled(ModalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoModalWrapper = styled.div`
  background: var(--clr-grey-100);

  display: flex;
  max-width: 900px;
  height: 75vh;

  & .info__content {
    flex: 1 0 0;
    padding: var(--spacing-large);

    // background: url(${InfoBackground});
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .info__image {
    flex: 1 0 0;

    & img {
      display: block;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0 0;

      animation: pan-image 15s linear infinite alternate;
    }
  }

  @keyframes pan-image {
    to {
      object-position: 100% 0;
    }
  }

  // Duotone filter
  & .info__image {
    --base: #f7392b;
    --bg-blend: multiply;
    --blur: 0;
    --fg-blend: lighten;
    --foreground: #16006f;
    --opacity: 1;
    --spacing: 1%;

    background-color: var(--base);
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      background-color: var(--foreground);
      mix-blend-mode: var(--fg-blend);
      z-index: 1;
    }

    & img {
      filter: grayscale(100%) contrast(1) blur(var(--blur));
      mix-blend-mode: var(--bg-blend);
      opacity: var(--opacity);
    }
  }
`;

export default function InfoModal() {
  return (
    <InfoModalContainer>
      <InfoModalWrapper>
        <div className="info__content">
          <h3>መኪና ለመሸጥ</h3>
          <ol>
            <li>በሁሉም አቅጣጫ ውስጡን ጨምሮ በግልጽ የሚያሳይ ፎቶ ያንሱ</li>
            <li>
              ሁሉንም አስፈላጊ መረጃ በማያያዝ Telegram ላይ በ@Getzauto ወይም @Getzauto2 ይላኩልን
              (የሚልኩልን ዋጋ የፍተሻ ዋጋ ነዉ)
            </li>
          </ol>
          <p>
            Telegram ቻናላችንን እቺን በመንካታ ይቀላቀሉ 👉🏽{" "}
            <a href="https://t.me/i102020">GETZ AUTOMOTIVE</a>
          </p>
        </div>
        <div className="info__image">
          <img src={CarCollage} alt="" />
        </div>
      </InfoModalWrapper>
    </InfoModalContainer>
  );
}
