import { Layout } from "./Layouts/Layout";
import { Banner } from "./HomeComponen/Banner";
import { Produk } from "./HomeComponen/Produk";
import { Type } from "./HomeComponen/Type";
import { Result } from "./HomeComponen/Result";
import { About } from "./HomeComponen/About";
import { Visi_Misi } from "./HomeComponen/Visi_Misi";
import { useState } from "react";

export default function Home() {
  const [toastOpen, setToastOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);
  return (
    <Layout>
      <section id="home">
        <Banner />
      </section>

      <section id="result">
        <Result />
      </section>

      <section id="produk">
        <Produk />
      </section>

      <section id="type">
        <Type />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="visi-misi">
        <Visi_Misi />
      </section>
    </Layout>
  );
}
