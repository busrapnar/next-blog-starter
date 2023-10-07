import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span>Jonh Doe</span>
              <span>01.01.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae officiis in rem tempora veniam repellat. Rem, pariatur.
            Dolores culpa reiciendis natus incidunt vero maxime unde quas
            perferendis veritatis illo?
          </p>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae officiis in rem tempora veniam repellat. Rem, pariatur.
            Dolores culpa reiciendis natus incidunt vero maxime unde quas
            perferendis veritatis illo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            beatae officiis in rem tempora veniam repellat. Rem, pariatur.
            Dolores culpa reiciendis natus incidunt vero maxime unde quas
            perferendis veritatis illo?
          </p>
          <Comments></Comments>
            </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default SinglePage;
