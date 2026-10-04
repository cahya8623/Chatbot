function InputText({ onSendMassage }) {
    const [chatInput, setChatInput] = React.useState("")

    function submitButton() {
        onSendMassage(chatInput)

        setChatInput("")
    }
    return (
        <div className="inputCon">
            <input size="30" value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
            <button onClick={submitButton}>Send Message</button>
        </div>
    )
}

function TextBot({ message, sender }) {

    return (
       
            <div className={sender}>
                {sender === "robot" && <img src="./asset/robot.png" width="50"></img>}
                <p>{message}</p>
                {sender === "user" && <img src="./asset/user.jfif" width="50" />}

            </div>
    )


}