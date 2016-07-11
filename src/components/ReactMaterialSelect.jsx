import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class ReactMaterialSelect extends Component {
    constructor(props) {
        super(props)

        let selectedValue = null

        // find selected value by dataValue
        if (props.defaultValue) {
            selectedValue = this.getOptions().find((value) => {
                return value.key === props.defaultValue
            })
        }

        this.state = {
            isOpen: false,
            isSelected: selectedValue,
            selected: {
                label: selectedValue ? selectedValue.label : props.label,
                value: selectedValue ? selectedValue.key : props.defaultValue,
            },
        }

        this.mounted = true
        this.handleDocumentClick = this.handleDocumentClick.bind(this)
        this.fireChangeEvent = this.fireChangeEvent.bind(this)
        this.handleToggleSelect = this.handleToggleSelect.bind(this)
        this.handleOptionClick = this.handleOptionClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
        this.getValue = this.getValue.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false)
        document.addEventListener('touchend', this.handleDocumentClick, false)
    }

    componentWillUnmount() {
        this.mounted = false
        document.removeEventListener('click', this.handleDocumentClick, false)
        document.removeEventListener('touchend', this.handleDocumentClick, false)
    }

    // the simplest way to get selected value
    getValue() {
        return this.state.selected.value
    }

    getLabel() {
        return this.state.selected.label
    }

    handleToggleSelect() {
        this.setState({isOpen: !this.state.isOpen})
    }

    handleOptionClick(e) {
        const value = e.target.attributes.data.value
        let label
        // if there is only one option this.props.children is object not an array
        if (this.props.children.length) {
            label = this.props.children[e.target.value].props.children
        } else if (this.props.children) {
            label = this.props.children.props.children
        }

        let newState = {
            isOpen: false,
            isSelected: value,
            selected: {
                value,
                label,
            },
        }

        this.fireChangeEvent(newState)
        this.setState(newState)
    }

    handleResetClick() {
        let newState = {
            isOpen: false,
            isSelected: null,
            selected: {
                value: '',
                label: '',
            },
        }

        this.fireChangeEvent(newState)
        this.setState(newState)
    }

    // close select on click outside the select
    handleDocumentClick(event) {
        if (this.mounted) {
            if (!ReactDOM.findDOMNode(this).contains(event.target)) {
                this.setState({
                    isOpen: false,
                })
            }
        }
    }

    // fire callback function
    fireChangeEvent(newState) {
        if (newState.selected.value !== this.state.selected.value && this.props.onChange) {
            this.props.onChange(newState.selected)
        }
    }

    // get childrens
    getOptions() {
        // if there is only one option this.props.children is object not an array
        if (this.props.children.length) {
            // console.log(this.props.children.length, this.props.children)
            return this.props.children.map(child => {
                return {
                    key: child.props.dataValue,
                    label: child.props.children,
                }
            })
        }

        if (this.props.children) {
            return [{
                key: this.props.children.props.dataValue,
                label: this.props.children.props.children,
            }]
        }

        return []
    }

    render() {
        const {label, resetLabel} = this.props

        let textClassName = classNames('rms-text', {'rms-text__empty': !this.state.isSelected})
        return (
            <div className="rms-wrapper">
                <div className={textClassName} onClick={this.handleToggleSelect}>
                    <span>{this.state.selected.label ? this.state.selected.label : label}</span>
                </div>
                <label className="rms-label">{label}</label>
                <i className="rms-caret">arrow_drop_down</i>
                {this.state.isOpen && <ul className='rms-list'>
                    {
                        resetLabel
                            && <li className="rms-item rms-item__reset" onMouseDown={this.handleResetClick} onClick={this.handleResetClick}>
                                {resetLabel}
                            </li>
                    }
                    {this.getOptions().map((opt, key) => {
                        let selectClassName = classNames('rms-item', {'rms-item__active': opt.selected})
                        return <li key={'reactMaterialSelect_' + key} className={selectClassName} value={key} data={opt.key} onMouseDown={this.handleOptionClick} onClick={this.handleOptionClick}>
                            {opt.label}
                        </li>
                    })}
                </ul>}
            </div>
        )
    }
}

ReactMaterialSelect.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    defaultValue: PropTypes.string,
    resetLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    label: PropTypes.string,
}

ReactMaterialSelect.defaultProps = {
    resetLabel: 'No value',
}

export default ReactMaterialSelect
