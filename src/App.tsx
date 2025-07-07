import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-red-600 bg-red">Tutorial Shadcn Ui</h1>
      <Button variant={"destructive"} className="p-10">
        Ini Button dari shadcn ui
      </Button>
    </div>
  );
}

export default App;
