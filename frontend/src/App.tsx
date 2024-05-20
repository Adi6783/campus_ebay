import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'

import { Blogs } from './pages/Blogs'
import { Publish } from './components/Publish'
import { IdOne } from './components/IdOne'
import { IdTwo } from './components/IdTwo'
import { IdThree } from './components/IdThree'
import { IdFour } from './components/IdFour'
import { IdFive } from './components/IdFive'
import { IdSix } from './components/IdSix'
import {  Profile1 } from './components/UserProfile'
import { Prof2 } from './components/ProfTWo'
import { Prof3 } from './components/ProfThree'
import { Prof4 } from './components/ProfFour'
import { Prof5 } from './components/ProfFive'
import { Prof6 } from './components/ProfSix'
import { Bot } from './components/Bot'
import { Receipt } from './components/Receipt'

function App() {
  

  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path = "/" element = {<Signup />} />
         <Route path = "/signin" element = {<Signin />} />
         
         <Route path = "/blogs" element = {<Blogs />} />
         <Route path = "/publish" element = {<Publish />} />
         <Route path = "/post1" element = {<IdOne/>} />
         <Route path = "/post2" element = {<IdTwo/>} />
         <Route path = "/post3" element = {<IdThree/>} />
         <Route path = "/post4" element = {<IdFour/>} />
         <Route path = "/post5" element = {<IdFive/>} />
         <Route path = "/post6" element = {<IdSix/>} />
         <Route path = "/prof1" element = {<Profile1/>} />
         <Route path = "/prof2" element = {<Prof2/>} />
         <Route path = "/prof3" element = {<Prof3/>} />
         <Route path = "/prof4" element = {<Prof4/>} />
         <Route path = "/prof5" element = {<Prof5/>} />
         <Route path = "/prof6" element = {<Prof6/>} />
         <Route path = "/bot" element = {<Bot/>} />
         <Route path = "/receipt" element = {<Receipt/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
