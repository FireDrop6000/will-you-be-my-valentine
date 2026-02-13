import { Link } from "react-router-dom";

const Chocolate = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover overflow-y-auto"
			style={{
				backgroundImage: "url('/assets/chocolate.gif')",
			}}
		>
			<div className="py-5 flex justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-amber-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/chocolate-box.gif" width={250} height={250} />
					<p className="text-amber-600 font-semibold text-2xl text-center">
						Third was
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						Chocolate Day 🍫🤎
					</p>
					<p className="text-amber-600 font-semibold text-2xl text-center">
						So I owe you another sweet sweet chocolate..as sweet as
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						You
					</p>
					<Link
						to="/teddy"
						className="p-2 rounded-full self-center w-40 bg-amber-400 hover:bg-amber-700 active:bg-amber-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						I am blushing 😳
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Chocolate;
