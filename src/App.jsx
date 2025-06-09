import React, { useRef, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Populer from "./components/Populer/Populer";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import OnlineClasses from "./components/OnlineClasses/OnlineClasses";
import Purpose from "./components/Purpose/Purpose";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const heroRef = useRef(null);
  const populerRef = useRef(null);
  const valueRef = useRef(null);
  const contactRef = useRef(null);
  const eventsRef = useRef(null);
  const onlineRef = useRef(null);
  const purposeRef = useRef(null);

  const sections = [
    { ref: heroRef, component: "hero" },
    { ref: populerRef, component: "populer" },
    { ref: valueRef, component: "value" },
    { ref: contactRef, component: "contact" },
    { ref: eventsRef, component: "events" },
    { ref: onlineRef, component: "online" },
    { ref: purposeRef, component: "purpose" },
  ];

  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase());

    // Scroll to first matched component
    for (let section of sections) {
      const el = section.ref.current;
      if (el && el.innerText.toLowerCase().includes(query.toLowerCase())) {
        el.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  return (
    <div className="App">
      <Header
        onSearch={handleSearch}
        onScrollToPopuler={() =>
          populerRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToValue={() =>
          valueRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToContact={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToEvents={() =>
          eventsRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToOnlineClasses={() =>
          onlineRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onScrollToPurpose={() =>
          purposeRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Footer />

      <div ref={heroRef}>
        <Hero searchTerm={searchTerm} />
      </div>
      <div ref={populerRef}>
        <Populer searchTerm={searchTerm} />
      </div>
      <div ref={valueRef}>
        <Value searchTerm={searchTerm} />
      </div>
      <div ref={eventsRef}>
        <Events searchTerm={searchTerm} />
      </div>
      <div ref={onlineRef}>
        <OnlineClasses searchTerm={searchTerm} />
      </div>
      <div ref={purposeRef}>
        <Purpose searchTerm={searchTerm} />
      </div>
      <div ref={contactRef}>
        <Contact searchTerm={searchTerm} />
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
