import Nav from "../Masthead/Nav";
import ScrollToTop from "../Scroll/ScrollToTop";
import SEO from "../SEO/SEO";

const Layout = ({ children }) => {
  return (
    <main className="relative">
      <SEO />
      <Nav />
      <main>{children}</main>
      <ScrollToTop />
    </main>
  );
};

export default Layout;
