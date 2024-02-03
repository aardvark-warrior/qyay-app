import Events from "./events";
import Header from "./header";

const Feed = () => {
  return (
    <div className="flex flex-col w-full border-x border-slate-400 md:max-w-xl">
      <Header />
      {/* <div className="flex justify-center p-4">Welcome!</div> */}
      <Events />
    </div>
  );
}

export default Feed;