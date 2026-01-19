import Footer from '../components/Footer';
import AccessAi from '../components/Home/AccessAi';
import Dashboard from '../components/Home/Dashboard';
import Hero from '../components/Home/Hero';
import LearnSlider from '../components/Home/LearnSlider';
import MarketPlace from '../components/Home/MarketPlace';
import Partners from '../components/Home/Partners';
import DataSecurity from '../components/Home/DataSecurity';
import TalentMarket from '../components/Home/TalentMarket';
import WhyFabSpace from '../components/Home/WhyFabSpace';
import WorkFlow from '../components/Home/WorkFlow';
import Navbar from '../components/Layout/Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Partners />
			<Dashboard />
			<MarketPlace />
			<DataSecurity />
			<TalentMarket />
			<WorkFlow />
			<AccessAi />
			<LearnSlider />
			<WhyFabSpace />
			<Footer />
		</div>
	);
};

export default Home;
