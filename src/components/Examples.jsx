import { EXAMPLES } from "../data"
import TabButton from "./tabButton"
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

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
        <Section title={Examples} id='examples'>
          <Tabs
          buttons={
             <>
             <TabButton isSelected={selectedTopic==='components'} 
             onClick={()=>handleSelect('components')}>Components</TabButton>
             <TabButton isSelected={selectedTopic==='jsx'}
             onClick={()=>handleSelect('jsx')}>jsx</TabButton>
             <TabButton isSelected={selectedTopic==='props'} 
             onClick={()=>handleSelect('props')}>props</TabButton>
             <TabButton isSelected={selectedTopic==='state'} 
             onClick={()=>handleSelect('state')}>state</TabButton>
           </>
          }>
          {tabContent}
          </Tabs>
       
        </Section>
        
    );
}