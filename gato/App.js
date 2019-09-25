import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';

export default function App (){

  const [currentPlayer, setCurrentPlayer] = useState(1)

  const [gameState, setGameState] = useState ([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const initGame = () => {
    setGameState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
    setCurrentPlayer(1)
  }


  const onPressSign = (row, col) =>{
    let valueTile = gameState[row][col];
    if (valueTile !== 0) {return;}


    //Position
    let positionArr = gameState
    positionArr[row][col] = currentPlayer;
    setGameState(positionArr);
    
    //switch  Player
    let nextPlayer = currentPlayer * -1;
    setCurrentPlayer(nextPlayer);
    
    //winner
    let winPlayer = getWinner();

    if (winPlayer == 1) {
      Alert.alert("Gana el gato!!!");
      initGame();
    } 
    else if (winPlayer == -1) {
      Alert.alert("Gana ella!!!");
      initGame();
    }
    
     else if (winPlayer == 0){
       Alert.alert("Empate!!")
       initGame();
     }
    
  }

//check!
  let renderSigns = (row,col) =>{
    let gameValue = gameState[row][col];
    switch(gameValue){
      case 1: return <Image source={require('./assets/gato.png')} style={styles.gridImage} />
      case -1: return <Image source={require('./assets/llanto.png')} style={styles.gridImage} />
      default: return <View/>

    }
  }

  const getWinner = () => {
    const sumGridValue = 3;
    let positionArr = gameState;
    let sum;

    if (positionArr[0].indexOf(0) === -1 && positionArr[1].indexOf(0) === -1 && positionArr[2].indexOf(0) === -1){ 
    //row sum
      for (let i=0; i < sumGridValue; i++) {  
        sum = positionArr [i][0] + positionArr [i][1] + positionArr [i][2];
        if (sum == 3) {return 1; }
        else if (sum == -3) { return -1; }
        else if (sum == -1 || sum == 1) { return 0; }      
      }
    //col sum
      for (let i=0; i < sumGridValue; i++) {
        sum = positionArr [0][i] + positionArr [1][i] + positionArr [2][i];
        if (sum == 3) {return 1; }
        else if (sum == -3) { return -1; }
        else if (sum == -1 || sum == 1) { return 0; }
      }
      // Diag sum
      sum = positionArr [0][0] + positionArr [1][1] + positionArr [2][2];
      if (sum == 3) {return 1; }
      else if (sum == -3) { return -1; }  

      sum = positionArr [2][0] + positionArr [1][1] + positionArr [0][2];
      if (sum == 3) {return 1; }
      else if (sum == -3) { return -1; }
       
      return 99

    } else {
        for (let i=0; i < sumGridValue; i++) {  
          sum = positionArr [i][0] + positionArr [i][1] + positionArr [i][2];
          if (sum == 3) {return 1; }
          else if (sum == -3) { return -1; }
        }
        //col sum
        for (let i=0; i < sumGridValue; i++) {
          sum = positionArr [0][i] + positionArr [1][i] + positionArr [2][i];
          if (sum == 3) {return 1; }
          else if (sum == -3) { return -1; }
        }
        
        sum = positionArr [0][0] + positionArr [1][1] + positionArr [2][2];
        if (sum == 3) {return 1; }
        else if (sum == -3) { return -1; }  

        sum = positionArr [2][0] + positionArr [1][1] + positionArr [0][2];
        if (sum == 3) {return 1; }
        else if (sum == -3) { return -1; }
       
        return 99
      
      }

 }

  
  return (
    
    <View style={styles.container}>
      
      <View style={styles.backImg}>
        <Image source={require('./assets/background.jpg')}/>
      </View>

      <View style={styles.title}>
        <Image source={require('./assets/title.png')} style={styles.imgtitle}/>
      </View>
    
      <View style={styles.rows}>
        <TouchableOpacity onPress={() => onPressSign(0, 0)} style={[styles.grid, { borderLeftWidth:0, borderTopWidth:0 }]}>
          {renderSigns(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSign(0, 1)}style={[styles.grid, { borderTopWidth:0 }]}>
          {renderSigns(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSign(0, 2)} style={[styles.grid, { borderTopWidth:0, borderRightWidth:0 }]}>
          {renderSigns(0, 2)}
        </TouchableOpacity>
      </View>
     
      <View style={styles.rows}>
        <TouchableOpacity onPress={() => onPressSign(1, 0)} style={[styles.grid, { borderLeftWidth:0 }]}>
          {renderSigns(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSign(1, 1)} style={styles.grid}>
          {renderSigns(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSign(1, 2)} style={[styles.grid, { borderRightWidth:0 }]}>
          {renderSigns(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity onPress={() => onPressSign(2, 0)} style={[styles.grid, { borderLeftWidth:0, borderBottomWidth:0 }]}>
          {renderSigns(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSign(2, 1)} style={[styles.grid, { borderBottomWidth:0 }]}>
          {renderSigns(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSign(2, 2)} style={[styles.grid, { borderBottomWidth:0, borderRightWidth:0 }]}>
          {renderSigns(2, 2)}
        </TouchableOpacity>
      </View>

      <View style={styles.btnProp}>
        <TouchableOpacity onPress={() => {initGame()}}> 
          <Text style={styles.restartButton}>Reiniciar Juego</Text>
        </TouchableOpacity>
       </View>
    
    </View>

  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b347a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  grid: {
    borderWidth: 2,
    borderColor: '#e8e1d1',
    width:100,
    height:100,
  },

  rows:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  gridImage:{
    flex:1,
    width:85,
    height:85,
    resizeMode:'contain',
    marginLeft: 10,
    borderColor:'#474744',
    },

  imgTitle:{
    flex:1,
    alignItems:'center',
  },

  btnProp: {
     marginTop: 100,
     marginBottom: 30,
  },

  restartButton: {
    backgroundColor: '#f05c15',
    borderRadius: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e8e1d1',
    textAlign: 'center',
    width: 200,
    height: 60,
    paddingVertical: 14,
    
  },

  backImg:{
    flex: 1,
    resizeMode:'cover', 
  },
});