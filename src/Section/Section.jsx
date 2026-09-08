import React, { useRef } from 'react'

const Section = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      <section ref={aboutRef} style={{ minHeight: '100vh' }}>
        <h2>About Section</h2>
        <p>Some content here...</p>
      </section>

      <section ref={contactRef} style={{ minHeight: '100vh' }}>
        <h2>Contact Section</h2>
        <p>Some content here...</p>
      </section>

      <button onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>Top</button>
    </>
  )
}

export default Section