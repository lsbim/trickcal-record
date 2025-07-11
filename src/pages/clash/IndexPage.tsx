import IndexComponent from "../../components/clash/IndexComponent";
import { useSummaryData } from "../../hooks/useSummaryData";
import Footer from "../../layouts/Footer";
import HeaderNav from "../../layouts/HeaderNav";
import { ClashSummary } from "../../types/clashTypes";

const IndexPage = () => {

	const { data } = useSummaryData<ClashSummary>('clash');

	if (!data) return;

	// console.log(data)

	return (
		<div className="flex flex-col items-center min-h-screen">
			<HeaderNav />
			<IndexComponent
				summary={data}
			/>
			 <Footer />
		</div>
	);
}

export default IndexPage;