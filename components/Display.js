
const Display = ({arr}) => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-4 m-5 text-ce">

                <div className="bg-gray-500 p-5 rounded text-center">{arr.length > 0 ? arr[0]: null}</div>
                <div className="bg-gray-500 p-5 rounded text-center">{arr.length > 0 ? arr[1]: null}</div>
                <div className="bg-gray-500 p-5 rounded text-center">{arr.length > 0 ? arr[2]: null}</div>
                <div className="bg-gray-500 p-5 rounded text-center">{arr.length > 0 ? arr[3]: null}</div>
                <div className="bg-gray-500 p-5 rounded text-center">{arr.length > 0 ? arr[4]: null}</div>


                

            </div>
        </div>
    )
}

export default Display;