import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-center gap-3 p-4 border-b-2 border-slate-400">
      <h1 className="text-lg">QYay App</h1>
      {/* <Button variant={"link"}>All Events</Button> */}
      {/* <Button variant={"link"} disabled={true}>
        Questions
      </Button> */}
    </div>
  );
};

export default Header;
