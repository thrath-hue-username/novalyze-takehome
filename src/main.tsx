import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

// biome-ignore lint/style/noNonNullAssertion: Escaped for React initialisation
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
