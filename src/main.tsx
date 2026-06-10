import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<link href="/src/style.css" rel="stylesheet"></link>;
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme appearance="dark" accentColor="gold">
        <main className="bg-app-secondary w-screen text-primary">
          <App />
        </main>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Theme>
    </QueryClientProvider>
  </StrictMode>,
);
