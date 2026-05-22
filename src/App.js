import React, { useState } from 'react';

// Navbar Component
function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ 
      backgroundColor: '#1a202c', 
      padding: '1rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      position: 'fixed', 
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>Bella Vita</div>
      <div style={{ display: 'flex', gap: '25px' }}>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer' }}>Home</a>
        <a href="#menu" onClick={(e) => handleScroll(e, 'menu')} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer' }}>Menu</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer' }}>Contact</a>
      </div>
    </nav>
  );
}

// Main Content Component
function MainContent() {
  // State to manage the contact form
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    setName('');
    setMessage('');
  };

  return (
    <div style={{ 
      padding: '7rem 2rem 2rem 2rem', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'sans-serif', 
      width: '100%', 
      boxSizing: 'border-box' 
    }}>
      
      {/* HOME SECTION */}
      
{/* HOME SECTION */}
      <section id="home" style={{ minHeight: '60vh', paddingTop: '120px', paddingBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
        <h2 style={{ color: '#1a202c', fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', fontFamily: 'sans-serif' }}>
          Welcome to Bella Vita
        </h2>
        <p style={{ color: '#4a5568', fontSize: '1.15rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '30px', fontFamily: 'sans-serif' }}>
          Bella Vita started as a family business, with the simple goal of offering warm hospitality and 
          authentic flavors. Every dish is prepared with passion and fresh ingredients to provide you with 
          an unforgettable dining experience.
        </p>
        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ backgroundColor: '#dd6b20', color: '#fff', border: 'none', padding: '12px 24px', fontSize: '1rem', fontWeight: '600', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: '0.3s' }}
        >
          Explore Menu
        </button>
      </section>
      {/* MENU SECTION */}
      
{/* MENU SECTION */}
      <DynamicMenu />
      {/* CONTACT SECTION */}
      <section id="contact" style={{ paddingTop: '2rem', minHeight: '80vh' }}>
        <h1 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', fontSize: '2.2rem' }}>Contact Us</h1>
        <p style={{ color: '#718096', fontStyle: 'italic', marginBottom: '2rem' }}>Come visit us or send us a message for reservations.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Contact Information */}
          <div style={{ padding: '1.5rem', backgroundColor: '#edf2f7', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, color: '#2d3748' }}>Information</h3>
            <p style={{ color: '#4a5568', margin: '0.5rem 0' }}>📍 <strong>Address:</strong> Main Street, City Center</p>
            <p style={{ color: '#4a5568', margin: '0.5rem 0' }}>📞 <strong>Phone:</strong> +355 6X XX XX XXX</p>
            <p style={{ color: '#4a5568', margin: '0.5rem 0' }}>🕒 <strong>Hours:</strong> Monday - Sunday (08:00 - 23:00)</p>
          </div>

          {/* Message Form */}
          {/* Message Form */}
      <ContactForm />
        </div>
      </section>

    </div>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f7fafc', 
      display: 'flex', 
      flexDirection: 'column',
      margin: 0,
      padding: 0
    }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <MainContent />
      </div>
      <footer style={{ 
        backgroundColor: '#1a202c', 
        color: '#a0aec0', 
        padding: '1.5rem', 
        textAlign: 'center', 
        fontSize: '0.9rem',
        borderTop: '1px solid #2d3748'
      }}>
        &copy; {new Date().getFullYear()} Bella Vita Restaurant. All rights reserved.
      </footer>
    </div>
  );
}

export default App;// KOMPONENTI DINAMIK I MENUSË
function DynamicMenu() {
  // 1. Të dhënat e menusë
  const menuItems = [
    {
      id: 1,
      title: "Special Pizza",
      category: "pizza",
      description: "Tomato sauce, mozzarella, ham, mushrooms, and fresh oregano.",
      price: "€8.50"
    },
    {
      id: 2,
      title: "Pasta Carbonara",
      category: "pasta",
      description: "Cream, pancetta, eggs, parmesan cheese, and black pepper.",
      price: "€9.00"
    },
    {
      id: 3,
      title: "Margherita Pizza",
      category: "pizza",
      description: "Simple authentic Italian pizza with tomato sauce, fresh mozzarella, and basil.",
      price: "€7.00"
    },
    {
      id: 4,
      title: "Spaghetti Bolognese",
      category: "pasta",
      description: "Traditional Italian pasta served with rich, slow-cooked minced meat sauce.",
      price: "€9.50"
    }
  ];

  // 2. State për të ruajtur kategorinë aktive
  const [activeCategory, setActiveCategory] = React.useState("all");

  // 3. Filtrimi i pjatave bazuar te kategoria e përzgjedhur
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" style={{ minHeight: '80vh', paddingBottom: '3rem', marginBottom: '2rem', borderBottom: '2px solid #e2e8f0' }}>
      <h1 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', fontSize: '2.2rem', fontFamily: 'sans-serif' }}>Our Menu</h1>
      <p style={{ color: '#718096', fontStyle: 'italic', marginBottom: '2rem', fontFamily: 'sans-serif' }}>Choose from our traditional dishes and house specialties.</p>

      {/* BUTONAT E FILTRIMIT */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
        {['all', 'pizza', 'pasta'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #dd6b20',
              backgroundColor: activeCategory === category ? '#dd6b20' : '#fff',
              color: activeCategory === category ? '#fff' : '#dd6b20',
              cursor: 'pointer',
              fontWeight: '600',
              textTransform: 'capitalize',
              transition: '0.3s'
            }}
          >
            {category === 'all' ? 'Show All' : category}
          </button>
        ))}
      </div>

      {/* LISTA E PJATAVE TË FILTRUARA */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, color: '#e53e3e', fontSize: '1.3rem', fontFamily: 'sans-serif' }}>{item.title}</h3>
              <span style={{ fontWeight: 'bold', color: '#2d3748' }}>{item.price}</span>
            </div>
            <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.5', fontSize: '0.95rem', fontFamily: 'sans-serif' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}// KOMPONENTI I FORMULARIT TË KONTAKTIT
function ContactForm() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Këtu simulohet dërgimi i të dhënave
    console.log("Form submitted:", { name, message });
    
    // Shfaqim mesazhin e suksesit
    setIsSent(true);
    
    // Pastrojmë fushat e inputit
    setName("");
    setMessage("");

    // Heqim mesazhin e suksesit pas 5 sekondash automatikisht
    setTimeout(() => {
      setIsSent(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <h3 style={{ marginTop: 0, color: '#2d3748', fontSize: '1.5rem', fontFamily: 'sans-serif' }}>Send a Message</h3>
      
      {/* Njoftimi i Suksesit */}
      {isSent && (
        <div style={{ backgroundColor: '#c6f6d5', color: '#22543d', padding: '1rem', borderRadius: '4px', fontWeight: '605', fontFamily: 'sans-serif', border: '1px solid #9ae6b4' }}>
          Thank you! Your message or reservation has been sent successfully. ✨
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontWeight: '600', color: '#4a5568', fontFamily: 'sans-serif' }}>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
          placeholder="Type your name here..."
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontWeight: '600', color: '#4a5568', fontFamily: 'sans-serif' }}>Message or Reservation:</label>
        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e0', fontSize: '1rem', resize: 'vertical' }}
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        style={{ backgroundColor: '#e53e3e', color: '#fff', padding: '0.75rem', borderRadius: '4px', border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: '0.3s' }}
      >
        Send Message
      </button>
    </form>
  );
}