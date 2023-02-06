import React from "react"
import Alert from "./Alert/Alert.js";
import Main from "./Main.js"
import { AlertProvider} from "./Alert/AlertContext.js";

export const AlertContext = React.createContext()

function App() {

        return (
            <AlertProvider>
                <div>
                    <Alert/>
                    <Main/>
                </div>
            </AlertProvider>
        );
    }

    export default App;