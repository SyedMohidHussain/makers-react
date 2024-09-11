import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import NewProjects from "pages/newProjects";
import ExistingProjects from "pages/existingProjects";
import FactoryProfile from "pages/profile";
import HomeProjects from "pages/homeProjects";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "newProjects":
        return <NewProjects />;
      case "existingProjects":
        return <ExistingProjects />;
      case "factoryProfile":
        return <FactoryProfile />;
      case "homeProjects":
        return <HomeProjects />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Select a Component</DialogTitle>
          <DialogDescription>
            Select one of the components to view
          </DialogDescription>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => {
                setSelectedComponent("newProjects");
                setIsDialogOpen(false);
              }}
            >
              New Projects
            </Button>
            <Button
              onClick={() => {
                setSelectedComponent("existingProjects");
                setIsDialogOpen(false);
              }}
            >
              Existing Projects
            </Button>
            <Button
              onClick={() => {
                setSelectedComponent("factoryProfile");
                setIsDialogOpen(false);
              }}
            >
              Factory Profile
            </Button>
            <Button
              onClick={() => {
                setSelectedComponent("homeProjects");
                setIsDialogOpen(false);
              }}
            >
              Home Projects
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Render the selected component */}
      {renderSelectedComponent()}
    </div>
  );
}

export default App;
