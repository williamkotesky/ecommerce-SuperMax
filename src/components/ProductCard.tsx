import styles from "./ProductCard.module.css";

interface ProductCardProps {
  productName: string;
  productPrice: number;
  productImage: string;
}

function ProductCard({
  productName,
  productPrice,
  productImage,
}: ProductCardProps) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardImageContainer}>
          <img src={productImage} alt="" />
        </div>
        <div className={styles.cardInfoContainer}>
          <p>{productName}</p>
          <p>{productPrice}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
