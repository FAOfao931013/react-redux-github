import React from 'react';
import classNames from 'classnames';
import './style.less';

class Tab extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeName:props.activeName
		};
	}

	changeActiveName(activeName) {
		this.setState({
			activeName:activeName
		});

		if (typeof this.props.onChange === 'function') {
			this.props.onChange(activeName);
		}
	}

	render() {
		const {
			tabs
		} = this.props;

		return (
			<div className='tabs'>
				{
					tabs.map(tab => (
							<div
								key={tab.activeName}
								className={classNames('tab', {
                                        selected:this.state.activeName === tab.activeName
                                    })}
								onClick={() => this.changeActiveName(tab.activeName)}>
								{tab.title}
							</div>
						)
					)
				}
            </div>
		);
	}
}

Tab.porpTypes = {
	tabs: React.PropTypes.object.isRequired,
	activeName: React.PropTypes.string.isRequired,
};

export default Tab;