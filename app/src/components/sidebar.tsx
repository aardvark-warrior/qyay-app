import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { AddEventDialog } from "./event/add-event-dialog";
import { useNavigate } from "react-router-dom";

const Sidebar = ({isEventView=false}: {isEventView?: boolean}) => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button 
        aria-label={"Home"} 
        variant="outline" 
        onClick={handleClickHome}
      >
        {/* <HomeIcon className="w-5 h-5" /> */}
        Home
      </Button>
      {!isEventView && <AddEventDialog />}
    </div>
  );
};

export default Sidebar;
