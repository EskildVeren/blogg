import { useState } from "react";
import StartingPage from "./pages/startingPage/StartingPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ResumePage from "./pages/resume/ResumePage";
import BlogPage from "./pages/blog/BlogPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [siteState, setSiteState] = useState("blog");
  const queryClientProvider = new QueryClient();

  if (siteState === "resume") {
    return <ResumePage />;
  }
  if (siteState === "start") {
    return <StartingPage setSiteState={setSiteState} />;
  }
  if (siteState === "spin") {
    return <ProfilePage />;
  }
  if (siteState === "blog") {
    return (
      <QueryClientProvider client={queryClientProvider}>
        <BlogPage />
      </QueryClientProvider>
    );
  }
}

export default App;
