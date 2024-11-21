import styles from "./page.module.css";
import NewsComponent from "@/app/components/news/NewsComponent";
import TrendingComponent from "@/app/components/trending/TrendingComponent";
import React from "react";

export default function Home() {


  return (
      <div>
      <TrendingComponent />
      <div className="basePage">
    <div className={styles.page}>
    </div>
       <NewsComponent/>
      </div>
        </div>
  );
}
