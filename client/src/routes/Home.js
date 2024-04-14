import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextHover from "../components/shared/TextHover";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/6 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="logoDiv p-5">
            <img src={spotify_logo} alt="spotifylogo" width={125} />
          </div>
          <div className="py-6">
            <IconText iconName={"bxs:home"} displayText={"Home"} active />
            <IconText iconName={"bx:search"} displayText={"Search"} />
            <IconText
              iconName={"fluent:library-32-filled"}
              displayText={"Library"}
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"f7:plus-app"}
              displayText={"Create Playlists"}
            />
            <IconText
              iconName={"fluent-emoji:heart-decoration"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-200 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center cursor-pointer hover:border-white">
            <Icon icon="bi:globe-americas" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-lightblack">
        <div className="navbar w-full h-1/10 app-lightblack flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-3/5 flex justify-around h-full items-center">
              <div className="flex h-full w-3/5 justify-around">
                <TextHover displayText="Premium" />
                <TextHover displayText="Support" />
              </div>
              {/* <TextHover displayText="Install" /> */}
              <div className="bg-black  text-white text-lg h-2/3 px-6  hover:scale-125 flex items-center justify-center rounded-full font-semibold">
                <Icon icon="grommet-icons:install-option" />
                <div className="ml-1 text-lg font-semibold">Install</div>
              </div>
              {/* <div className="h-1/2 border-r border-white items-center"></div> */}
            </div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <div>
                <Link to="/signup">
                  <TextHover displayText="Sign Up" />{" "}
                </Link>
              </div>
              <div className="bg-white h-2/3 px-8 flex items-center  hover:scale-125 justify-center rounded-full font-semibold">
                <Link to="/login"> Log In </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content p-10">
          <PlaylistView/>
        </div>
      </div>
    </div>
  );
};

const PlaylistView = () =>{
   return <div className="text-white">
    <div className="text-2xl font-semibold mb-5">Focus</div>
    <div className="w-full font-semibold flex justify-between ">
      <Card
        title= "Naruto"
        description= "All the songs you know from Naruto and Naruto Shippuden."
      />
      <Card
        title= "Naruto"
        description= "All the songs you know from Naruto and Naruto Shippuden."
      />
      <Card
        title= "Naruto"
        description= "All the songs you know from Naruto and Naruto Shippuden."
      />
      <Card
        title= "Naruto"
        description= "All the songs you know from Naruto and Naruto Shippuden."
      />
      <Card
        title= "Naruto"
        description= "All the songs you know from Naruto and Naruto Shippuden."
      />
    </div>
   </div>
}

const Card = ({title, description}) =>{
  return(
    <div className="bg-black bg-opacity-60 rounded-lg w-1/6 p-4">
      <div className="pb-4 pt-2">
        <img 
          className="w-full rounded-md" 
          src="https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg"
          alt="label"
          />
        
      </div>
      <div className="text-white text-sm">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  )
}

export default HomeComponent;
