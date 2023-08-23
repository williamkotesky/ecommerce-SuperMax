import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import { usePromotionContext } from "../contexts/PromotionContext";

function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { promotionProducts } = usePromotionContext();
  const [sliderIndex, setSliderIndex] = useState(0);
  const [slidertimer, setSliderTimer] =
    useState<ReturnType<typeof setTimeout>>();

  const handleClickNext = () => {
    sliderRef.current && sliderIndex === 2
      ? setSliderIndex(0)
      : setSliderIndex(sliderIndex + 1);
    console.log("right, o anterior é " + sliderIndex);
  };

  const handleClickPrev = () => {
    sliderRef.current && sliderIndex === 0
      ? setSliderIndex(2)
      : setSliderIndex(sliderIndex - 1);
    console.log("left, o anterior é " + sliderIndex);
  };

  useEffect(() => {
    sliderRef.current &&
      sliderRef.current.children[sliderIndex].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
  }, [sliderIndex]);

  function sliderTimerFunction() {
    const timer = setTimeout(() => {
      handleClickNext();
    }, 10000);
    setSliderTimer(timer);
  }

  useEffect(() => {
    slidertimer && clearTimeout(slidertimer);
    sliderTimerFunction();
    return () => {
      slidertimer && clearTimeout(slidertimer);
    };
    //eslint-disable-next-line
  }, [sliderIndex]);

  return (
    <>
      <section id={styles.homeSection}>
        <h2 className={styles.homeTitle}>Promoções da semana!</h2>

        <div className={styles.sliderContainer}>
          <div ref={sliderRef} className={styles.slider}>
            <div className={styles.slide}>
              {promotionProducts[1] && (
                <img src={promotionProducts[1].image} alt="Imagem 1" />
              )}
            </div>
            <div className={styles.slide}>
              {promotionProducts[1] && (
                <img src={promotionProducts[2].image} alt="Imagem 1" />
              )}
            </div>
            <div className={styles.slide}>
              {promotionProducts[1] && (
                <img src={promotionProducts[3].image} alt="Imagem 1" />
              )}
            </div>
          </div>
          <FontAwesomeIcon
            className={styles.prev}
            icon={faChevronLeft}
            onClick={handleClickPrev}
          />
          <FontAwesomeIcon
            className={styles.next}
            icon={faChevronRight}
            onClick={handleClickNext}
          />
          <div className={styles.sliderInfoContainer}>
            {promotionProducts[1] && (
              <div className={styles.sliderInfo}>
                <span className={styles.sliderInfoName}>{`${
                  promotionProducts[sliderIndex + 1].name
                } ${promotionProducts[sliderIndex + 1].brand}`}</span>
                <span className={styles.sliderInfoOriginalPrice}>{` R$${
                  promotionProducts[sliderIndex + 1].price
                }`}</span>
                <span className={styles.sliderInfoPromotionalPrice}>{` R$${(
                  promotionProducts[sliderIndex + 1].price * 0.8
                ).toFixed(2)}`}</span>
                <span className={styles.sliderInfoPromotionalText}>
                  -20% OFF!
                </span>
              </div>
            )}
          </div>
        </div>

        <h2 className={styles.homeTitle}>Setor alimentício</h2>
      </section>
    </>
  );
}

export default Home;
