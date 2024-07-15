import React, { useState } from 'react';
import { MagicCard } from 'react-magic-motion';
import 'react-magic-motion/card.css';

const ExpandableCard = ({ title, imageSrc, text }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: isCardExpanded ? '60rem' : '20rem',
          gap: '1rem',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.35rem',
          backgroundColor: isCardExpanded ? 'rgba(0, 0, 0, 0.8)' : 'white',
          color: isCardExpanded ? 'white' : 'black',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'width 0.3s ease-in-out',
          margin: '10px auto', // Center the card
        }}
      >
        <h3 style={{ fontWeight: 600, fontSize: '1.4em' }}>{title}</h3>
        <img
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
          }}
          alt={title}
          src={imageSrc}
        />
        <p>{isCardExpanded ? text : text.split(' ').slice(0, 20).join(' ') + '...'}</p>
        <button
          style={{
            alignSelf: 'center',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
          onClick={() => setIsCardExpanded(!isCardExpanded)}
        >
          {isCardExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    </MagicCard>
  );
};

export default ExpandableCard;
