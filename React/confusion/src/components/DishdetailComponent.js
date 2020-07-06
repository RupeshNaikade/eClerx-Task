import React from 'react'
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay,CardText} from 'reactstrap';


class DishDetail extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return  (
     <div className="row">
         <div className="col-12 col-md-5 m-1">
         <Card>
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
            </Card>
         </div>
         <div className="col-12 col-md-5 m-1">
           <b>Comments</b>
             {this.props.dish.comments.map( comment => {
                 return(
                     <div>
                         <p>{comment.comment}</p>
                         <p>--{comment.author} , {comment.date}</p>
                     </div>
                 );
             })}
         </div>
     </div>
       

            );
    }
}

export default DishDetail ;