import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import { Toaster } from "./components/ui/toaster";
import Aside from "./components/aside";
// import { LoginDialog } from "./components/auth/login-dialog";
// import { LogoutDialog } from "./components/auth/logout-dialog";
// import { RegisterDialog } from "./components/auth/register-dialog";
import { useStore } from "./lib/store";
import { useToast } from "./components/ui/use-toast";
import { useEffect } from "react";
import {
  getAuthenticatedUserToken,
  isTokenExpired,
  removeAuthenticatedUserToken,
} from "./lib/auth";

function App() {
  // const user = useStore((state) => state.user);
  const clearUser = useStore((state) => state.clearUser);
  const { toast } = useToast();

  useEffect(() => {
    const token = getAuthenticatedUserToken();
    if (token) {
      const isExpired = isTokenExpired(token);
      if (isExpired) {
        removeAuthenticatedUserToken();
        clearUser();
        toast({
          variant: "destructive",
          title: "Session Expired",
          description: "Your session has expired. Please login again.",
        });
      }
    }
  }, []);

  return (
    <div className="flex justify-center min-h-screen gap-3">
      <Sidebar />
      <Feed />
      <Aside />
      {/* <div className="flex flex-col gap-2 p-4">
        {user ? <LogoutDialog /> : <LoginDialog />}
        {!user && <RegisterDialog />}
      </div> */}
      <Toaster />
    </div>
  );
}

export default App;
