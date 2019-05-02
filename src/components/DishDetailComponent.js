import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Button, Row, Label,Modal,ModalHeader,ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => val && (val.length < len);

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
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: "Must be less than 15 characters"
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

function RenderDish(props) {
    if (props.dish != null)
    return(
        <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name} />
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
    );
else
    return(
        <div></div>
    );

}

function RenderComments({comments}) {
    if(comments != null){
        const commentsJSX = comments.map(comment=>{
            const date=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
            return (
                    <li key={comment.id} class="mb-4">
                        <p>{comment.comment}</p>
                        <p>{`-- ${comment.author} ${date}`}</p>
                    </li>
            );
        });
        return (
            <>
                <ul class="list-unstyled">
                    {commentsJSX}
                </ul>
                <CommentForm />
            </>
        );
    }else{
        return (
            <div></div>
        );
    }
}

const  DishDetail = (props) => {
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments comments={props.comments} />
            </div>
            
        </div>
        </div>
    );
}

export default DishDetail;
