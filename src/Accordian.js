import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  let contentDisplay = null;

  if (isOpen) {
    contentDisplay = (
      <div className="accordion-content" onClick={toggleAccordion}>
        {content}
      </div>
    );
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
      </div>
      {contentDisplay}
    </div>
  );
};

export default Accordion;
