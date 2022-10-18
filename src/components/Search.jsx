import React, { useState } from "react";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Search = ({ setCity }) => {
	const [value, setValue] = useState([]);

	const handlerChange = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);
	};
	const handlerSubmit = () => {
		setCity(value);
	};

	return (
		<>
			<Flex justify="center">
				<Center h="55px">
					<Input onChange={handlerChange} placeholder="Buscar" m="10px" />
					<IconButton
						onClick={handlerSubmit}
						colorScheme="blue"
						aria-label="Search database"
						icon={<SearchIcon />}
					>
						Buscar
					</IconButton>
				</Center>
			</Flex>
		</>
	);
};
