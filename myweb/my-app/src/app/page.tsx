import Hero from "./components/hero/hero";
import Brand from "./components/brand/brand";
import Ceramics from "./components/ceramic/ceramics";
import Product from "./components/product/product";
import Benefit from "./components/benefit/benefit";
import Touch from "./components/touch/touch";
import ProductListing from "./productlisting/productlisting";


export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
   <ProductListing/>
   </>
  );
}


