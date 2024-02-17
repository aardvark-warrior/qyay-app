import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { AddEventDialog } from "./event/add-event-dialog";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/lib/store";
import { JoinEventDialog } from "./event/join-event-dialog";

const Sidebar = ({ isEventView = false }: { isEventView?: boolean }) => {
  const user = useStore((state) => state.user);
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button aria-label={"Home"} variant="outline" onClick={handleClickHome}>
        {/* <HomeIcon className="w-5 h-5" /> */}
        Home
      </Button>
      {!isEventView && (
        <>
          {/* <AddEventDialog />  */}
          {user ? <AddEventDialog /> : <JoinEventDialog />}
        </>
      )}
    </div>
  );
};

export default Sidebar;
