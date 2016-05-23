# React Material Select

### I just wanted to have React select element in the Material Design. So I did it.

---

# Installation

$ `npm i react-material-select --save`

---

# Examples

http://react-material-select.netlify.com/

---

# Documentation

## Basic Usage

### Required options:
    option element:
        dataValue: selected value (string)

It should looks like below:

```
import React, {Component} from 'react'
import ReactMaterialSelect from 'react-material-select'
import 'react-material-select/lib/css/reactMaterialSelect.css'

class Example extends Component {
    render() {
        return (
            <ReactMaterialSelect>
                <option dataValue="@#!$RGSAFSDF">First Option</option>
                ...
            </ReactMaterialSelect>
        )
    }
}
```

## All options:
    ReactMaterialSelect
        onChange: callback function (function)
        defaultValue: start value. One of dataValue keys. Default: null (string)
        label: label for select. Default: null (string)
        resetLabel: label for reset select value. Default: 'No value' (string)

    option element
        dataValue: selected value (string)

## Get value and label from refs

```
import React, {Component} from 'react'
import ReactMaterialSelect from 'react-material-select'
import 'react-material-select/lib/css/reactMaterialSelect.css'

getValue() {
    this.setState({
        selected1: {
            value: this.refs.firstselect.getValue(),
            label: this.refs.firstselect.getLabel(),
        },
    })
}

class Example extends Component {
    render() {
        return (
            <ReactMaterialSelect ref="firstselect">
                <option dataValue="@#!$RGSAFSDF">First Option</option>
                ...
            </ReactMaterialSelect>
            <button onClick={this.getValue.bind(this)}>Get value and label from select</button>
        )
    }
}
```
