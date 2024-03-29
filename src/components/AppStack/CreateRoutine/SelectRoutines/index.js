import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { withTheme } from "@theme/themeProvider";
import { getUserRoutines } from "@theme/queries";
import { CheckBox } from "react-native-elements";
import { AuthContext } from "@components/context";
import BackgroundContainer3 from "@components/BackgroundContainer3";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const LevelSelection = ({ navigation, theme }) => {
  const { getProfile } = React.useContext(AuthContext);
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("@profile").then((asyncprofile) => {
      var profile = JSON.parse(asyncprofile);
      var routines = getUserRoutines(profile);
      routines.map((routine, key) => {
        if (routine.type == "general") {
          routine.selected = true;
        } else {
          routine.selected = false;
        }
        routine.level = 1;
      });
      setRoutines(routines);
    });
  }, []);

  const updateSelectedRoutines = (key) => {
    let newStateRoutines = [...routines];
    newStateRoutines[key].selected = !routines[key].selected;
    setRoutines(newStateRoutines);
  };

  const updateLevelRoutines = (key, level) => {
    let newStateRoutines = [...routines];
    newStateRoutines[key].level = level;
    setRoutines(newStateRoutines);
  };

  const calculateTotal = () => {
    var time = 0;

    routines.map((routine, key) => {
      if (routine.selected) {
        time +=
          parseInt(routine.level) *
          (routine.exercisesLength * 20 + routine.exercisesLength * 10);
      }
    });

    return Math.trunc(time / 60);
  };

  return (
    <BackgroundContainer3>
      <View {...theme.Container}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#e5dfdf",
              fontFamily: "Raleway-Bold",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            Rutinas para usted
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#e5dfdf",
              fontFamily: "Raleway-Regular",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            Seleccione el nivel y las rutinas que desea realizar
          </Text>
        </View>
        <View style={{ textAlign: "left", width: "100%", flex: 3 }}>
          <ScrollView>
            {routines.map((routine, key) => {
              var time =
                routine.exercisesLength * 20 + routine.exercisesLength * 10;
              var level1 = `Nivel 1 (${Math.trunc(time / 60)}')`;
              var level2 = `Nivel 2 (${Math.trunc((time * 2) / 60)}')`;
              var level3 = `Nivel 3 (${Math.trunc((time * 3) / 60)}')`;
              return (
                <View key={key} style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <CheckBox
                      {...theme.CheckBox}
                      textStyle={{
                        color: "white",
                        fontWeight: "100",
                      }}
                      checked={routine.selected}
                      disabled={false}
                      title={routine.name}
                      onPress={() => updateSelectedRoutines(key)}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Picker
                      selectedValue={routine.level}
                      onValueChange={(itemValue, itemIndex) =>
                        updateLevelRoutines(key, itemValue)
                      }
                      style={{
                        height: 50,
                        marginHorizontal: 5,
                        color: "white",
                      }}
                    >
                      <Picker.Item label={level1} value="1" />
                      <Picker.Item label={level2} value="2" />
                      <Picker.Item label={level3} value="3" />
                    </Picker>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{ width: "100%", flex: 1, justifyContent: "flex-end" }}>
          <Text style={{ marginBottom: 10, textAlign: "right" }}>
            <Text
              style={{
                color: "#e5dfdf",
                fontFamily: "Raleway-Bold",
                fontSize: 17,
              }}
            >
              Tiempo total:{" "}
            </Text>
            <Text
              style={{ color: "#e5dfdf", fontSize: 17, fontWeight: "bold" }}
            >
              {calculateTotal()}'
            </Text>
          </Text>
          <Text
            style={{
              marginBottom: 10,
              textAlign: "center",
              borderColor: "rgb(65,189,252)",
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "rgb(65,189,252)",
                fontFamily: "Raleway-Regular",
                fontSize: 17,
              }}
            >
              VAS A NECESITAR UNA SILLA, UNA SOGA, UN BASTÓN Y UN LIBRO GRUESO
              PARA PISAR.
            </Text>
          </Text>
          <TouchableOpacity
            disabled={calculateTotal() == 0}
            style={[
              calculateTotal() == 0
                ? { backgroundColor: "rgba(65,189,252,.5)" }
                : { backgroundColor: "rgb(65,189,252)" },
              {
                elevation: 5,
                paddingVertical: 20,
                paddingHorizontal: 50,
                borderRadius: 5,
                alignItems: "center",
                marginVertical: 10,
              },
            ]}
            onPress={() => navigation.navigate("AddAccessory", { routines })}
          >
            <Text {...theme.TouchableOpacityText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundContainer3>
  );
};

export default withTheme(LevelSelection);
