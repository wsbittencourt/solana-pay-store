import React, { useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
import Product from "../components/Product";
import HeadComponent from '../components/Head';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// Constants
const PROFILE_HANDLE = "Wagner Bittencourt";
const PROFILE_LINK = "https://wsbittencourt.github.io/";

const App = () => {

  const { publicKey } = useWallet();
  const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div className="button-container">
      <WalletMultiButton className="cta-button connect-wallet-button" />
    </div> 
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> Workshops de Dança 💃🏽</p>
          <p className="sub-text">Adquira treinamentos de Bellydance ou Fusion Bellydance, através de seus cryptos.</p>
          {isOwner && (
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Criar Produto"}
            </button>
          )}
        </header>

        <main className={publicKey && 'gallery'}>
          {creating && <CreateProduct />}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          {!publicKey && <div className='video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eV7lpOkzkww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>}
          <a
            className="footer-text"
            href={PROFILE_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img className="github-logo" src="github-mark-white.png" />
            {`construido por ${PROFILE_HANDLE}`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
