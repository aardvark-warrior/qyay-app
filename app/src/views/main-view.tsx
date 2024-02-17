import Aside from "@/components/aside";
import Feed from "@/components/feed";
import AppHeader from "@/components/app-header";
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
      <div>
        <AppHeader />
        <div className="flex justify-between min-h-screen gap-3">
          <Sidebar />
          <Feed />
          <Aside />
        </div>
      </div>
    </>
  );
};

export default MainView;
