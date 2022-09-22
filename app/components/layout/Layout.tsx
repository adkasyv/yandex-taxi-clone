// это наша обертка

import Head from "next/head";
import { FC, useEffect, useState } from "react";
import { FavIcon } from "../../assets/images/options/favicon.jpg";
import Script from "next/script";
import Loader from "../ui/Loader";

interface ILayout {
  title: string; //название нашей страницы
}

// FC - function component \ какие пропсы буду входить

const Layout: FC<ILayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); //делаем заргузку

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); //через 4с выключаем

    return () => {
      clearTimeout(timeout); //очищаем timeout
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title} | Yandex Taxi</title>
        <meta name="description" content="Taxi app" />
        {/* <link rel="shortcut icon" href={FavIcon.src} type="image/png" /> */}
        <link rel="shortcut icon" href={FavIcon} type="image/png" />
      </Head>

      <Script
        strategy="beforeInteractive" //подгрузка заранее
        src={`https://maps.googleapis.com/api/js?key=${process.env.MAP_KEY}&libraries=places`} //google api
      />

      <div
        style={{ maxWidth: 480 }}
        className="mx-auto relative overflow-hidden"
      >
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
};

export default Layout;
