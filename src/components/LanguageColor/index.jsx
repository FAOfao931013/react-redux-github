import React from 'react';
import languageColor from 'common/languageColor';
import './style.less';

class LanguageColor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ''
        };

    }

    componentDidMount() {
        languageColor.map((color, lan) => {
            if (lan === this.props.language) {
                this.setState({
                    color
                });
            }
        });
    }

    render() {
        let {
            language
        } = this.props, {
            color
        } = this.state;

        return (
            <div className='language-color'>
                <div
                    className='color'
                    style={{backgroundColor:color}}>
                </div>
                <div className='language'>{language}</div>
            </div>
        );
    }
}

LanguageColor.propTypes = {
    language: React.PropTypes.string
};

export default LanguageColor;