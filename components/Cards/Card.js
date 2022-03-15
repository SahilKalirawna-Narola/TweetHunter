import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
	Card,
	CardBody,
	CardLink,
	CardSubtitle,
	CardText,
	CardTitle,
} from "reactstrap";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const TweetCard = () => {
	const router = useRouter();
	const { userName } = router.query;

	const { data, error } = useSWR(
		userName ? `/api/search/${userName}` : null,
		fetcher
	);

	console.log("ska data", data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<div className='mt-3'>
			<Card className='mt-3' style={{ maxWidth: "500px" }}>
				<CardBody>
					<CardTitle tag='h5'>Card title</CardTitle>
					<CardSubtitle tag='h6' className='mb-2 text-muted'>
						Card subtitle
					</CardSubtitle>
				</CardBody>
				<CardBody>
					<CardText>
						Some quick example text to build on
						F:\writi\writi-v2.0-react\src\containers\TodoDashboard\index.js:86e
						up the bulk of the cards content.
					</CardText>
					<CardLink href='#'>Card Link</CardLink>
					<CardLink href='#'>Another Link</CardLink>
				</CardBody>
			</Card>
		</div>
	);
};

export default TweetCard;
