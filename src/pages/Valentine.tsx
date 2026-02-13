import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Valentine = () => {
	const moments = [
		{
			image: "/assets/valentine-1.gif",
			title: "Today is",
			subtitle: "Valentine's Day",
			text: "So...",
			subtext: "Pakhi baby? Will you be my Valentine? 🥺",
			button1: "YESS",
			button2: "NOPE",
		},

		{
			image: "/assets/valentine-2.jpeg",
			title: "Wait WHAT?!",
			subtitle: "",
			text: "You won't??! 😨",
			subtext: "",
			button1: "YES BABE! I am just joking",
			button2: "NOPE",
		},
		{
			image: "/assets/hampter.gif",
			title: "But WHY??...",
			subtitle: "",
			text: "Baby..",
			subtext: "please be my Valentine...? 🥹",
			button1: "AWW YES baby",
			button2: "NOOOH",
		},
		{
			image: "/assets/valentine-3.jpeg",
			title: "WAIIIT A MINUTE!!",
			subtitle: "",
			text: "You forget right?",
			subtext: "That I am in control? 😏",
			button1: "okay fine YESS",
			button2: "what",
		},
		{
			image: "/assets/valentine-4.jpeg",
			title: "So now what will it be",
			subtitle: "Baby? 😏",
			text: "",
			subtext: "Will you be my sweet, cute, sexy, little Valentine? 😏",
			button1: "YES YES YESS BABY!!!",
			button2: "You thought it would be NO this time lol? 2nd YES button",
		},
	];

	const [step, setStep] = useState(0);

	const next = () => {
		if (step < moments.length - 1) {
			setStep(step + 1);
		}
	};

	const current = moments[step];
	const navigate = useNavigate();
	const isLastStep = step === moments.length - 1;

	return (
		<div
			className="h-screen w-screen bg-center bg-cover bg-repeat overflow-y-auto"
			style={{
				backgroundImage: "url('/assets/kiss-day.gif')",
			}}
		>
			<div className="py-10 flex justify-center">
				<div className="w-[90vw] max-w-xl p-10 bg-white border border-pink-600 rounded-lg flex flex-col gap-4 justify-center items-center">
					<img src={current.image} width={250} height={250} />
					<p className="text-pink-600 font-semibold text-2xl text-center">
						{current.title}
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						{current.subtitle}
					</p>
					<p className="text-pink-600 font-semibold text-2xl text-center">
						{current.text}
					</p>
					<p
						style={{ fontFamily: "LucySaidOK" }}
						className="text-pink-600 font-semibold text-4xl text-center"
					>
						{current.subtext}
					</p>
					<Link
						to="/yes"
						className="p-5 rounded-full self-center w-40 bg-pink-400 hover:bg-pink-700 active:bg-pink-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						{current.button1}
					</Link>
					<div
						onClick={() => {
							if (isLastStep) {
								navigate("/yes");
							} else {
								next();
							}
						}}
						className="p-5 rounded-full self-center w-40 bg-pink-400 hover:bg-pink-700 active:bg-pink-700 text-white text-xl text-center flex justify-center items-center font-bold"
					>
						{current.button2}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Valentine;
