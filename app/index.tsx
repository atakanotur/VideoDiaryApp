import { Redirect } from "expo-router";

const App = () => {
    return <Redirect href={"/auth/signIn"} />;
};

export default App;