import React, { useState, useEffect } from "react";
import "./ReachUs.css";
import Iframe from "react-iframe";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import { BiTimeFive, BiCalendarCheck } from "react-icons/bi";
import { Card } from "react-bootstrap";
import { train, plane, bus } from "../../../assets";

export default function ReachUs() {
	const [width, setWidth] = useState("600px");
	const [card2Width, setCard2Width] = useState("400px");

	const updateDimensions = () => {
		if (window.innerWidth <= 600) {
			setWidth("400px");
			setCard2Width("400px");
		} else setWidth("650px");
		if (window.innerWidth <= 1000 && window.innerWidth > 600) setCard2Width("650px");
		else setCard2Width("");
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, [window.innerWidth]);

	return (
		<div className="container-fluid reachUs font-ubuntu mb-5">
			<h1 className="mt-4 mainTitle mb-3 text-center">Contact Us</h1>
			<div className="part1 p-4 container">
				<div
					className="card2"
					style={{
						maxHeight: "500px",
						width: card2Width,
					}}
				>
					<h3 className="font-acme">IIT Indore International Affairs</h3>
					<br />
					<p>
						Office of International Affairs and outreach,
						<br />
						Abhinandan bhavan, 7th Floor, west wing,
						<br />
						Indian Institute of Technology Indore,
						<br />
						Khandwa Road, Simrol,
						<br /> Indore - 453552
						<br />
						Madhya Pradesh,India
					</p>
					<p>
						<FaPhoneAlt className="contactIcons" />
						<a href="tel:+91 07316603479">+91 0731660 3479</a> /{" "}
						<a href="tel:+91 07316603573">3573</a>
					</p>
					<p>
						<IoMdMail className="contactIcons" />
						<a href="mailto:intloffice@iiti.ac.in">intloffice@iiti.ac.in</a>
					</p>
					<p>
						<FiLink2 className="contactIcons" />
						<a href="http://iiti.ac.in/">http://iiti.ac.in</a>
					</p>
					<p>
						<BiTimeFive className="contactIcons" />
						10.00 - 19.00 Hrs
					</p>
					<p>
						<BiCalendarCheck className="contactIcons" />
						<span className="days">S</span>
						<span className="days activeDays">M</span>
						<span className="days activeDays">T</span>
						<span className="days activeDays">W</span>
						<span className="days activeDays">T</span>
						<span className="days activeDays">F</span>
						<span className="days">S</span>
					</p>
				</div>
				<Iframe
					url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5687000959156!2d75.91853441489567!3d22.520359685209645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIIT%20Indore!5e0!3m2!1sen!2sin!4v1617012970021!5m2!1sen!2sin"
					width={width}
					height="500px"
					styles={{ width: "max(400px, 50%)" }}
					loading="lazy"
					className="reachUsMap"
				></Iframe>
			</div>
			<h1 className="font-acme mt-5 text-center mb-4">How To Reach Us</h1>
			<div className="cardsGrp">
				<Card className="mt-4" style={{ width: "max(30%,22rem)" }}>
					<Card.Header>
						<h3 className="font-acme">From Indore Railway Station</h3>
					</Card.Header>
					<Card.Img variant="top" src={train} />
					<Card.Body>
						<Card.Text>Distance: Approximately 24.4 Kms</Card.Text>
						<Card.Text>Travel time: 50 min</Card.Text>
						<Card.Text>
							Book Taxi/Auto (fare approx. INR 400-500) up to Campus of IIT Indore,
							Simrol
						</Card.Text>
						<Card.Text>
							Please ask your driver to follow the way via Tejaji Nagar, which is the
							shortest route to reach IIT Indore Simrol 453552 from Indore Railway
							Station.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-4" style={{ width: "max(30%,22rem)" }}>
					<Card.Header>
						<h3 className="font-acme">From Indore Airport</h3>
					</Card.Header>
					<Card.Img variant="top" src={plane} />
					<Card.Body>
						<Card.Text>Distance: Approximately 35.3 Kms</Card.Text>
						<Card.Text>Travel time: 1hr 6min</Card.Text>
						<Card.Text>
							Book Taxi/Auto (fare approx. INR 800-900) up to Campus of IIT Indore,
							Simrol
						</Card.Text>
						<Card.Text>
							Please ask your driver to follow the way via Tejaji Nagar, which is the
							shortest route to reach Simrol (IIT Indore) from Indore Airport (Devi
							Ahilya Bai Holkar Airport).
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="mt-4" style={{ width: "max(30%,22rem)" }}>
					<Card.Header>
						<h3 className="font-acme">City Bus Service</h3>
					</Card.Header>
					<Card.Img variant="top" src={bus} />
					<Card.Body>
						<Card.Text>Distance: Approximately 22 Kms</Card.Text>
						<Card.Text>Travel time: 1hr 10min</Card.Text>
						<Card.Text>
							The bus fare from Bhanwarkuan to IIT Indore is INR 25 per person.
						</Card.Text>
						<Card.Text>
							One can board a local bus shuttle service which originates from
							Bhanwarkuan bus stand (about 5km from railway station) to reach IIT
							Indore campus.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}