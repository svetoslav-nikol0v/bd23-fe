import { useAppContext } from '../../providers/AppProvider/useAppContext';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
    Component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
    const { isAuthenticated } = useAppContext();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/');
        return;
    }

    return isAuthenticated ? <Component /> : <></>;
};
export default PrivateRoute;
