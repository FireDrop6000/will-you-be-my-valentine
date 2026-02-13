import { Link } from "react-router-dom";

const Teddy = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: "url('/assets/teddy-day.gif')",
			}}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-amber-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/teddy.gif" width={150} height={150} />
					<p className="text-amber-600 font-semibold text-2xl text-center">
						Fourth was
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						Teddy Day 🧸🎀
					</p>
					<p className="text-amber-600 font-semibold text-2xl text-center">
						And guess who the cute, little, plumpty, soft teddy bear is?...
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						You
					</p>
					<Link
						to="/promise"
						className="p-2 rounded-full self-center w-40 bg-amber-400 hover:bg-amber-700 active:bg-amber-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						Baby stop itt 🫣
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Teddy;
