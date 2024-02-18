import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-around p-2 border-b-2 border-slate-400">
      <Button variant={"link"}>All Events</Button>
    </div>
  );
};

export default Header;
