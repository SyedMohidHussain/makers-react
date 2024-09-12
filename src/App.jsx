import ProfileEdit from "pages/profileEdit";
import Settings from "pages/settings";
function App() {
  return (
    // <div className="h-full">
    //   <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    //     <DialogContent>
    //       <DialogTitle>Select a Component</DialogTitle>
    //       <DialogDescription>
    //         Select one of the components to view
    //       </DialogDescription>
    //       <div className="flex flex-col gap-2">
    //         <Button
    //           onClick={() => {
    //             setSelectedComponent("newProjects");
    //             setIsDialogOpen(false);
    //           }}
    //         >
    //           New Projects
    //         </Button>
    //         <Button
    //           onClick={() => {
    //             setSelectedComponent("existingProjects");
    //             setIsDialogOpen(false);
    //           }}
    //         >
    //           Existing Projects
    //         </Button>
    //         <Button
    //           onClick={() => {
    //             setSelectedComponent("factoryProfile");
    //             setIsDialogOpen(false);
    //           }}
    //         >
    //           Factory Profile
    //         </Button>
    //         <Button
    //           onClick={() => {
    //             setSelectedComponent("homeProjects");
    //             setIsDialogOpen(false);
    //           }}
    //         >
    //           Home Projects
    //         </Button>
    //       </div>
    //     </DialogContent>
    //   </Dialog>

    //   {/* Render the selected component */}
    //   {renderSelectedComponent()}
    // </div>
    // <ProfileEdit />
    <Settings/>
  );
}

export default App;
