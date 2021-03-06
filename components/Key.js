const Key = ({letter}) => {
    return (
        <div className="flex-1 -mx-1 justify-center">
            <div className=" w-12 ml-2 px-1 mb-2">
                <p className="block w-full h-10 rounded bg-gray-500 text-center pt-1.5 hover:bg-gray-700">{letter}</p>
            </div>
        </div>

    )
    
}

export default Key;