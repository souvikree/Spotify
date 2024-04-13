const PasswordInput = ({label, placeholder}) =>{
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-bold">Password</label>
            <input 
                type="password" 
                placeholder={placeholder}
                className="p-2 border border-gray-500 border-solid rounded placeholder-gray-500"
                id={label}

            />
        </div>
    )
}

export default PasswordInput;