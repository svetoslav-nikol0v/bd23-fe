import { BrowserRouter } from 'react-router-dom';
import RouterApp from './RouterApp/RouterApp';
import AppProvider from './providers/AppProvider/AppProvider';

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
