import React from "react";
import { Button } from "react-bootstrap";
export const Lector = ({ idioma, texto }) => {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance();

  const hablar = (idioma, texto) => {
    utterThis.lang = idioma;
    utterThis.rate = 0.8;
    utterThis.text = texto
    synth.speak(utterThis);
  };
  const stop = () => {
    synth.cancel(utterThis);
  };
  const pause = () => {
    synth.pause(utterThis);
  };
  const start = () => {
    synth.start(utterThis);
  };
  return (
    <div>
      <Button className="m-1" variant="primary" onClick={() => hablar(idioma, texto)}>
        Escuchar traducción
      </Button>
      <Button  className="m-1" onClick={stop}>Detener reproducción</Button>
      {/* <Button onClick={pause}>Pausar reproducción</Button>
      <Button onClick={start}>Reanudar reproducción</Button> */}
    </div>
  );
};
