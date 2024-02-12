import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { AddEventDialog } from "./event/add-event-dialog";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button 
        aria-label={"Home"} 
        variant="ghost" 
        size="sm"
        onClick={handleClickHome}
      >
        <HomeIcon className="w-5 h-5" />
      </Button>
      <AddEventDialog />
    </div>
  );
};

export default Sidebar;
