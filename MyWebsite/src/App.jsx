import { useState } from 'react'
import Landing from './pages/landing/landing.jsx'
import './App.css'
import Header from "./globalComponents/header.jsx";
import Home from "./pages/home/home.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Landing />
    </>
  )
}
