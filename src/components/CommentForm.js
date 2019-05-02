import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label,Row,Col,Input } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    state = {
        modal:false
    }
    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render(){
        return (
            <>
                <Button outline color="secondary" onClick={this.toggle}>
                    <span className="fa fa-pencil"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="col-12">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select className="form-control" 
                                                model=".rating" name="rating" md={12}
                                                >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </Row>
                                <Row className="form-group">
                                        <Label htmlFor="name">Your Name</Label>
                                        <Control.text model=".name" name="name" md={12}
                                            placeholder="Your Name"  className="form-control"
                                            validators={{
                                                minLength: minLength(2)
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                            }}
                                        />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="8" className="form-control" md={12}>
                                    </Control.textarea>
                                </Row>
                                <Row className="form-group">
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Row>
                            </LocalForm>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentForm;
