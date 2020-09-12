import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';
import { RoomProvider } from './context/RoomProvider';

ReactDOM.render(
	<React.StrictMode>
		<RoomProvider>
			<Router basename={process.env.PUBLIC_URL}>
				<App />
			</Router>
		</RoomProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
