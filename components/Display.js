
const Display = ({arr, round}) => {
    return (
        <div>

            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-4 m-5 text-ce">

                    <div className="bg-gray-500 p-5 rounded text-center">{round == 1 ? arr[0]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 1 ? arr[1]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 1 ? arr[2]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 1 ? arr[3]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 1 ? arr[4]: null}</div>

                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-4 m-5 text-ce">

                    <div className="bg-gray-500 p-5 rounded text-center">{round == 2 ? arr[0]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 2 ? arr[1]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 2 ? arr[2]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 2 ? arr[3]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 2 ? arr[4]: null}</div>

                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-4 m-5 text-ce">

                    <div className="bg-gray-500 p-5 rounded text-center">{round == 3 ? arr[0]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 3 ? arr[1]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 3 ? arr[2]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 3 ? arr[3]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 3 ? arr[4]: null}</div>

                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-4 m-5 text-ce">

                    <div className="bg-gray-500 p-5 rounded text-center">{round == 4 ? arr[0]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 4 ? arr[1]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 4 ? arr[2]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 4 ? arr[3]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 4 ? arr[4]: null}</div>

                </div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-4 m-5 text-ce">

                    <div className="bg-gray-500 p-5 rounded text-center">{round == 5 ? arr[0]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 5 ? arr[1]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 5 ? arr[2]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 5 ? arr[3]: null}</div>
                    <div className="bg-gray-500 p-5 rounded text-center">{round == 5 ? arr[4]: null}</div>

                </div>
            </div>

        </div>
    )
}

export default Display;