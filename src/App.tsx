import React, { useRef } from 'react'
import './App.css'
import { usePostStateSelector } from './modules/posts/state/selector/Post.selector'
import { useDispatch } from 'react-redux'
import {
  getActionFindPostById,
  getActionResetPost,
} from './modules/posts/state/PostStateSlice'
import { EFetchStatus } from './core/enum/FetchStatus.enum'

function App() {
  const {
    userId,
    id,
    title,
    body,
    errorMessage,
    fetchStatus,
  } = usePostStateSelector()

  const dispatch = useDispatch()
  const inputEl = useRef(null)

  const hanleLoadPost = () => {
    const postId =
      inputEl && inputEl.current ? (inputEl.current as any).value : 0
    dispatch(getActionFindPostById({ postId }))
  }

  const hanleResetState = () => {
    dispatch(getActionResetPost())
  }

  const isButtonDisabled = fetchStatus === EFetchStatus.PENDING

  return (
    <>
      <div className="app">
        <h1>vdr-reduxtoolkit-epic-example</h1>
        <div className="app-search">
          <span>
            PostId
            <input ref={inputEl} type="number" />
          </span>
          <button onClick={hanleLoadPost} disabled={isButtonDisabled}>
            Load Post
          </button>
          <button onClick={hanleResetState} disabled={isButtonDisabled}>
            Reset state
          </button>
        </div>
        <div className="app-resultbox">
          <span>User id</span>
          <span>{userId}</span>
        </div>
        <div className="app-resultbox">
          <span>Id</span>
          <span>{id}</span>
        </div>
        <div className="app-resultbox">
          <span>Title</span>
          <span>{title}</span>
        </div>
        <div className="app-resultbox">
          <span>Body</span>
          <span>{body}</span>
        </div>
        <div className="app-resultbox">
          <span>Error message</span>
          <span>{errorMessage}</span>
        </div>
        <div className="app-resultbox">
          <span>fetchStatus</span>
          <span>{fetchStatus}</span>
        </div>
      </div>
    </>
  )
}

export default App
