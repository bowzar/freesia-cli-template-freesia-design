import Echo from "./components/pages/Echo";
import DocsIntro from "./components/pages/Docs/Intro";

const templates = [
    {
        name: "echo",
        Component: Echo,
        // loader: () => import("./components/pages/Echo"),
    },
    {
        name: "docs-intro",
        Component: DocsIntro,
        // loader: () => import("./components/pages/Docs/Intro"),
    }
]

export default templates;