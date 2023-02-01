import { useEffect, useState } from "react";
import generator from 'generate-password'

export default function App(){
	const [password, setPassword] = useState("");
	const passwordMaker = ()=>{
		const pwd = generator.generate({
			length:14,
			lowercase:true,
			uppercase:true,
			numbers:true,
			symbols:true,
		});
		setPassword(pwd)
	}
	const remover = ()=>{
		setPassword("")
	}
	return (
		<div className='container flex justify-center mt-10'>
			<div>
				<div className="">
					<button className='bg-white border p-2 rounded hover:text-lg hover:bg-blue-400 hover:text-white'  onClick={passwordMaker}>Generate Password</button>
				</div>
				<div className="flex m-10 justify-center">
					{password}
				</div>
			</div>
		</div>
	)
}