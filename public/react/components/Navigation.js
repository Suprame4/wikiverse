import { Link } from "react-router-dom";

const Navigation = () => (
	<nav>
	  <ul>
		<li>
			<Link to='/'>
				Home
			</Link>
		</li>
		<li>
			<Link to='/add'>
				Add Page
			</Link>
		</li>
        <li>
            <Link to='/delete'>
                Delete Page
            </Link>
        </li>
	  </ul>
	</nav>
  );

  export default Navigation; 