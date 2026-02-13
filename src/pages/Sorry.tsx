import { Link } from "react-router-dom";

const Sorry = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: "url('/assets/tulip.gif')",
			}}
		>
			<div className="absolute inset-0 flex pt-25 items-start justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-red-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/hampter.gif" width={200} height={200} />
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-2xl text-center"
					>
						I'm sorry I couldn't make the whole Valentine's Week special for
						you...please lets go through all of them today ❤️‍🩹
					</p>
					<Link
						to="/rose"
						className="p-5 rounded-full self-center w-40 bg-red-400 hover:bg-red-700 active:bg-red-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						Okay I forgive you!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sorry;
