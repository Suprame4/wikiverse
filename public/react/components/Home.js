import {PagesList} from "./PagesList";

const Home = ({pages}) => (
	<div className='home'>
			<h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} />
            
	</div>
  );

export default Home;