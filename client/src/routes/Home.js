import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText"


const HomeComponent = () =>{
    return (
        <div className="h-full w-full flex">
            <div className="h-full w-1/6 bg-black">
                <div className="logoDiv p-6">
                    <img  src={spotify_logo} alt="spotifylogo" width={125}/>
                </div>
                <div>
                    <IconText iconName={"bxs:home"} displayText={"Home"}/>
                </div>
                
            </div>


            <div className="h-full">

            </div>

        </div>
    )
}

export default HomeComponent