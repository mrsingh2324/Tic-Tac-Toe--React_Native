import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [nameX, setNameX] = useState("Rohan");
  const [nameO, setNameO] = useState("Rajat");
  const [scoreX,setScoreX] = useState(0);
  const [scoreO,setScoreO] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [turn, setTurn] = useState("None");
  const [value, setValue] = useState("X");
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [array, setArray] = useState(arr);
  const [disabled , setDisabled] = useState([false,false,false,false,false,false,false,false,false]);

  const onClick = (key) => {
    setDisabled(...disabled, disabled[key]=true);
    console.log("pressed");
    setClicked(clicked + 1);
    if (clicked >=9) {
      setTurn("Game Over")
    }
    if (array[key - 1] == 0) {
      array[key - 1] = value;
      setArray(array);
    }

    console.log(array);
  };
  useEffect(() => {
    if (clicked % 2 == 0) {
      setTurn("Rohan");
      setValue("X");
    } else {
      setTurn("Rajat");
      setValue("O");
    }
  }, [clicked]);
  // function for checking winner 
  const checkWinner = () => {
    if (array[0] == array[1] && array[1] == array[2] && array[0] != 0) {
      if (array[0] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    } 
    else if (array[3] == array[4] && array[4] == array[5] && array[3] != 0) {
      if (array[3] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    else if (array[6] == array[7] && array[7] == array[8] && array[6] != 0) {
      if (array[6] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    else if (array[0] == array[3] && array[3] == array[6] && array[0] != 0) {
      if (array[0] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    else if (array[1] == array[4] && array[4] == array[7] && array[1] != 0) {
      if (array[0] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    else if (array[2] == array[5] && array[5] == array[8] && array[2] != 0) {
      if (array[0] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    else if (array[0] == array[4] && array[4] == array[8] && array[0] != 0) {
      if (array[0] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    else if (array[2] == array[4] && array[4] == array[6] && array[2] != 0) {
      if (array[0] == "X") {
        setTurn("Rohan Won");
        setScoreX(scoreX+1);
      } else {
        setTurn("Rajat Won");
        setScoreO(scoreO+1)
      }
    }
    console.log("winner function runs")
    
  }
  // function for reseting the game
  const reset = () => {
    setArray(arr);
    setClicked(0);
    setTurn("None");
  };

  return (
    <SafeAreaView>
      <View style={styles.header_box}>
        <Text style={styles.header}>Tic Tac Toe</Text>
      </View>
      <View style={styles.board}>
        <View style={styles.boardHeader}>
          <Text style={styles.turn}>{turn}'s Turn</Text>
        </View>
        <View style={styles.square}>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.box}
              key={1}
              disabled={disabled[key]}
              onPress={() => {
                onClick(1);
              }}
            >
              <Text style={styles.boxText}>{array[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              key={2}
              disabled={disabled[key]}
              onPress={() => {
                onClick(2);
              }}
            >
              <Text style={styles.boxText}>{array[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              key={3}
              disabled={disabled[key]}
              onPress={() => {
                onClick(3);
              }}
            >
              <Text style={styles.boxText}>{array[2]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.box}
              key={4}
              disabled={disabled[key]}
              onPress={() => {
                onClick(4);
              }}
            >
              <Text style={styles.boxText}>{array[3]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              key={5}
              disabled={disabled[key]}
              onPress={() => {
                onClick(5);
              }}
            >
              <Text style={styles.boxText}>{array[4]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              key={6}
              disabled={disabled[key]}
              onPress={() => {
                onClick(6);
              }}
            >
              <Text style={styles.boxText}>{array[5]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.box}
              key={7}
              disabled={disabled[key]}
              onPress={() => {
                onClick(7);
              }}
            >
              <Text style={styles.boxText}>{array[6]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              key={8}
              disabled={disabled[key]}
              onPress={() => {
                onClick(8);
              }}
            >
              <Text style={styles.boxText}>{array[7]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              key={9}
              disabled={disabled[key]}
              onPress={() => {
                onClick(9);
              }}
            >
              <Text style={styles.boxText}>{array[8]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boardfooter}>
          <View style={styles.footerLeft}>
            <Text style={styles.player}>
              {nameX} : {scoreX}
            </Text>
          </View>
          <View style={styles.footerRight}>
            <Text style={styles.player}>
              {nameO} : {scoreO}
            </Text>
          </View>
        </View>
        <View>
          <Text>Winner : {}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.restartButton}>
        <Text style={styles.resetText} onPress={()=>restart()}>Start Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetText} onPress={()=>reset()}>Reset Scores</Text>
      </TouchableOpacity>
      {/* <View style={styles.rights}>
        <Text style={styles.footer}>Made by Satyam</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  header_box: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "blue",
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
  },
  header: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  turn: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  board: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "#ccc",
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 20,
    height: 520,
    justifyContent: "space-between",
  },
  boardHeader: {
    height: 50,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: "100%",
    height: 350,
    backgroundColor: "green",
    marginTop: 20,
    alignItems: "center",
    padding: 20,
  },
  boardfooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    margin: 20,
    backgroundColor: "white",
  },
  footerLeft: {
    width: "50%",
    alignItems: "center",
  },
  footerRight: {
    width: "50%",
    alignItems: "center",
  },
  player: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  restartButton: {
    backgroundColor: "green",
    // width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  resetButton: {
    backgroundColor: "red",
    // width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: 0,
  },
  resetText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  col: {
    flexDirection: "row",
    height: "34%",
    width: "100%",
    justifyContent: "space-between",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    margin: 0,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  boxText: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
