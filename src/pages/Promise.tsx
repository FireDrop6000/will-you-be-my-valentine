import { Link } from "react-router-dom";

const Promise = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: "url('/assets/promise.gif')",
			}}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-green-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/promise-day.gif" width={150} height={150} />
					<p className="text-green-600 font-semibold text-2xl text-center">
						Fifth was
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						Promise Day 🤞🏻🫂
					</p>
					<p className="text-green-600 font-semibold text-2xl text-center">
						So..
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-2xl text-center"
					>
						Today I promise you that I will never in the right mind ever leave
						you or let you leave me. I will always keep you close to me and I
						will do anything to keep you happy. I will bring the whole world to
						your feet and will never make anymore mistake regarding your pizza
						delivery.
					</p>
					<Link
						to="/hug"
						className="p-5 rounded-full self-center w-40 bg-green-400 hover:bg-green-700 active:bg-green-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						I love you too baby 🫂
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Promise;
