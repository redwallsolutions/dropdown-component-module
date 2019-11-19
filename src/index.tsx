import React, { FC, FormEvent, useState } from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import Dropdown from './lib'

const theming = createThemeWithAppearance()

const Reset = createGlobalStyle<any>`
    body {
		font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
        padding: 0;
        margin: 0;
        background-color: ${props => theming(props).contrast};
        color: ${props => theming(props).color};
        &, * {
            box-sizing: border-box;
            transition: .3s;
        }
    }
`

Reset.defaultProps = {
	appearance: 'default'
} as any

const Container = styled.div`
	height: 100vw;
	padding: 10px;
	margin: 0;
`

const InputsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 2em;
`

const App: FC = () => {
	const [themeMode, setThemeMode] = useState('light')
	const [appearance, setAppearance] = useState('default')
	const [visible, setVisible] = useState(false)

	const onChange = (event: FormEvent) => {
		let currentTarget = event.currentTarget
		let inputName = currentTarget.attributes.getNamedItem('name').nodeValue
		if (inputName === 'mode') {
			setThemeMode(currentTarget.id)
		} else {
			setAppearance(currentTarget.id)
		}
	}

	return (
		<ThemeProvider theme={{ mode: themeMode }}>
			<Container>
				<Reset appearance={appearance} />
				<InputsContainer>
					<InputItem>
						<label htmlFor="light">Mode Light</label>
						<input type="radio" id="light" onChange={onChange} name="mode" />
					</InputItem>
					<InputItem>
						<label htmlFor="dark">Mode Dark</label>
						<input type="radio" id="dark" onChange={onChange} name="mode" />
					</InputItem>
					<InputItem>
						<label htmlFor="default">Appearance Default</label>
						<input
							type="radio"
							id="default"
							onChange={onChange}
							name="appearance"
						/>
					</InputItem>
					<InputItem>
						<label htmlFor="primary">Appearance Primary</label>
						<input
							type="radio"
							id="primary"
							onChange={onChange}
							name="appearance"
						/>
					</InputItem>
					<InputItem>
						<label htmlFor="secondary">Appearance Secondary</label>
						<input
							type="radio"
							id="secondary"
							onChange={onChange}
							name="appearance"
						/>
					</InputItem>
				</InputsContainer>
				<label htmlFor="visibility">Dropdown Visibility</label>
				<input
					type="checkbox"
					id="visibility"
					onChange={() => {
						setVisible(!visible)
					}}
					name="appearance"
					checked={visible}
				/>
				<div style={{ display: 'flex' }}>
					<Dropdown
						visible={visible}
						items={[
							{
								text: 'Item 1',
								handler: console.log
							},
							{
								text: 'Option 2'
							},
							{
								text: 'Third Item'
							}
						]}
					/>
					<Dropdown
						visible={visible}
						items={[
							{
								text:
									"Let's start by using some giant bizarre text to first option that won't exist in real world application"
							}
						]}
					/>
				</div>
			</Container>
		</ThemeProvider>
	)
}

render(<App />, document.querySelector('#app'))
