import Aside from "@/components/aside";
import Feed from "@/components/feed";
import Sidebar from "@/components/sidebar";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

const MainView = () => {
  const clearSelectedEventId = useStore((state) => state.clearSelectedEventId);

  useEffect(() => {
    clearSelectedEventId();
  }, []);
  
  return (
    <>
      <Sidebar />
      <Feed />
      <Aside />
    </>
  );
};

export default MainView;
