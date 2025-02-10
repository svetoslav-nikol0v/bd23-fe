import { Route, Routes } from 'react-router-dom';
import Common from '../pages/Common/Common';
import { ROUTES } from '../config/constants';
import Single from '../pages/Single/Single';
import Home from '../pages/Home/Home';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const RouterApp = () => {
    return (
        <Routes>
            <Route element={<Home />} path={ROUTES.HOME} />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.PEOPLE}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.PEOPLE}/:id`}
            />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.FILMS}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.FILMS}/:id`}
            />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.VEHICLES}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.VEHICLES}/:id`}
            />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.USERS}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.USERS}/:id`}
            />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.SPECIES}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.SPECIES}/:id`}
            />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.STARSHIPS}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.STARSHIPS}/:id`}
            />
            <Route
                element={<PrivateRoute Component={Common} />}
                path={ROUTES.PLANETS}
            />
            <Route
                element={<PrivateRoute Component={Single} />}
                path={`${ROUTES.PLANETS}/:id`}
            />
        </Routes>
    );
};

export default RouterApp;
