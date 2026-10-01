function App() {
    const [inputText, setInputText] = React.useState([])
    console.log(inputText)
    function handleInputText(text) {
        setInputText((input) =>
            [
                ...input,
                {
                    message: text,
                    sender: "user",
                    id: crypto.randomUUID()
                }
            ]
        )
        const response = Chatbot.getResponse(text)
        setInputText((input) =>
            [
                ...input,
                {
                    message: response,
                    sender: "robot",
                    id: crypto.randomUUID()
                }
            ]

        )

    }
    return (
        <div>
            <InputText onSendMassage={handleInputText} />
            {inputText.map((data) => {
                return (
                    <TextBot message={data.message} sender={data.sender} key={data.id} />
                )
            })}

        </div>
    )
}



const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);