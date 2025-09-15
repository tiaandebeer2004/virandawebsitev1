import { useState } from 'react'
import './CSS/HomepageResults.css'

function HomepageResults() {
  const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="HomepageResults">
            <h2 className="homepageResultsHeading1">WE DON'T JUST TALK BIG</h2>   
            <h2 className="homepageResultsHeading2 linearWipe">WE DELIVER BIGGER</h2>   
        </div>
      </>
    )
  }

export default HomepageResults