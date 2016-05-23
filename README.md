# React Material Select

### I just wanted to have React select element in the Material Design. So I did it.

---

# Installation


## Install dependencies
$ `npm install`

---

# Documentation

## Basic Usage

### Required options:
    ReactMaterialSelect:
        onChange: callback function (function)

    option element:
        dataValue: selected value (string)

It should looks like below:

```
import React, {Component} from 'react'
import ReactMaterialSelect from 'components/ReactMaterialSelect'

callbackFunction() { ... }

class Example extends Component {
    render() {
        return (
            <ReactMaterialSelect onChange={this.callbackFunction}>
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
        resetLabel: label for reset select value. Default: 'Reset Select' (string)

    option element
        dataValue: selected value (string)

---

# Development

Run locally
$ `npm run dev`

Make build
$ `npm run build`

---

### Linters

    Atom editor:

        Eslinter for JavaScripts: https://atom.io/packages/linter-eslint

        Stylelinter for Css: https://atom.io/packages/linter-stylelint
