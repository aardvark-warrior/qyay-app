import { useStore } from "@/lib/store";
import Events from "./event/events";
import Header from "./header";

const Feed = () => {
  const user = useStore((state) => state.user);

  return (
    <div className="flex flex-col w-full border-x-2 border-slate-400 md:max-w-xl">
      <Header />
      {user && <Events />}
    </div>
  );
};

export default Feed;
