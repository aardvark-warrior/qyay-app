import Events from "./event/events";
import Header from "./header";

const Feed = () => {
  return (
    <div className="flex flex-col w-full border-x-2 border-slate-400 md:max-w-xl">
      <Header />
      <Events />
    </div>
  );
};

export default Feed;
