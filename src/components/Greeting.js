import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const [loading, setLoading] = useState(true);

  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <div>
          <h1>{greeting.message}</h1>
        </div>
      )}
    </div>
  );
};

export default Greeting;
