import React from "react";
import PropTypes from "prop-types";

/***
 * JSX 
 *  propertity_name=value 정의해 사용할 수 있다
 * 
 * 
 */

/**
 * props.fav 대신 es6문법을 이용해 {fav} 로 바로 가져오거나 사용할 수 있음
 * @param {name, picture, rating} param0 
 * @returns 
 */
function Food({name, picture, rating}){
  console.log(name);
  return (
  <div>
    <h2>{name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  )
}

const dish = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.6
  }
]

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>
}

/**
 * 
 */
Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// function App() {
//   return (
//     <div>
//      {dish.map(item => <Food key={item.id} name={item.name} picture={item.image} rating={item.rating}/>)}
//     {/* {dish.map(renderFood)} */}
//     </div>
//   );
// }

/**
 * react component
 * class react component는 return을 가지고 있지 않음
 * render method을 가지고 있음
 * react는 자동적으로 모든 class component의 render mothod을 실행한다.
 * class component 
 *  - state = object
 * state는 절대 직접 변경하지 마라
 * 
 * setState를 호출할때마다 새로운 state와 함께 render function이 호출됨
 * 
 * life cycle method
 *  기본적으로 react가 component를 생성하고 없애는 방법
 * 
 * mounting
 *  component가 생성될때
 *  componentDidMount() render 작동전 실행
 * 
 * updating
 *  component가 변경될때
 *  componentDidUpdate() render 작동후 실행
 * unmounting
 *  component가 죽을때
 */
class App extends React.Component{
  // state = {
  //   count: 0
  // }
  // render(){
    
  //   return <div>
  //     <h1>the number is {this.state.count}</h1>
  //     <button onClick={this.add}>Add</button>
  //     <button onClick={this.minus}>Minus</button>
  //   </div>      
  // }
  // add = () => {
  //   //현재 이 코드는 좋은 코드는 아님 state에 의존하고 있고 몇가지 성능 문제가 있음.
  //   //this.setState({count:this.state.count + 1});
  //   //이 방법이 state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
  //   this.setState(current => ({count:current.count + 1}));

  // };
  // minus = () => {
  //   //this.setState({count:this.state.count - 1});
  //   this.setState(current => ({count:current.count - 1}));
  // };
  state = {
    isLoading : true
  }
  render() {
    return <div>{}</div>
  }

}

export default App;
