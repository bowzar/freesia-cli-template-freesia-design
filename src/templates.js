const templates = [
    {
        name: "echo",
        loader: () => import("./components/pages/Echo"),
    },
    {
        name: "docs-intro",
        loader: () => import("./components/pages/Docs/Intro"),
    }
]

export default templates;