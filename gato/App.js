import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gameState:[
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer:1,

    }
  }

  componentDidMount() {
    this.initGame();
  }

  initGame = () =>{
    this.setState ({gameState:
      [ [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],

      ]
    });
  };

  onPressSign = (row, col) =>{
    let valueTile = this.state.gameState[row][col];
    if (valueTile !== 0) {return;}
    
    let currentPlayer =this.state.currentPlayer;

    //Position

    let positionArr = this.state.gameState.slice();
    positionArr[row][col] = currentPlayer;
    this.setState({gameState:positionArr});

    //switch  Player
    let nextPlayer = (currentPlayer == 1)? -1: 1;
    this.setState({currentPlayer: nextPlayer});

   
  }

  renderSings = (row,col) =>{
    let gameValue = this.state.gameState[row][col];
    switch(gameValue){
      case 1: return <Text style={styles.gridX}>X</Text>;
      case -1: return <Text style={styles.gridX}>O</Text>
      default: return <View/>

    }
  }

  render (){
  return (
    <View style={styles.container}>
    
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.onPressSign(0, 0)} style={[styles.grid, { borderLeftWidth:0, borderTopWidth:0 }]}>
          {this.renderSings(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressSign(0, 1)}style={[styles.grid, { borderTopWidth:0 }]}>
          {this.renderSings(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressSign(0, 2)} style={[styles.grid, { borderTopWidth:0, borderRightWidth:0 }]}>
          {this.renderSings(0, 2)}
        </TouchableOpacity>
      </View>
     
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.onPressSign(1, 0)} style={[styles.grid, { borderLeftWidth:0 }]}>
          {this.renderSings(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressSign(1, 1)} style={styles.grid}>
          {this.renderSings(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressSign(1, 2)} style={[styles.grid, { borderRightWidth:0 }]}>
          {this.renderSings(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.onPressSign(2, 0)} style={[styles.grid, { borderLeftWidth:0, borderBottomWidth:0 }]}>
          {this.renderSings(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressSign(2, 1)} style={[styles.grid, { borderBottomWidth:0 }]}>
          {this.renderSings(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressSign(2, 2)} style={[styles.grid, { borderBottomWidth:0, borderRightWidth:0 }]}>
          {this.renderSings(2, 2)}
        </TouchableOpacity>
      </View>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  grid: {
    borderWidth: 5,
    borderColor: '#7a0280',
    width:100,
    height:100,
  },

  gridX:{
    fontSize: 80,
    flex:1,
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
  },

  gridO:{
    fontSize: 80,
    flex:1,
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
  }

});