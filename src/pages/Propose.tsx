import { Link } from "react-router-dom";

const Propose = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: "url('/assets/butterflies.gif')",
			}}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-red-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src="/assets/propose.jpeg" width={250} height={250} />
					<p className="text-red-600 font-semibold text-2xl text-center">
						Second was
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						Propose Day 💍🧎‍♂️
					</p>
					<p className="text-red-600 font-semibold text-2xl text-center">
						So I wanna confess...
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						Will you be forever mine?...🫶🏻🥹❤️‍🩹
					</p>
					<Link
						to="/chocolate"
						className="p-2 rounded-full self-center w-40 bg-red-400 hover:bg-red-700 active:bg-red-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						YESS BABE!!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Propose;
