import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../store/greetings/greetings';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!greeting.length) dispatch(getGreeting());
  }, []);

  return (
    <>
      <div className="container">
        <h1>Greetings from around the world</h1>
        <p>
          {greeting.length
            ? greeting
            : 'Getting a greeting...'}
        </p>
      </div>
    </>
  );
}

export default Greeting;
