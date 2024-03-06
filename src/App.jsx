/* eslint-disable no-unused-vars */
import { Router, BrowserRouter, Route, Link, Routes } from "react-router-dom"
import './App.css'
import LoginPage from "./Component/Login/Login"
import Index from "./Component/Index/Index"
import Form from "./Component/Form/Form"
import VoiceToText from "./Component/VoiceToText/VoiceToText"




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/index" element={<Index />} />
          <Route path="/Form" element={<Form/>} />
          <Route path="/VoiceToText" element={<VoiceToText/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
