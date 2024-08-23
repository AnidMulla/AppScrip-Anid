import { Products } from "@/components/home";
import styles from "./page.module.css";
import ProductsProvider from "@/contexts/ProductsDataProvider";

export default function Home() {
  return (
    <ProductsProvider>
      <main className={styles.main}>
        <Products />
      </main>
    </ProductsProvider>
  );
}
