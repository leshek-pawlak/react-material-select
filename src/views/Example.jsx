import 'highlight.js/styles/hybrid.css'
import React, {Component, PropTypes} from 'react'
import Highlight from 'react-highlight'
import ReactMaterialSelect from 'components/ReactMaterialSelect'

class Example extends Component {
    constructor() {
        super()

        this.state = {
            selected1: {},
            selected2: {},
            selected3: {},
        }

        this.getValue = this.getValue.bind(this)
        this.callbackFunction2 = this.callbackFunction2.bind(this)
        this.callbackFunction3 = this.callbackFunction3.bind(this)
    }

    getValue() {
        this.setState({
            selected1: {
                value: this.refs.firstselect.getValue(),
                label: this.refs.firstselect.getLabel(),
            },
        })
    }

    callbackFunction2(selected) {
        this.setState({selected2: selected})
    }

    callbackFunction3(selected) {
        this.setState({selected3: selected})
    }

    // function to render object values
    renderResponse(state) {
        return <div className="display-value">
            <p>{'{'}</p>
            <p className="label">label: {state.label}</p>
            <p className="value">value: {state.value}</p>
            <p>{'}'}</p>
        </div>
    }

    render() {
        const {id} = this.props

        switch (id) {
            case 'example1':
                return (
                    <section id="example1">
                        <h3>The simplest usage of the component</h3>
                        <h5>On click the button we get selected value from ref attribute of the select.</h5>

                        <ReactMaterialSelect ref="firstselect">
                            <option dataValue="StarWars">Darth Vader</option>
                            <option dataValue="LordOfTheRings">Bilbo Baggins</option>
                            <option dataValue="Terminator">Terminator</option>
                            <option dataValue="PulpFiction">Vincent Vega</option>
                            <option dataValue="TheGodfather">Vito Corleone</option>
                        </ReactMaterialSelect>

                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised" type="button" raised ripple onClick={this.getValue}>Get value from select</button>

                        {this.renderResponse(this.state.selected1)}

                        <Highlight className="javascript">
{`getValue() {
    this.setState({
        selected1: {
            label: this.refs.firstselect.getLabel(),
            value: this.refs.firstselect.getValue(),
        },
    })
}`}
                        </Highlight>
                        <Highlight className="html">
{`<ReactMaterialSelect ref="firstselect">
    <option dataValue="Star Wars">Darth Vader</option>
    ...
</ReactMaterialSelect>`}
                        </Highlight>
                    </section>
                )
            case 'example2':
                return (
                    <section id="example2">
                        <h3>The most typical usage</h3>
                        <h5>Instead of ref attribute we use callback function.</h5>
                        <h5>We get data imidiatelly when is changed.</h5>
                        <h5>We can set a label to our select.</h5>

                        <ReactMaterialSelect label="Choose favourite film character" onChange={this.callbackFunction2}>
                            <option dataValue="PulpFiction">Vincent Vega</option>
                            <option dataValue="StarWars">Darth Vader</option>
                            <option dataValue="LordOfTheRings">Bilbo Baggins</option>
                            <option dataValue="Terminator">Terminator</option>
                            <option dataValue="TheGodfather">Vito Corleone</option>
                        </ReactMaterialSelect>

                        {this.renderResponse(this.state.selected2)}
                        <Highlight className="javascript">
{`callbackFunction2(selected) {
    this.setState({selected2: selected})
}`}
                        </Highlight>
                        <Highlight className="html">
{`<ReactMaterialSelect label="Choose favourite film character" onChange={this.callbackFunction2}>
    <option dataValue="PulpFiction">Vincent Vega</option>
    ...
</ReactMaterialSelect>`}
                        </Highlight>
                    </section>
                )
            case 'example3':
                return (
                    <section id="example3">
                        <h3>Full house</h3>
                        <h5>We can set defaultValue and resetLabel which is a first option on dropdown list.</h5>

                        <ReactMaterialSelect label="Choose favourite film character" defaultValue="TheGodfather" resetLabel="None of them" onChange={this.callbackFunction3}>
                            <option dataValue="TheGodfather">Vito Corleone</option>
                            <option dataValue="StarWars">Darth Vader</option>
                            <option dataValue="LordOfTheRings">Bilbo Baggins</option>
                            <option dataValue="Terminator">Terminator</option>
                            <option dataValue="PulpFiction">Vincent Vega</option>
                        </ReactMaterialSelect>

                        {this.renderResponse(this.state.selected3)}

                        <Highlight className="html">
{`<ReactMaterialSelect label="Choose favourite film character" defaultValue="TheGodfather" resetLabel="None of them" onChange={this.callbackFunction3}>
    <option dataValue="TheGodfather">Vito Corleone</option>
    ...
</ReactMaterialSelect>`}
                        </Highlight>
                    </section>
                )
            default:
                return null
        }
    }
}

Example.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Example
