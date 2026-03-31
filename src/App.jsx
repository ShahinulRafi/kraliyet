import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="bg-white">
      <Nav></Nav>
      <section id="home">
        <Banner></Banner>
      </section>
      <section id="products" className="max-w-7xl mx-auto">
        <Products></Products>
      </section>
      <section id="whyus">
        <WhyUs></WhyUs>
      </section>
      
      <footer id="contact">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
