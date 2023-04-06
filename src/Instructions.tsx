export default function InstructionsPage ():JSX.Element {

    const goHome = () => {
        window.location.href = "/";
    }

    return(
        <div className="Instructions">
            
            <h2 >
                Usage Guide
            </h2>
            <p>
                - Pressing the buttons will add or substract the displayed amount. <br />
                - The plus and minus step amounts may be customized using the buttons below them.<br />
                - The steps can also be resetted to their deafult values (1).<br />
                - The counter can be reset by pressing the "reset" button, and everything can be reset by the button  at the bottom of the page.<br />
                - You can set a custom count to start from a specific number by clicking the count.<br />
            </p>

            <button onClick={goHome}className="customizeButton">
                Back Home
            </button>
            
        </div>
    );
}