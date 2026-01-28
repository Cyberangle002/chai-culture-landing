import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";



const ChaiCultureLanding = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
 
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const socialIcons = [
    {
      name: 'Instagram',
      path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z',
      color: '#E4405F',
      link: 'https://instagram.com'
    },
    {
      name: 'Facebook',
      path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
      color: '#1877F2',
      link: 'https://facebook.com'
    },
    {
      name: 'Twitter',
      path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
      color: '#1DA1F2',
      link: 'https://twitter.com'
    },
    {
      name: 'LinkedIn',
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
      color: '#0A66C2',
      link: 'https://linkedin.com'
    },
  ];

 const features = [
    {
      icon: '☕',
      title: 'Premium Quality',
      description: 'Finest tea leaves handpicked from royal estates'
    },
    {
      icon: '🌿',
      title: 'Authentic Spices',
      description: 'Traditional blend of aromatic Indian spices'
    },
    {
      icon: '⚡',
      title: 'Instant Preparation',
      description: 'Ready in seconds, taste like hours of brewing'
    },
    {
      icon: '👑',
      title: 'Royal Heritage',
      description: 'Recipes passed down through generations'
    },
    {
      icon: '🌍',
      title: 'Globally Sourced',
      description: 'Finest ingredients from across India and beyond'
    },
    {
      icon: '💯',
      title: '100% Natural',
      description: 'No artificial flavors, colors, or preservatives'
    }
  ];
  return (
    <div className="chai-culture-app">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .chai-culture-app {
          font-family: 'Crimson Pro', serif;
          background: linear-gradient(135deg, #FFF8E7 0%, #F5E6D3 100%);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Crimson+Pro:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap');

        /* Animated background pattern */
        .background-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.05;
          background-image: 
            repeating-linear-gradient(45deg, #C9984E 0px, #C9984E 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, #8B6F3E 0px, #8B6F3E 1px, transparent 1px, transparent 20px);
        }

        .cursor-glow {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201, 152, 78, 0.2) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
          filter: blur(40px);
        }

        .floating-ornaments {
          position: fixed;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .ornament {
          position: absolute;
          font-size: 3rem;
          opacity: 0.1;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Header */
        .header {
          text-align: center;
          padding: 1.5rem 0 2rem;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
        }

        .logo-image {
          max-width: 200px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(62, 39, 35, 0.15));
          transition: all 0.4s ease;
        }

        .logo-image:hover {
          filter: drop-shadow(0 8px 24px rgba(201, 152, 78, 0.4));
          transform: scale(1.05);
        }

        .tagline {
          font-size: 1.2rem;
          color: #5D4037;
          font-weight: 400;
          letter-spacing: 4px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          padding: 0 2rem;
        }

        .tagline::before,
        .tagline::after {
          content: '✦';
          position: absolute;
          color: #C9984E;
          font-size: 0.8rem;
        }

        .tagline::before {
          left: 0;
        }

        .tagline::after {
          right: 0;
        }

        /* Main content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }

        .hero-section {
          text-align: center;
          max-width: 900px;
          width: 100%;
        }

        .brand-description {
          font-size: 1.4rem;
          line-height: 1.9;
          color: #5D4037;
          margin-bottom: 2.5rem;
          font-weight: 300;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .coming-soon-container {
          margin: 2.5rem 0;
          position: relative;
        }

        .coming-soon-text {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #C9984E 0%, #8B6F3E 50%, #C9984E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          letter-spacing: 4px;
          position: relative;
          display: inline-block;
          text-shadow: 0 4px 20px rgba(201, 152, 78, 0.3);
        }

        .sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #C9984E;
          border-radius: 50%;
          opacity: 0;
        }

        .coming-soon-underline {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          height: 4px;
          background: linear-gradient(90deg, transparent, #C9984E, transparent);
          box-shadow: 0 2px 8px rgba(201, 152, 78, 0.4);
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
          width: 100%;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(15px);
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #E5C591, #C9984E, #8B6F3E);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(201, 152, 78, 0.25);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
          transition: all 0.4s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: #8B6F3E;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .feature-description {
          color: #5D4037;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Product highlight card */
        .product-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 230, 211, 0.8) 100%);
          backdrop-filter: blur(20px);
          border: 3px solid #E5C591;
          border-radius: 25px;
          padding: 3rem;
          margin: 3rem 0;
          box-shadow: 0 15px 60px rgba(62, 39, 35, 0.2);
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(201, 152, 78, 0.15) 50%,
            transparent 70%
          );
          transform: rotate(45deg);
          transition: all 0.8s ease;
        }

        .product-card:hover::before {
          right: 100%;
        }

        .product-card h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #8B6F3E;
          margin-bottom: 1.5rem;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        .product-card p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #5D4037;
          position: relative;
          z-index: 1;
        }

        /* Email signup */
        .email-section {
          margin: 4rem 0;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          padding: 3rem;
          border-radius: 30px;
          border: 2px solid rgba(201, 152, 78, 0.3);
        }

        .email-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          color: #3E2723;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .email-form {
          display: flex;
          gap: 1rem;
          max-width: 550px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .email-input {
          flex: 1;
          min-width: 280px;
          padding: 1.2rem 2rem;
          border: 3px solid #E5C591;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.9);
          font-family: 'Crimson Pro', serif;
          font-size: 1.1rem;
          color: #3E2723;
          outline: none;
          transition: all 0.3s ease;
        }

        .email-input:focus {
          border-color: #C9984E;
          box-shadow: 0 0 0 5px rgba(201, 152, 78, 0.15);
          background: white;
          transform: scale(1.02);
        }

        .email-submit {
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #C9984E 0%, #8B6F3E 100%);
          border: none;
          border-radius: 50px;
          color: #FFF8E7;
          font-family: 'Crimson Pro', serif;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 25px rgba(139, 111, 62, 0.4);
        }

        .email-submit::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .email-submit:hover::before {
          width: 400px;
          height: 400px;
        }

        .email-submit span {
          position: relative;
          z-index: 1;
        }

        .success-message {
          margin-top: 1.5rem;
          padding: 1.2rem;
          background: linear-gradient(135deg, rgba(139, 195, 74, 0.15), rgba(104, 159, 56, 0.1));
          border: 2px solid rgba(139, 195, 74, 0.4);
          border-radius: 15px;
          color: #558B2F;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* Social links */
        .social-section {
          margin: 3rem 0;
        }

        .social-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: #5D4037;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .social-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #E5C591;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .social-icon svg {
          width: 28px;
          height: 28px;
          stroke: #8B6F3E;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .social-icon-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .social-icon:hover .social-icon-bg {
          width: 120%;
          height: 120%;
        }

        .social-icon:hover svg {
          stroke: white;
          transform: scale(1.1);
        }

        .social-icon:hover {
          transform: translateY(-12px) rotate(8deg);
          border-color: transparent;
          box-shadow: 0 12px 35px rgba(62, 39, 35, 0.3);
        }

        /* Enhanced Footer */
        .footer {
          background: linear-gradient(135deg, rgba(139, 111, 62, 0.95) 0%, rgba(62, 39, 35, 0.95) 100%);
          color: #FFF8E7;
          padding: 4rem 2rem 2rem;
          margin-top: 5rem;
          border-top-left-radius: 50px;
          border-top-right-radius: 50px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #C9984E, #E5C591, #C9984E);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #E5C591;
          font-weight: 700;
        }

        .footer-section p,
        .footer-section a {
          color: #F5E6D3;
          line-height: 1.8;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          margin-bottom: 0.8rem;
        }

        .footer-section a:hover {
          color: #C9984E;
          transform: translateX(5px);
        }

        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #E5C591;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .footer-tagline {
          font-style: italic;
          color: #F5E6D3;
          margin-bottom: 1.5rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .footer-social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(229, 197, 145, 0.2);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .footer-social-icon:hover {
          background: #C9984E;
          transform: translateY(-5px) rotate(360deg);
        }

        .footer-social-icon svg {
          width: 20px;
          height: 20px;
          stroke: #E5C591;
          transition: stroke 0.3s ease;
        }

        .footer-social-icon:hover svg {
          stroke: white;
        }

        .newsletter-footer {
          margin-top: 1rem;
        }

        .newsletter-input {
          padding: 0.8rem 1.5rem;
          border: 2px solid rgba(229, 197, 145, 0.3);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
          color: #FFF8E7;
          font-family: 'Crimson Pro', serif;
          outline: none;
          width: 100%;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: #C9984E;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-input::placeholder {
          color: rgba(255, 248, 231, 0.6);
        }

        .footer-bottom {
          border-top: 1px solid rgba(229, 197, 145, 0.2);
          padding-top: 2rem;
          text-align: center;
          color: #F5E6D3;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #F5E6D3;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
          margin-bottom: 0;
        }

        .footer-links a:hover {
          color: #C9984E;
        }

        .copyright {
          font-size: 0.95rem;
          margin-top: 1rem;
        }

        .heart {
          color: #C9984E;
          display: inline-block;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
        }

        /* Steam animation */
        .steam-container {
          position: absolute;
          top: 15%;
          right: 8%;
          width: 120px;
          height: 180px;
          opacity: 0.25;
          pointer-events: none;
        }

        .steam {
          position: absolute;
          width: 10px;
          height: 70px;
          background: linear-gradient(to top, #E5C591, transparent);
          border-radius: 50%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .logo-image {
            max-width: 150px;
          }

          .tagline {
            font-size: 0.95rem;
            letter-spacing: 2px;
          }

          .coming-soon-text {
            font-size: 3.5rem;
          }

          .brand-description {
            font-size: 1.15rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .product-card {
            padding: 2rem;
          }

          .product-card h2 {
            font-size: 2rem;
          }

          .email-section {
            padding: 2rem;
          }

          .email-form {
            flex-direction: column;
          }

          .email-input {
            min-width: 100%;
          }

          .social-icon {
            width: 60px;
            height: 60px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }

          .steam-container {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            max-width: 120px;
          }

          .coming-soon-text {
            font-size: 2.8rem;
          }

          .product-card h2 {
            font-size: 1.7rem;
          }

          .social-links {
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* Cursor glow effect */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 25,
        }}
      />

      {/* Background pattern */}
      <div className="background-pattern" />

      {/* Floating ornaments */}
      <div className="floating-ornaments">
        {['☕', '🌿', '✨', '🍃'].map((emoji, i) => (
          <motion.div
            key={i}
            className="ornament"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Steam animation */}
      <div className="steam-container">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="steam"
            style={{ left: `${25 + i * 35}px` }}
            animate={{
              y: [0, -120],
              opacity: [0, 0.7, 0],
              scale: [1, 1.8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Header with Logo */}
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img 
  src="/logo.png"  
  alt="Chai Culture Logo" 
  className="logo-image"
/>
          </motion.div>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Brew the Royal Tradition
          </motion.p>
        </motion.header>

        {/* Main content */}
        <motion.main
          className="main-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-section">
            <motion.p className="brand-description" variants={itemVariants}>
              Experience the authentic taste of royal Indian chai, crafted with
              heritage, passion, and the finest ingredients. A journey through
              time, one cup at a time.
            </motion.p>

            <motion.div className="coming-soon-container" variants={itemVariants}>
              <motion.h2
                className="coming-soon-text"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                Launching Soon
              </motion.h2>
              
              {/* Sparkles */}
              <div className="sparkles">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="sparkle"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="coming-soon-underline"
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="features-grid"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="product-card"
              variants={itemVariants}
              whileHover={{
                y: -12,
                boxShadow: '0 25px 80px rgba(62, 39, 35, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2>Premium Instant Chai Tea Premix</h2>
              <p>
                Our premium instant chai tea premix brings the authentic flavors
                of royal Indian households to your home. Carefully blended with
                traditional spices and the finest tea leaves, each cup tells a
                story of heritage and warmth. Experience centuries of tradition
                in every sip.
              </p>
            </motion.div>

            <motion.div className="email-section" variants={itemVariants}>
              <h3>Be the First to Know</h3>
              <form className="email-form" onSubmit={handleSubmit}>
                <motion.input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="email-submit"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Notify Me</span>
                </motion.button>
              </form>

              <AnimatePresence>
  {showSuccess && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      {/* content */}
    </motion.div>
  )}
</AnimatePresence>

            </motion.div>

            <motion.div className="social-section" variants={itemVariants}>
              <h3 className="social-title">Connect With Us</h3>
              <div className="social-links">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.4 + index * 0.1,
                      type: 'spring',
                      stiffness: 250,
                    }}
                    whileHover={{
                      y: -15,
                      rotate: 8,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="social-icon-bg"
                      style={{ backgroundColor: social.color }}
                    />
                    <svg viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.main>
      </div>

      {/* Enhanced Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-logo">Chai Culture</h4>
            <p className="footer-tagline">"Brew the Royal Tradition"</p>
            <p>
              Bringing the authentic taste of royal Indian chai to the world.
              Crafted with heritage, passion, and the finest ingredients.
            </p>
            <div className="footer-social">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg viewBox="0 0 24 24">
                    <path d={social.path} fill="none" strokeWidth="2" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#about">About Us</a>
            <a href="#products">Our Products</a>
            <a href="#recipes">Recipes</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-section">
            <h4>Customer Care</h4>
            <a href="#faq">FAQs</a>
            <a href="#shipping">Shipping Info</a>
            <a href="#returns">Returns & Refunds</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive offers and chai brewing tips!</p>
            <div className="newsletter-footer">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email address"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#sitemap">Sitemap</a>
          </div>
          <p className="copyright">
            &copy; 2026 Chai Culture. All rights reserved. | Made with <span className="heart">❤</span> in India
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default ChaiCultureLanding;