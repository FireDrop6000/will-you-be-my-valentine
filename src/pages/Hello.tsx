import { Link } from "react-router";

const Hello = () => {
	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-no-repeat"
			style={{ backgroundImage: "url('/assets/Pink Bg Gif.gif')" }}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-pink-600 rounded-lg flex flex-col gap-4 justify-center">
					<p className="text-pink-600 font-semibold text-4xl text-center">
						Hiiiii my BABYYYY🎀!!
					</p>
					<img src="/assets/besito-catlove.gif" />
					<Link
						to="/today"
						className="p-2 rounded-full self-center w-40 bg-pink-400 hover:bg-pink-700 active:bg-pink-700 text-white text-3xl flex justify-center items-center font-bold"
					>
						Hello!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hello;
