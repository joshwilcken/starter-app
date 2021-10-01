import React from "react"
import { Container } from "reactstrap"
import { People } from "../components/People"

export function PeoplePage() {

    return (
        <>
            <Container className='text-center'>
                <h2 style={{marginTop: "60px"}}>List of Contacts</h2>
            </Container>
            <Container>
                <People />
            </Container>
        </>
    )
}