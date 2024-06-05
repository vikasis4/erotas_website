const InputTag = ({ title, name, type, value, handler }: any) => {


    return (
        <div className="flex flex-col gap-2 font-poppin w-full">
            <h1>Enter your {title}</h1>
            <input
                title={title}
                name={name}
                type={type}
                value={value}
                onChange={handler}
                className="px-4 py-2 shadow-md rounded-md font-poppin font-medium"
            />
        </div>
    )
}

export default InputTag