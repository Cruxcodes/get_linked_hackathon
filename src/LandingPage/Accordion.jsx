import { useState } from "react";
function Accordion() {
  const [sections, setSections] = useState([
    { title: "Section 1", content: "Content for Section 1", isOpen: false },
    { title: "Section 2", content: "Content for Section 2", isOpen: false },
    { title: "Section 3", content: "Content for Section 3", isOpen: false },
  ]);

  const toggleSection = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].isOpen = !updatedSections[index].isOpen;
    setSections(updatedSections);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div className="accordion-section" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleSection(index)}
          >
            <h2>{section.title}</h2>
            <span className={`arrow ${section.isOpen ? "open" : ""}`}></span>
          </div>
          {section.isOpen && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
