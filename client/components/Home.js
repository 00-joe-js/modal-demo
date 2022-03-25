import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from "./Modal";

/**
 * COMPONENT
 */
export const Home = props => {

  // const arrayOfStateStuff = useState(false);
  // const value = arrayOfStateStuff[0];
  // const setter = arrayOfStateStuff[1];

  const [showModal, setModalIsShowing] = useState(false);

  const { username } = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <button onClick={() => {
        setModalIsShowing(true);
      }}>Show Modal</button>
      {showModal && (
        <Modal onClose={() => {
          setModalIsShowing(false);
        }}>
          <div id="wordle-modal">
            <h1>Stats</h1>
            <hr />
            <div>
              <h3>Your Stats</h3>
            </div>
          </div>
        </Modal>)}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
