import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import { Toaster } from "./components/ui/toaster";
import { LoginDialog } from "./components/login-dialog";
import { LogoutDialog } from "./components/logout-dialog";
import { useStore } from "./lib/store";
import { RegisterDialog } from "./components/register-dialog";

function App() {
  const user = useStore((state) => state.user);
  return (
    <div className="flex justify-center min-h-screen gap-3">
      <Sidebar />
      <Feed />
      <div className="flex flex-col gap-2 p-4">
        {user ? <LogoutDialog /> : <LoginDialog />}
        {!user && <RegisterDialog />}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
