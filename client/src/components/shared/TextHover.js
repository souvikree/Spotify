// import { Icon } from "@iconify/react/dist/iconify.js"


const TextHover =({displayText, active}) =>{
    return(
        <div className="flex items-center justify-start cursor-pointer ">
            {/* <div className="px-5 py-2">
                <Icon icon={iconName} color={active?"white":"gray"} fontSize={27} />
            </div> */}
            <div className={`${active?"text-white":"text-gray-400"} font-semibold hover:text-white text-lg`}>
                {displayText}
            </div>

        </div>
    )
}

export default TextHover