import { useState } from "react";
import { CustomComponent } from "./components";

function App() {
    const [count, setCount] = useState(0);

    return (
        <CustomComponent as="div" className="App">
            <CustomComponent as="header" className="App-header">
                <CustomComponent as="h2">Hello Vite + React!</CustomComponent>
                <CustomComponent as="p">
                    <CustomComponent
                        as="button"
                        onClick={() => setCount(count + 1)}
                    >
                        Count: {count}
                    </CustomComponent>
                </CustomComponent>
            </CustomComponent>
        </CustomComponent>
    );
}

export default App;
