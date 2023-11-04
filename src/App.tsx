import { ThemeProvider } from "@/components/theme-provider";
// import { Toggle } from "./components/ui/toggle";
// import Home from "./pages/Home";
import ProductDiscription from "./pages/ProductDiscription";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="flex justify-center w-[100vw] h-[100vh] overflow-x-hidden">
        <section className="w-[60vw]">
          {/* <Home /> */}
          <ProductDiscription />
        </section>
      </section>
    </ThemeProvider>
  );
}

export default App;
