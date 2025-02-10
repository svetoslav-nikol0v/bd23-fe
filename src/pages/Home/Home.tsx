import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import { useState } from 'react';
import { useAppContext } from '../../providers/AppProvider/useAppContext';
import { Entry } from '../../types/enum';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = () => {
    const {
        isAuthenticated,
        handleChange,
        email,
        password,
        confirmedPassword,
        login,
        register,
        error,
    } = useAppContext();

    const [entry, setEntry] = useState<Entry>(Entry.LOGIN);

    const toggleEntry = (entry: Entry) => setEntry(entry);

    const handleSubmit = () => {
        if (entry === Entry.LOGIN) {
            login();
        } else if (entry === Entry.REGISTER) {
            register();
        }
    };

    return (
        <PageLayout>
            <Typography
                variant="h4"
                color="black"
                component="div"
                align="center"
            >
                Welcome to SWAPI
            </Typography>
            {isAuthenticated ? (
                <Typography
                    variant="h6"
                    color="green"
                    component="div"
                    align="center"
                >
                    You are logged.
                </Typography>
            ) : (
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <ButtonGroup
                        fullWidth
                        size="large"
                        aria-label="Large button group"
                    >
                        <Button
                            key="one"
                            variant={
                                entry === Entry.LOGIN ? 'contained' : 'outlined'
                            }
                            onClick={() => toggleEntry(Entry.LOGIN)}
                        >
                            Login
                        </Button>
                        ,
                        <Button
                            key="two"
                            variant={
                                entry === Entry.REGISTER
                                    ? 'contained'
                                    : 'outlined'
                            }
                            onClick={() => toggleEntry(Entry.REGISTER)}
                        >
                            Register
                        </Button>
                    </ButtonGroup>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    {entry === Entry.REGISTER ? (
                        <TextField
                            id="confirmedPassword"
                            label="Confirm password"
                            variant="outlined"
                            name="confirmedPassword"
                            value={confirmedPassword}
                            onChange={handleChange}
                        />
                    ) : (
                        <></>
                    )}
                    <ErrorMessage error={error} />
                    <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            )}
        </PageLayout>
    );
};

export default Home;
