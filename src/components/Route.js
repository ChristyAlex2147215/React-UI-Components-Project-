import UseNavigation from '../CustomHooks/UseNavigation';
import {useContext} from "react"
import {NavigationContext} from "../context/navigation"

const Route = ({path,children}) => {
    const {currentPath}=UseNavigation();
    // console.log("Route paths in the project are =>",path,children);
    console.log(path," && ",currentPath)

    if(path===currentPath)
    {
        console.log(path===currentPath)
        return children;
    }
    return null;
 
}

export default Route