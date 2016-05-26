import 'css/example.css'
import 'react-mdl/extra/material.css'
import 'highlight.js/styles/hybrid.css'
import React, {Component} from 'react'
import {Layout, Navigation, Header, Content, Button, Grid, Cell} from 'react-mdl'
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
    renderObject(state) {
        return <div className="display-value">
            <p>{'{'}</p>
            <p className="label">label: {state.label}</p>
            <p className="value">value: {state.value}</p>
            <p>{'}'}</p>
        </div>
    }

    render() {
        return (
            <Layout fixedHeader>
               <Header title="React Material Select">
                   <Navigation>
                       <a href="#example-1">Minimal</a>
                       <a href="#example-2">Default</a>
                       <a href="#example-3">Maximum</a>
                   </Navigation>
               </Header>
               <Content>
                    <Grid>
                        <Cell col={12}>
                            <section id="example-1">
                                <h2>This is the simplest usage of this component.</h2>
                                <p>We get selected value from ref attribute of select.</p>

                                <ReactMaterialSelect ref="firstselect">
                                    <option dataValue="@#!$RGSAFSDF">First Option</option>
                                    <option dataValue="fgfsdgfdsg">Second Option</option>
                                    <option dataValue="43523454232">Third Option</option>
                                    <option dataValue="vxvbvbx">Fourth Option</option>
                                    <option dataValue="@agsfdg">Darth Vader</option>
                                </ReactMaterialSelect>
                                <Button ripple onClick={this.getValue}>Get value from select</Button>

                                {this.renderObject(this.state.selected1)}

                                <Highlight className="javascript">
{`getValue() {
    this.setState({
        selected1: {
            value: this.refs.firstselect.getValue(),
            label: this.refs.firstselect.getLabel(),
        },
    })
}`}
                                </Highlight>
                                <Highlight className="html">
{`<ReactMaterialSelect ref="firstselect">
    <option dataValue="@#!$RGSAFSDF">First Option</option>
    ...
</ReactMaterialSelect>`}
                                </Highlight>
                            </section>

                            <section id="example-2">
                                <h2>The most typical usage.</h2>
                                <p>Instead of ref attribute we have callback function. We get data imidiatelly when is changed. And we added a label to our select.</p>

                                <ReactMaterialSelect label="Test Label" onChange={this.callbackFunction2}>
                                    <option dataValue="@#!$RGSAFSDF">First Option</option>
                                    <option dataValue="fgfsdgfdsg">Second Option</option>
                                    <option dataValue="43523454232">Third Option</option>
                                    <option dataValue="vxvbvbx">Fourth Option</option>
                                    <option dataValue="@agsfdg">Darth Vader</option>
                                </ReactMaterialSelect>

                                {this.renderObject(this.state.selected2)}
                                <Highlight className="javascript">
{`callbackFunction2(selected) {
    this.setState({selected2: selected})
}`}
                                </Highlight>
                                <Highlight className="html">
{`<ReactMaterialSelect label="Test Label" onChange={this.callbackFunction2}>
    <option dataValue="@#!$RGSAFSDF">First Option</option>
    ...
</ReactMaterialSelect>`}
                                </Highlight>
                            </section>

                            <section id="example-3">

                                <ReactMaterialSelect label="ksdahfhf awef" defaultValue="@#!$RGSAFSDF" resetLabel="Join to the dark side" onChange={this.callbackFunction3}>
                                    <option dataValue="@#!$RGSAFSDF">First Option</option>
                                    <option dataValue="fgfsdgfdsg">Second Option</option>
                                    <option dataValue="43523454232">Third Option</option>
                                    <option dataValue="vxvbvbx">Fourth Option</option>
                                    <option dataValue="@agsfdg">Darth Vader</option>
                                </ReactMaterialSelect>

                                {this.renderObject(this.state.selected3)}

                                <Highlight className="html">
                                    {`<ReactMaterialSelect label="ksdahfhf awef" defaultValue="@#!$RGSAFSDF" resetLabel="Join to the dark side" onChange={this.callbackFunction3}>
    <option dataValue="@#!$RGSAFSDF">First Option</option>
    ...
</ReactMaterialSelect>`}
                                </Highlight>
                            </section>
                        </Cell>
                    </Grid>
               </Content>
           </Layout>
        )
    }
}

export default Example
