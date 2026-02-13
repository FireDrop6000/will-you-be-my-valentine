import { Route, HashRouter as Router, Routes } from "react-router";
import Chocolate from "./pages/Chocolate";
import Hello from "./pages/Hello";
import Hug from "./pages/Hug";
import Kiss from "./pages/Kiss";
import Promise from "./pages/Promise";
import Propose from "./pages/Propose";
import Rose from "./pages/Rose";
import Sorry from "./pages/Sorry";
import Teddy from "./pages/Teddy";
import Today from "./pages/Today";
import Valentine from "./pages/Valentine";
import Yes from "./pages/Yes";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Hello />} />
				<Route path="/today" element={<Today />} />
				<Route path="/sorry" element={<Sorry />} />
				<Route path="/rose" element={<Rose />} />
				<Route path="/propose" element={<Propose />} />
				<Route path="/chocolate" element={<Chocolate />} />
				<Route path="/teddy" element={<Teddy />} />
				<Route path="/promise" element={<Promise />} />
				<Route path="/hug" element={<Hug />} />
				<Route path="/kiss" element={<Kiss />} />
				<Route path="/valentine" element={<Valentine />} />
				<Route path="/yes" element={<Yes />} />
			</Routes>
		</Router>
	);
}

export default App;
