import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native';
import React, { useState }  from 'react';

export default function CourseInput({ visible, onAddCourse, onCancel }) {

    const [enteredCourseText, setEnteredCourseText] = useState('');


    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText('');
        
    };
   
  return (
    <Modal
        animationType="slide"
        visible={visible}
      >
          
          <View style={styles.inputContainer}>
              <Image style={styles.image} source={require('../assets/images/ÇÖZÜM.png')} />

              <TextInput
                  style={styles.textInput}
                  placeholder="Yeni Kurs Ekle "
                  value={enteredCourseText}
                  onChangeText={(text) => setEnteredCourseText(text)}
              />
              
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
                      <Button 
                          title="İptal Et"
                          color="red"
                          onPress={onCancel}
                      />

                  </View>
                  
                  <View style={styles.button}>
                      <Button 
                          title="Ekle"
                          color="blue"
                          onPress={addCourseHandler}
                      />

           </View>
            
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        padding:15
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
        margin:20
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 10,        
        borderColor: 'grey'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:15,
    },
    button: {
        paddingHorizontal: 10,
        width: 100,
        
    }

});
