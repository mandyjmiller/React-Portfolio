import React, { useState } from 'react';
import API from '../utils/API';
import Card from '../components/Card';
import Alert from '../components/Alert';

function Discover() {
  const [state, setState] = useState({
    image: '',
    match: false,
    matchCount: 0,
    showDog: false,
  });

  const loadNextDog = () => {
    API.getRandomDog()
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          image: res.data.message,
          showDog: true,
        }));
      })
      .catch((err) => console.log(err));
  };

  const handleBtnClick = (event) => {
    const btnType = event.target.getAttribute('data-value');
    const newState = { ...state };

    if (btnType === 'pick') {
      newState.match = Math.floor(Math.random() * 5) + 1 === 1;
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      newState.match = false;
    }

    setState(newState);
    loadNextDog();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="mt-5">Make New Friends</h1>
      <h3>Thumbs up on any pups you'd like to meet!</h3>
      {state.showDog ? (
        <>
          <Card image={state.image} handleBtnClick={handleBtnClick} />
          <h1>Made friends with {state.matchCount} pups so far!</h1>
          <Alert style={{ opacity: state.match ? 1 : 0 }} type="success">
            Yay! That Pup Liked You Too!!!
          </Alert>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-secondary btn-lg mt-5"
          /* Clicking the button will display the dog card deck */
          onClick={loadNextDog}
        >
          Click To Start
        </button>
      )}
    </div>
  );
}

export default Discover;
