import React, { useState } from 'react';

const VoiceToText = ({ onVoiceInput }) => {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setListening(true);
      setTranscript('Listening...');
    };

    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
    };

    recognition.onend = () => {
      setListening(false);
      setTranscript(prevTranscript => prevTranscript + '\nRecording ended.');
      // Pass the recognized text to the parent component
      onVoiceInput(transcript);
    };

    recognition.onerror = event => {
      setTranscript('Error occurred: ' + event.error);
    };

    recognition.start();
  };

  return (
    <div>
      <button type='button' onClick={startRecording} disabled={listening}>
        {listening ? 'Listening...' : 'Start Recording'}
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceToText;
