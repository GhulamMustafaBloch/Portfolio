import './WorkCardStyle.css'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData'
import React from 'react';

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Our Projects</h1>
      <div className="project-container">
 {
    WorkCardData.map((val,ind) =>{
        return(
            <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            // text={val.text}
            view={val.view}
            viewText={val.viewText}
            viewSource={val.viewSource}
            />
        )
    })
 }
      </div>
    </div>
  );
}

export default Work;
