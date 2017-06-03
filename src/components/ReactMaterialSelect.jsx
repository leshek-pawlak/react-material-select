import React, { Component, PropTypes } from 'react'
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
            rmsListTopValue: 0,
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
        this.handleResetSelect = this.handleResetSelect.bind(this)
        this.handleSetSelect = this.handleSetSelect.bind(this)
        this.changeState = this.changeState.bind(this)
        this.getValue = this.getValue.bind(this)
        this.countTopRmsList = this.countTopRmsList.bind(this)
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

    componentDidUpdate(prevProps, prevState) {
        if (this.refs.rmsList && prevState.isOpen !== this.state.isOpen) {
            this.countTopRmsList()
        }
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
        if (this.props.children instanceof Array) {
            label = this.props.children[e.target.value].props.children
        } else if (this.props.children) {
            label = this.props.children.props.children
        }

        this.changeState({
            isOpen: false,
            isSelected: value,
            selected: {
                value,
                label,
            },
        })
    }

    // change state with callback function
    changeState(newState) {
        this.fireChangeEvent(newState)
        this.setState(newState)
    }

    handleResetSelect() {
        this.changeState({
            isOpen: false,
            isSelected: null,
            selected: {
                value: '',
                label: '',
            },
        })
    }

    handleSetSelect(label, value) {
        this.changeState({
            isOpen: false,
            isSelected: true,
            selected: {
                value: value,
                label: label,
            },
        })
    }

    // close select on click outside the select
    handleDocumentClick(event) {
        if (this.mounted) {
            if (!this.refs.rmsWrapper.contains(event.target)) {
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
        if (this.props.children instanceof Array) {
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

    countTopRmsList() {
        let bottomMargin = 40
        this.setState({
            rmsListTopValue: document.body.offsetHeight - this.refs.rmsList.getBoundingClientRect().bottom > this.refs.rmsList.offsetHeight ? 0 : -this.refs.rmsList.offsetHeight / 2 - bottomMargin,
        })
    }

    render() {
        const { label, resetLabel } = this.props

        let textClassName = classNames('rms-text', {'rms-text__empty': !this.state.isSelected})
        return <div className="rms-wrapper" ref="rmsWrapper">
            <div className={textClassName} onClick={this.handleToggleSelect}>
                <span>{this.state.selected.label ? this.state.selected.label : label}</span>
            </div>
            <label className="rms-label">{label}</label>
            <i className="rms-caret">arrow_drop_down</i>
            {this.state.isOpen && <ul ref="rmsList" className='rms-list' style={{ top: this.state.rmsListTopValue }}>
                {
                    resetLabel
                        && <li className="rms-item rms-item__reset" onMouseDown={this.handleResetSelect} onClick={this.handleResetSelect}>
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
