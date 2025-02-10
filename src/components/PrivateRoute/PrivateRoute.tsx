import { useAppContext } from "../../providers/AppProvider/useAppContext";

interface PrivateRouteProps {
  Component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  const { isAuthenticated } = useAppContext();

  return isAuthenticated ? <Component /> : <></>;
};
export default PrivateRoute;
