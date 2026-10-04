function App() {
    const [inputText, setInputText] = React.useState([])
    const chatMessageRef = React.useRef(null);
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
    React.useEffect(() => {
        const containerElem = chatMessageRef.current;

        if (containerElem) {    
            containerElem.scrollTop = containerElem.scrollHeight
            console.log("scroll top "+containerElem.scrollTop)
            console.log("scroll height "+containerElem.scrollHeight)
        }

    }, [handleInputText])



    return (
        <div className="container" ref={chatMessageRef}>
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