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

## All parameters:
    <ReactMaterialSelect ...>

parameter | description | is required
:-: | :-: | :-:
onChange | callback function (function) | no
defaultValue | start value. One of dataValue keys. Default: null (string) | no
label | label for select. Default: null (string) | no
resetLabel | label for reset select value. Default: 'No value' (string) it also can be boolean value "false" | no


    <option ...>


parameter | description | is required
:-: | :-: | :-:
dataValue | selected value (string) | yes


## Basic Usage:

It should looks like below:

```
import React, {Component} from 'react'
import ReactMaterialSelect from 'react-material-select'
import 'react-material-select/lib/css/reactMaterialSelect.css'

class Example extends Component {
    render() {
        return (
            <ReactMaterialSelect>
                <option dataValue="Star Wars">Darth Vader</option>
                ...
            </ReactMaterialSelect>
        )
    }
}
```


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
                <option dataValue="Star Wars">Darth Vader</option>
                ...
            </ReactMaterialSelect>
            <button onClick={this.getValue.bind(this)}>Get value and label from select</button>
        )
    }
}
```

## Get value from callback function (with all props)

```
import React, {Component} from 'react'
import ReactMaterialSelect from 'react-material-select'
import 'react-material-select/lib/css/reactMaterialSelect.css'

constructor() {
    super()

    this.state = {
        object: {},
    }

    this.callbackFunction = this.callbackFunction.bind(this)
}

callbackFunction(selected) {
    this.setState({object: selected})
}

class Example extends Component {
    render() {
        return (
            <ReactMaterialSelect label="Choose favourite film character" defaultValue="The Godfather" resetLabel="None of them" onChange={this.callbackFunction}>
                <option dataValue="The Godfather">Vito Corleone</option>
                ...
            </ReactMaterialSelect>
        )
    }
}
```

---

# Contributing

To remember how to do it ;)

1. change version of the package
2. `npm run compile`
3. `npm run build`
4. git commit
5. `npm publish`
