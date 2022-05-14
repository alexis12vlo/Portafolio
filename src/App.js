import {react} from 'react-dom'
import {Route,Routes} from 'react-router-dom'
import About from './About.jsx'
import Portada from './Portada.jsx'

function App(){




	return (

			<div className="App">

				<Routes>
					<Route exact path='/'  component={About}/>

				</Routes>	
			</div>



		)
}
export default App;