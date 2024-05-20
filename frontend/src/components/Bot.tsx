import { Appbar } from "./Appbar"

export const Bot=()=> {
    return <div>
        <Appbar />
    <body className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">

	 The Ebay Bot
	<div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
		<div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-sm">Hello mate, How can i help you?</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">I wanted to know about various reselling options.</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			
			<div className="flex w-full mt-2 space-x-3 max-w-xs">
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p className="text-sm">Could you please tell the kind of the product you want to resell</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm"> It is an electronic shaving machine</p>
					</div>
					<span className="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			
			
			
			
		</div>
		
		<div className="bg-gray-300 p-4">
			<input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
		</div>
	</div>
	  

</body>
</div>
}