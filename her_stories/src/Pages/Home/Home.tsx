import Banner from "../../Components/layout/Banner";
import CardContainer from "../../Components/layout/CardContainer";
import Footer from "../../Components/layout/Footer";
import NavBar from "../../Components/layout/NavBar";

export default function Home() {
  const actualDate = new Date();
  const actual =
    actualDate.getMonth().toString() +
    " - " +
    actualDate.getFullYear().toString();
  return (
    <div className="w-full h-full flex flex-col gap-8 space-y-4 justify-center items-center bg-vista-white-500">
      <NavBar />
      <div>
        <p> {actual} </p>
        <p>Some form of slogan goes </p>
      </div>
      <Banner />
      <hr />
      <CardContainer />
      <Footer />
    </div>
  );
}
