import React, { Component } from 'react'

class Card extends Component {
    render() {
        const { pets } = this.props
        return (
            <div className="card">
                {pets.map((pet, index) => {
                    return <div key={index} className="card__box">
                        <img src={pet.image} alt="" />
                        <h4>{pet.name}</h4>
                        <h4>{pet.age}</h4>
                    </div>
                })}
          </div>
        );
    }
  
}

export default Card
