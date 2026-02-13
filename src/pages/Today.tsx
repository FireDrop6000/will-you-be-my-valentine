import { Link } from "react-router-dom";

const Today = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-y-auto"
			style={{
				backgroundImage: "url('/assets/That bubbly feeling.gif')",
			}}
		>
			<div className="py-5 flex justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-purple-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/14th-feb.png" width={150} height={150} />
					<p className="text-purple-600 font-semibold text-3xl text-center">
						Today is
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-7xl text-center"
					>
						Valentine's Day
					</p>
					<img src="/assets/banana-cat.gif" width={250} height={250} />
					<Link
						to="/sorry"
						className="p-2 rounded-full self-center w-40 bg-purple-400 hover:bg-purple-700 active:bg-purple-700 text-white text-3xl flex justify-center items-center font-bold"
					>
						YAY!!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Today;
