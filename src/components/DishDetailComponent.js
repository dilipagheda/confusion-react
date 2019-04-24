import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, 
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments = (comments) => {
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
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {commentsJSX}
                    </ul>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    {this.renderComments(this.props.dish? this.props.dish.comments :null)}
                </div>
          </div>
        );
    }
}

export default DishDetail;
