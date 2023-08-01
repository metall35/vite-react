import { ShopContextProvider } from "../../Context";
import AppUi from "./index"

function App() {
    return(
        <ShopContextProvider>
            <AppUi/>
        </ShopContextProvider>
    )
}
export default App