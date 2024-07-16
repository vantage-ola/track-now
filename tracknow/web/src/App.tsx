import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./tracknowTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLogin } from "./components/User/UserLogin";
import { UserSignUp } from "./components/User/UserSignUp";
import { Welcome } from "./components/Welcome/Welcome";
import { Home } from "./components/Home/Home";
import UserAddLaptimes from "./components/User/UserAddLaptimes";
import UserAccountSettings from "./components/User/UserAccountSettings";
import UserLaptimes from "./components/User/UserLaptimes";
import { UserProvider } from "./hooks/useUsers";

export const App = () => (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/create-user" element={<UserSignUp />} />
                <Route
                    path="/home"
                    element={
                        <UserProvider>
                            <Home />
                        </UserProvider>
                    }
                />
                <Route
                    path="/user/:username/create-moments"
                    element={
                        <UserProvider>
                            <UserAddLaptimes />
                        </UserProvider>
                    }
                />
                <Route
                    path="/user/:username/account-settings"
                    element={
                        <UserProvider>
                            <UserAccountSettings />
                        </UserProvider>
                    }
                />
                <Route
                    path="/user/:username/my-moments"
                    element={
                        <UserProvider>
                            <UserLaptimes />
                        </UserProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
);
