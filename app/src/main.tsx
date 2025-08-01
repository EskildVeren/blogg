import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPage from "./pages/blog/BlogPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexPage from "./pages/index/Index.tsx";
import ResumePage from "./pages/resume/ResumePage.tsx";
import WriteBlog from "./pages/writeBlog/writeBlog.tsx";


const queryClientProvider = new QueryClient();

const router = createBrowserRouter([
  {path: "/",
    element: <IndexPage />
  },
  {path: "/blog",
    element: <BlogPage />
  },
  {path: "/about",
    element: <ResumePage />
  },
  {path: "/writeBlog",
    element: <WriteBlog />
  }
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClientProvider}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
  </StrictMode>
);
