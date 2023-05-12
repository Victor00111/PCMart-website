import React from "react";
import Signin from "../firebase_setup/Signin";
import { Container } from "react-bootstrap";
import AuthDetails from "../firebase_setup/AuthDetails";

export function SigninPage(): JSX.Element {
    return (
        <Container
            className="d-flex align-items-center  justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signin></Signin>
                <AuthDetails></AuthDetails>
            </div>
        </Container>
    );
}

export default SigninPage;
