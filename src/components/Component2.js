import React, { Component } from 'react'
import { Spring } from 'react-spring'

const c2Style = {
	background: 'slateBlue',
	color: 'white',
	padding: '1.5rem'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}

export class Component2 extends Component {
	render() {
		return (
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
				{(props) => (
					<div style={props}>
						<div style={c2Style}>
							<h1>Component 1</h1>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minus beatae natus
								velit alias deleniti ad aspernatur laboriosam hic eveniet eius ratione sequi, amet
								perspiciatis impedit quas facere dolorem aperiam.
							</p>
                            <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
						</div>
					</div>
				)}
			</Spring>
		)
	}
}

export default Component2
