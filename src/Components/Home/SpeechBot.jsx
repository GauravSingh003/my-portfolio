import React, { useState, useEffect, useRef } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import '../../CSS/speechbot.css';

const SpeechBot = () => {
    const [transcript, setTranscript] = useState("");
    const [showButton, setShowButton] = useState(true);
    const [showVoice, setShowVoice] = useState(false);
    const recognitionRef = useRef(null);

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.volume = 1;
        utterance.pitch = 1;
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
    };

    const wishMe = () => {
        const hours = new Date().getHours();
        if (hours >= 3 && hours < 12) {
            speak("Good morning, welcome to the portfolio");
        } else if (hours >= 12 && hours < 16) {
            speak("Good afternoon, welcome to the portfolio.");
        } else {
            speak("Good evening, welcome to the portfolio.");
        }
    };

    useEffect(() => {
        if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
            alert("Speech Recognition is not supported in this browser.");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();

        recognitionRef.current.onresult = (event) => {
            const currIndex = event.resultIndex;
            const resultTranscript = event.results[currIndex][0].transcript;
            setTranscript(resultTranscript);
            takeCommand(resultTranscript.toLowerCase());
        };

        wishMe();

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const handleButtonClick = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
        setShowButton(false);
        setShowVoice(true);
    };

    const takeCommand = (message) => {
        setShowButton(true);
        setShowVoice(false);

        if (message.includes("hello") || message.includes("hi")) {
            speak("Hello, how can I help you?");
        } else if (message.includes("who are you")) {
            speak("I am rudra robo, A virtual assistant, created by Gaurav Singh.");
        } else if (message.includes("github")) {
            speak("Opening GitHub.");
            window.open("https://github.com/GauravSingh003", "_blank");
        } else if (message.includes("youtube")) {
            speak("Opening YouTube.");
            window.open("https://youtube.com/", "_blank");
        } else {
            speak(`Searching for ${message}`);
            window.open(`https://www.google.com/search?q=${message}`, "_blank");
        }
    };

    return (
        <div id="voice-main">
            <div className="img">
                <img src="/images/pics.png" alt="Assistant" />
            </div>
            <h2>
                I am <span className="astname">Rudra Robo,</span> A <span className="vt">Virtual Assistant</span>
            </h2>
            <div id="btnmain">
                {showVoice && <img src="/images/voice.gif" alt="Listening" id="voice" />}
                {showButton && (
                    <button className="flex justify-evenly items-center" id="btn" onClick={handleButtonClick}>
                        <FaHeadphones />
                        <span id="content">Talk to me</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SpeechBot;
