import { useState } from 'react'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PersonaContext from '@/components/PersonaContext'
import Personas from "@/Personas.json"
config.autoAddCss = false


export default function App({ Component, pageProps }) {
  const [personaSelected, setPersonaSelected] = useState(Personas[0].name)
  return (
   <PersonaContext.Provider value={{personaSelected, setPersonaSelected}}>
    <Component {...pageProps} />
  </PersonaContext.Provider>
  )
}
