import React from 'react'
class HogTile extends React.Component {
  state = {
      clicked: false
    };

clickhandler = () => {
  console.log(this.state)
    this.setState({ clicked: !this.state.clicked });
}
    render() {
        const { hog, key } = this.props
        return(
          !this.state.clicked ?
            <div className = "HogTile">
                <h2>{hog.name}</h2>
                <img onClick={this.clickhandler}src={`/hog-imgs/${hog.name.split(' ').join('_').toLowerCase()}.jpg`} alt=""/>
            </div>
            :
            <div className = "HogTile">
                <h2>{hog.name}</h2>
                <img onClick={this.clickhandler}src={`/hog-imgs/${hog.name.split(' ').join('_').toLowerCase()}.jpg`} alt=""/>
                 <p><b>name: {hog.name }</b></p>
                 <p><b>specialty: {hog.specialty}</b></p>
                 <p><b>greased: {hog.greased}</b></p>
                 <p><b>weight: {hog.weight}</b></p>
                 <p><b>highest medal achieved: {hog.highest}</b></p>

            </div>
        )
    }
}
export default HogTile
