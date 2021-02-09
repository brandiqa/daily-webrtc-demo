import React from "react"
import Header from "../components/Header"
import DailyIframe from "@daily-co/daily-js"

const Chat = () => {
  let callFrame = DailyIframe.wrap(MY_IFRAME)
  return (
    <React.Fragment>
      <Header title="Chat" />
      <main>
        <p>Chat Interface</p>
      </main>
    </React.Fragment>
  )
}

export default Chat
