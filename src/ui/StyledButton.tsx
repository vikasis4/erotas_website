const StyledButton = ({ handler, text }: any) => {
    return (
        <button
            onClick={handler}
            className="bg-red-600 text-xl w-full rounded-md shadow-lg mt-4 text-white px-4 py-2 font-poppin text-medium">
            {text}
        </button>
    )
}

export default StyledButton