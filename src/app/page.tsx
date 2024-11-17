import styles from "./page.module.css";
import NewsComponent from "@/app/components/news/NewsComponent";

export default function Home() {


  return (
      <div className="basePage">
    <div className={styles.page}>

    </div>
       <NewsComponent/>
      </div>
  );
}
