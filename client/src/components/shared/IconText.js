import { Icon } from "@iconify/react/dist/iconify.js"


const IconText =({iconName, displayText, active}) =>{
    return(
        <div className="flex items-center justify-start">
            <div>
                <Icon icon={iconName} color="white" fontSize={30} />
            </div>
            <div className="text-white">
                {displayText}
            </div>

        </div>
    )
}

export default IconText