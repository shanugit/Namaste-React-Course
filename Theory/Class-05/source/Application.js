import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
