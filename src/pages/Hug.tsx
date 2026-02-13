import { Link } from "react-router-dom";

const Hug = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: "url('/assets/hug-day.gif')",
			}}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-pink-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/hug.gif" width={250} height={250} />
					<p className="text-pink-600 font-semibold text-2xl text-center">
						Sixth was
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						Hug Day 🫂💗
					</p>
					<p className="text-pink-600 font-semibold text-2xl text-center">
						Sorry for reusing the same emoji but...
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						I Hug You!!!
					</p>
					<Link
						to="/kiss"
						className="p-2 rounded-full self-center w-40 bg-pink-400 hover:bg-pink-700 active:bg-pink-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						I hug you too baby 🫂
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hug;
