import { useState } from 'react';
import '../styles/Listing.scss';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
