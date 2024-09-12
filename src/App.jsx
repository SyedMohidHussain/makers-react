import { Button } from "@/components/ui/button";
import NewProjects from "pages/newProjects";
import ExistingProjects from "pages/existingProjects";
import FactoryProfile from "pages/profile";
import HomeProjects from "pages/homeProjects";
import BrandNavbar from "pages/brandsNavbar";
import Footer from "pages/footer";
function App() {
  return (
    <div className="h-full">
      {/* <NewProjects/> */}
      {/* <ExistingProjects /> */}
      {/* <FactoryProfile /> */}
      {/* <HomeProjects /> */}
      <BrandNavbar />
      <Footer />
    </div>
  );
}

export default App;
