import React, { Component, Fragment } from 'react';
import { Form, FormControl, Button } from "react-bootstrap";

class Search extends Component {
    render() {
        return (
            <Fragment>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>

            </Fragment>
        )
    }
}

export default Search;
