import { useState } from "react";

export function Settings() {
	const [count, setCount] = useState(0);

	return (
		<div className="container p-2 bg-red-200">
			<div className="grid grid-cols-1 p-12 gap-x-6 gap-y-10 lg:grid-cols-3 ">
				<h3 className="text-xl text-white">Настройки</h3>
				<button
					className="p-4 text-white bg-orange-700 rounded-lg hover:bg-orange-900"
					onClick={() => {
						setCount(count + 1);
					}}
				>
					Нажми на меня
				</button>
				<p className="p-8 text-orange-300 bg-gray-600">Количество кликов: {count} </p>
			</div>
		</div>
	);
}