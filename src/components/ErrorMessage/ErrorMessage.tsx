import { Typography } from '@mui/material';

type ErrorMessage = {
    error: string | null;
};

const ErrorMessage = ({ error }: ErrorMessage) =>
    error ? (
        <Typography variant="body2" color="red" align="center">
            {error}
        </Typography>
    ) : (
        <></>
    );

export default ErrorMessage;
