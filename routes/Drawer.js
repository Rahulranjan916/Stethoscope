import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import homeStack from "./homeStack";

const RootDrawNavigator = createDrawerNavigator({
    screen:{
        screen:homeStack,
    },
});

export default createAppContainer(RootDrawNavigator);