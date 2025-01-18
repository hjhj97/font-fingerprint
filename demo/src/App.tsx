import getFingerprint from "font-fingerprint";
import { useEffect, useState } from "react";

function App() {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [components, setComponents] = useState<{ font: string[] } | null>(null);

  useEffect(() => {
    const { visitorId, components } = getFingerprint();
    setVisitorId(visitorId);
    setComponents(components);
  }, []);

  return (
    <>
      <main>
        <h1>Visitor ID: {visitorId}</h1>
        <pre>Components: {JSON.stringify(components)}</pre>
      </main>
    </>
  );
}

export default App;
