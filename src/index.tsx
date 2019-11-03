import { h, render } from 'preact';
import "./styles.scss";

import Button from "./modules/Button";

const App = () => <div >
	<h1>Hello from Preact and Typescript!</h1>
	<Button className="red" >Button</Button>
</div>;

render(<App />, document.getElementById('root'));