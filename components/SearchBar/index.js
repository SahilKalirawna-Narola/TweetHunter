import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { useRouter } from 'next/router';

const SearchBar = () => {
   const [searchHandle, setSearchHandle] = useState();
	const router = useRouter();

	const handleSearch = () => {
      if (searchHandle !== undefined && searchHandle !== "")
		   router.push(`?userName=${searchHandle}`, undefined, { shallow: true });
      else 
		   router.push(`/`);
	};

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				handleSearch();
			}}>
			<Row>
				<Col xs='8'>
					<Input
						type='text'
						name='Search'
						id='userName'
						placeholder='@handle'
						onChange={(e) => setSearchHandle(e.target.value)}
					/>
				</Col>
				<Col xs='4'>
					<Button outline color='primary' onClick={handleSearch}>
						Search
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchBar;
