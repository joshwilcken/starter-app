import React, { useEffect, useState } from 'react';
import { getHelloMessage, } from "../actions/helloAction";

function Hello() {
  const [message, setMessage] = useState("No message from server")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
    getHelloMessage().then(message => {
      if (isMounted)
        setMessage(message);
    }).catch(() => {
      if (isMounted)
        setMessage('The server did not respond so...hello from the client!');
    });
  }, [])

  useEffect(() => {

    return () => {
      setIsMounted(false);
    }
  });

  return (
    <div>{message}</div>
  );
}

export default Hello;
