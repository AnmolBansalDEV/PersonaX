import { useMemo, useState } from "react";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import PersonaContext from "@/contexts/PersonaContext";
import Personas from "@/Personas.json";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [personaSelected, setPersonaSelected] = useState(Personas[0].name);
  const memomizedPersona = useMemo(
    () => ({ personaSelected, setPersonaSelected }),
    [personaSelected]
  );
  return (
    <PersonaContext.Provider value={memomizedPersona}>
      <Component {...pageProps} />
    </PersonaContext.Provider>
  );
}
