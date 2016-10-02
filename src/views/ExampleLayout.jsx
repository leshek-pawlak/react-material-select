import React, { Component } from 'react'
import { Layout, Navigation, Header, Content, Grid, Cell } from 'react-mdl'
import Example from 'views/Example'

class ExampleLayout extends Component {
    render() {
        return (
            <Layout fixedHeader>
               <Header title="React Material Select">
                   <Navigation>
                       <a href="#example1">Minimal</a>
                       <a href="#example2">Default</a>
                       <a href="#example3">Maximum</a>
                   </Navigation>
               </Header>
               <Content>
                    <Grid>
                        <Cell col={12}>
                            <Example id="example1" />
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={12}>
                            <Example id="example2" />
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={12}>
                            <Example id="example3" />
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={12}>
                            <Example id="example4" />
                        </Cell>
                    </Grid>
               </Content>
           </Layout>
        )
    }
}

export default ExampleLayout
