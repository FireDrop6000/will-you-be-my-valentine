import { Link } from "react-router-dom";

const Rose = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-y-auto"
			style={{
				backgroundImage: "url('/assets/petals.gif')",
			}}
		>
			<div className="py-5 flex justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-red-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/rose.jpeg" width={250} height={250} />
					<p className="text-red-600 font-semibold text-3xl text-center">
						First was
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-6xl text-center"
					>
						Rose Day 🌹
					</p>
					<p className="text-red-600 font-semibold text-3xl text-center">
						So here's a special rose just for you...
					</p>
					<Link
						to="/propose"
						className="p-5 rounded-full self-center w-40 bg-red-400 hover:bg-red-700 active:bg-red-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						AWW THANK YOUUU!!!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Rose;
