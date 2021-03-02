import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Newsutil from "../../reusables/Newsutil";
import "./News.css";

export const News = () => {
	const [news, setNews] = useState([
		{
			title: "Coronavirus Lockdown 1: Boon or Bane...",
			text:
				"Enim ut exercitation proident aliquip voluptate enim velit magna reprehenderit ex nulla fugiat. Tempor magna consectetur adipisicing ullamco tempor consequat cupidatat culpa. Exercitation eiusmod ea eu reprehenderit do dolore proident enim sint aute velit do cupidatat nostrud.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 2: Boon or Bane...",
			text:
				"Fugiat esse sunt ea ipsum ad. Sit consequat adipisicing deserunt est. Excepteur velit labore est id. Reprehenderit velit sunt culpa nulla cillum laboris incididunt dolor. Culpa proident irure nostrud occaecat nostrud veniam veniam eu elit do eu est in. Amet amet deserunt consequat labore irure minim voluptate. Reprehenderit veniam quis occaecat reprehenderit quis nostrud dolore adipisicing minim nulla esse id.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 3: Boon or Bane...",
			text:
				"Deserunt irure culpa fugiat amet pariatur reprehenderit est. Duis eiusmod dolore do anim excepteur. Lorem non incididunt aliquip do incididunt veniam reprehenderit tempor ipsum laborum officia aliqua.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 4: Boon or Bane...",
			text:
				"Exercitation exercitation veniam cupidatat reprehenderit in ipsum ad sit id nostrud culpa adipisicing. Pariatur fugiat et magna minim ex. Est ullamco labore sit et incididunt ea non quis ea anim. Irure ullamco nostrud voluptate ut aute eu. Culpa excepteur occaecat sit officia sunt veniam cupidatat esse veniam exercitation tempor id voluptate. Eu dolore dolore ad qui.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 5: Boon or Bane...",
			text:
				"Magna laboris ex id ut ad reprehenderit elit. Consequat ullamco laborum labore adipisicing esse cupidatat exercitation aute enim in esse. Lorem pariatur aliqua qui ex pariatur do reprehenderit aute duis quis tempor duis. Enim qui ullamco pariatur commodo et. Laboris officia ut aliqua aute fugiat nisi anim non adipisicing cillum ex ea exercitation labore.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 6: Boon or Bane...",
			text:
				"Adipisicing consectetur labore est ad et aliquip. Excepteur sunt duis officia cillum eu cupidatat. Aute ullamco qui esse tempor id exercitation ipsum veniam voluptate fugiat voluptate. Nisi sint dolore exercitation sunt. Anim ad cupidatat officia incididunt sunt ad voluptate laboris aliqua ex ea irure labore.",
			date: "January 27, 2021",
		},
		{
			title: "Coronavirus Lockdown 7: Boon or Bane...",
			text:
				"Eu commodo do consequat aliqua commodo velit cupidatat ullamco Lorem reprehenderit. Aute proident ad in est mollit in velit. Officia deserunt minim mollit mollit officia officia Lorem est amet id. Excepteur dolore adipisicing magna veniam cupidatat laboris quis pariatur eiusmod dolor id incididunt amet.",
			date: "January 27, 2021",
		},
	]);

	// let title = "Coronavirus Lockdown";
	// let text = "Some quick example text to build on the card title and make up the bulk of the card's content.";
	// let date = "January 27, 2021";

	return (
		<div className="news container bg-light mt-5" style={{ borderRadius: "10px" }}>
			<div className="container-fluid">
				<h1 className="p-2 pl-5 pt-5 pr-5 mainTitle text-center">News</h1>
			</div>
			<div className="container-fluid" style={{ maxWidth: "1140px" }}>
				<OwlCarousel
					className="owl-theme"
					loop
					nav={true}
					margin={8}
					responsive={{
						0: {
							items: 1,
						},
						760: {
							items: 2,
						},

					}}
				>
					{news.map((News) => {
						return <Newsutil News={News} />;
					})}
				</OwlCarousel>
			</div>
		</div>
	);
};
