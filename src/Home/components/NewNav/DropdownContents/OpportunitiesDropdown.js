import React from "react";
import styled from "styled-components";
import { Icon, DropdownSection, Heading, HeadingLink } from "./Components";
import { Link } from "react-router-dom";

const OpportunitiesDropdownEl = styled.div`
	width: 13rem;
`;

const Logo = styled.div`
	width: 38px;
	height: 38px;
	margin-right: 16px;
	border-radius: 100%;
	opacity: 0.6;
	background-color: ${({ color }) => `var(--${color})`};
`;

const SubProductsList = styled.ul`
	li {
		display: flex;
		margin-bottom: 1rem;
	}
	h3 {
		margin-right: 1rem;
		width: 3.2rem;
		display: block;
	}
	a {
		color: var(--dark-grey);
	}
`;

const ProductsSection = styled.ul`
	li {
		display: flex;
	}
`;

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`;

const OpportunitiesDropdown = () => {
	return (
		<OpportunitiesDropdownEl>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/">
							<Icon /> Internships
						</Link>
					</HeadingLink>
					<HeadingLink>
						<Link to="/">
							<Icon /> PG/PHD
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/">
							<Icon /> Post Doc
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</OpportunitiesDropdownEl>
	);
};

export default OpportunitiesDropdown;