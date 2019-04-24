import React from 'react';
import { Card, CardImg, CardText, CardBody, 
    CardTitle } from 'reactstrap';

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

const  DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <RenderComments comments={props.dish?props.dish.comments:null} />
            </div>
      </div>
    );
}

export default DishDetail;
