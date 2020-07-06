import React from 'react';
import {Card,CardBody,CardTitle,CardImg,CardImgOverlay,CardText} from 'reactstrap'
import DishDetail from './DishdetailComponent';
class Menu extends React.Component{
    constructor(props)
    {
        super(props);
       this.state={
           selectedDish:null
       }
    }

    onDishSelected(dish)
    {
        this.setState({selectedDish : dish});
    }

    renderDish(dish)
    {
        if(dish!=null)
        {
          return  (<DishDetail dish={dish}></DishDetail>)
        }
        else{
           return <div></div>
        }
    }

    render()
    {
         const menu=this.props.dishes.map( dish => {
             return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
             )
         });
        return(
           <div className="container">
               <div className="row">
                        {menu}
               </div>
               <div>
               
               {this.renderDish(this.state.selectedDish)}
             
                      
               </div>
           </div>
        );
    }
}

export default Menu;