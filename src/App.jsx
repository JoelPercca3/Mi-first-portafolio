import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/proyectos" component={Projects} />
          <Route path="/sobre-mi" component={About} />
          <Route path="/contacto" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
    </>
  )
}

export default App
