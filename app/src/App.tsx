import Sidebar from "./components/sidebar";
import Feed from "./components/feed";

function App() {
  return (
    <div className="flex justify-center min-h-screen gap-3">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
