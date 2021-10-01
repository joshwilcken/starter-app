import React, { useEffect, useState } from "react"
import { getData } from "../actions/helloAction"
import { PersonCard } from "../components/PersonCard"

export function People() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const peopleData = getData()
        setData(peopleData)
    }, [])

    return (
        <>

            {data === null
                ?
                <div>Loading...</div>
                :
                <div className="card-list">
                    {
                        data.map((person, index) => (
                            <PersonCard
                                key={`${person.last_name}-${index}`}
                                person={person} />
                        ))
                    }
                </div>

            }
        </>
    )
}