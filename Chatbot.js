function InputText({ onSendMassage }) {
    const [chatInput, setChatInput] = React.useState("")

    function submitButton() {
        onSendMassage(chatInput)

        setChatInput("")
    }
    return (
        <div>
            <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
            <button onClick={submitButton}>Send Message</button>
        </div>
    )
}

function TextBot({ message, sender }) {
    return (
        <div>
            {sender === "robot" && <img src="./asset/robot.png" width="50"></img>}
            {message}
            {sender === "user" && <img src="./asset/user.jfif" width="50" />}

        </div>
    )

}