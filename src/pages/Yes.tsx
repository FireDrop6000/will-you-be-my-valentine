import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Yes = () => {
	const [confetti, setConfetti] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setConfetti(false), 60000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			{confetti && (
				<Confetti
					numberOfPieces={250}
					gravity={0.15}
					colors={["#ff69b4", "#ff1493", "#ffc0cb", "#ffb6c1"]}
				/>
			)}
			<div
				className="h-screen w-screen bg-center bg-cover bg-repeat overflow-y-auto"
				style={{
					backgroundImage: "url('/assets/kiss-day.gif')",
				}}
			>
				<div className="py-10 flex justify-center">
					<div className="w-[90vw] max-w-xl p-10 bg-white border border-pink-600 rounded-lg flex flex-col gap-4 justify-center items-center">
						<img src="/assets/yes-1.gif" width={250} height={250} />
						<p className="text-pink-600 font-semibold text-2xl text-center">
							Yes? BABY?? I KNEW YOU WOULD SAY YESS!!! 😍
						</p>
						<p className="text-pink-600 font-semibold text-2xl text-center">
							THANK YOU SO MUCH BABY ❤️😘 THANK YOU FOR BEING MY VALENTINE ❤️
						</p>
						<img src="/assets/yes-2.gif" width={250} height={250} />
						<p
							style={{ fontFamily: "LucySaidOK" }}
							className="text-pink-600 font-semibold text-4xl text-center"
						>
							I Love You Baby..I Love You SOO Much 😘😘😘😘😘😘
						</p>
						<img src="/assets/yes-3.gif" width={250} height={250} />
						<p className="text-pink-600 font-semibold text-2xl text-center">
							Seriously...
						</p>
						<p
							style={{ fontFamily: "LucySaidOK" }}
							className="text-pink-600 font-semibold text-4xl text-center"
						>
							I am the luckiest man on this planet...I am so lucky to have
							you...😌
						</p>
						<p className="text-pink-600 font-semibold text-2xl text-center">
							Okay now...B-Byee baby..I love you soo much 💖💖💖
						</p>
						<img src="/assets/yes-4.gif" width={250} height={250} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Yes;
