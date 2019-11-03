import { h } from "preact";

export default props => <div className={props.className + " button"}  >
	{props.children}
</div>;