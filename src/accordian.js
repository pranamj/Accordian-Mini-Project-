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
        <h2>{title}</h2>
      </div>
      {contentDisplay}
    </div>
  );
};

export default Accordion;
