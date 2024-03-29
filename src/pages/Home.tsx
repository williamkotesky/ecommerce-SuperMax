import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import { usePromotionContext } from "../contexts/PromotionContext";
import ProductCard from "../components/ProductCard";

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
  };

  const handleClickPrev = () => {
    sliderRef.current && sliderIndex === 0
      ? setSliderIndex(2)
      : setSliderIndex(sliderIndex - 1);
  };

  useEffect(() => {
    const isVisible = scrollToViewport();
    isVisible &&
      sliderRef.current &&
      sliderRef.current.children[sliderIndex].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });

    // if (sliderRef.current) {
    //   const rect = sliderRef.current.getBoundingClientRect();
    //   const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    //   isVisible &&
    //     sliderRef.current.children[sliderIndex].scrollIntoView({
    //       inline: "center",
    //       behavior: "smooth",
    //       block: "nearest",
    //     });
    // }
  }, [sliderIndex]);

  function scrollToViewport(): boolean {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      return isVisible;
    }
    return false;
  }

  function sliderTimerFunction() {
    const timer = setTimeout(() => {
      const isVisible = scrollToViewport();
      console.log(isVisible);
      isVisible && handleClickNext();

      // if (sliderRef.current) {
      //   const rect = sliderRef.current.getBoundingClientRect();
      //   const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      // }
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
                <img
                  src={promotionProducts[1].image}
                  alt="Imagem 1"
                  loading="lazy"
                />
              )}
            </div>
            <div className={styles.slide}>
              {promotionProducts[1] && (
                <img
                  src={promotionProducts[2].image}
                  alt="Imagem 1"
                  loading="lazy"
                />
              )}
            </div>
            <div className={styles.slide}>
              {promotionProducts[1] && (
                <img
                  src={promotionProducts[3].image}
                  alt="Imagem 1"
                  loading="lazy"
                />
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
                <span className={styles.sliderInfoOriginalPrice}>{`R$${
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
        <div className={styles.productsCardsContainer}>
          {promotionProducts[1] && (
            <ProductCard
              productName={promotionProducts[0].name}
              productPrice={promotionProducts[0].price}
              productImage={promotionProducts[0].image}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
