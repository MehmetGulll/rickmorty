import React from 'react'

function EpisodeBar() {
        const container = document.querySelector<HTMLElement>(".container4") as HTMLDivElement;
        container.addEventListener('click',function(e){
        container.style.background = '#E7F3E9';
  })
  return (
    <div className='container5'>
      <div className='container4'>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet"></link>
        <div className='episodeinformation'>
           <div className='episodenumbercolor'>
            <div className='episodenumber'>S2.E10</div>
           </div>
           <div className='date'>Fri, July 32, 2022</div>
        </div>
        <div className='episodesummary'>
          <div className='summarytitle'>
            The End of Something
          </div>
          <div className='summarystatement'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
          </div>
        </div>
       </div>
    </div>
  )
}

export default EpisodeBar
