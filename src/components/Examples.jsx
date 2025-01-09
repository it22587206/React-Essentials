import { EXAMPLES } from "../data"
import TabButton from "./tabButton"
import { useState } from "react";

export default function Examples() {

    const [selectedTopic , setSelectedTopic]= useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
  }
  
  
  let tabContent = <p>please select a topic.</p>;
  
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    );
  }

    return (
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>jsx</TabButton>
          <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>props</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>state</TabButton>
        </menu>
        {tabContent}
        </section>
        
    );
}