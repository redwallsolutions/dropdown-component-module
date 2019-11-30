import React from 'react'
import { Reset, Container, Text } from './Styles'
import { IDropdown, IDropdownStyled } from './interfaces'
import Ink from 'react-ink'

const Dropdown: React.FC<IDropdown & IDropdownStyled> = ({
	items = [],
	visible,
	theme={mode: 'light'},
	origin="top right"
}) => {
	return (
		<div className="dropdown-component-module">
			<Reset />
			<Container visible={visible} theme={theme} origin={origin}>
				{items.map(({ text, handler }, index: number) => (
					<Text key={index} order={index} visible={visible} onClick={handler} title={text} theme={theme}>
						{text}
						<Ink radius={344}/>
					</Text>
				))}
			</Container>
		</div>
	)
}

export default Dropdown
