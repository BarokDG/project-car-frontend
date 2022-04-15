import {
  InfoModalContainer,
  InfoModalWrapper,
} from "../styles/Infomodal.style";

import CarCollage from "../assets/car-collage.png";
import { ReactComponent as Telegram } from "../assets/telegram.svg";
import { ReactComponent as Close } from "../assets/close.svg";

export default function InfoModal({ closeInfoModal }) {
  return (
    <InfoModalContainer
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeInfoModal();
        }
      }}
    >
      <button class="close-modal" onClick={() => closeInfoModal()}>
        <Close />
      </button>
      <InfoModalWrapper>
        <div className="info__content">
          <h3>መኪና ለመሸጥ</h3>
          <ol>
            <li>በሁሉም አቅጣጫ ውስጡን ጨምሮ በግልጽ የሚያሳይ ፎቶ ያንሱ</li>
            <li>
              ሁሉንም አስፈላጊ መረጃ በማያያዝ Telegram ላይ በ
              <a href="https://t.me/getzauto" target="_blank" rel="noreferrer">
                @Getzauto
              </a>
              ወይም
              <a href="https://t.me/getzauto2" target="_blank" rel="noreferrer">
                @Getzauto2
              </a>
              ይላኩልን (የሚልኩልን ዋጋ የፍተሻ ዋጋ ነዉ)
            </li>
          </ol>
          <a href="https://t.me/i102020" target="_blank" rel="noreferrer">
            Telegram Channel
            <Telegram />
          </a>
        </div>
        <div className="info__image">
          <img src={CarCollage} alt="" />
        </div>
      </InfoModalWrapper>
    </InfoModalContainer>
  );
}
