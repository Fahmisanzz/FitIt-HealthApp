import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

const GenderScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleNext = () => {
    if (selectedGender) {
      navigation.navigate('Birthdate');
    }
  };

  const GenderOption = ({ label, icon, value, isSelected, onPress }) => (
    <TouchableOpacity
      style={[
        styles.optionButton,
        isSelected && styles.optionButtonSelected,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.iconText}>{icon}</Text>
      <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Which gender do you identify as</Text>

        {/* Spacer */}
        <View style={{ flex: 0.5 }} />

        {/* Gender Options */}
        <View style={styles.optionsContainer}>
          <GenderOption
            label="Male"
            icon="♂️"
            value="male"
            isSelected={selectedGender === 'male'}
            onPress={() => setSelectedGender('male')}
          />
          <GenderOption
            label="Female"
            icon="♀️"
            value="female"
            isSelected={selectedGender === 'female'}
            onPress={() => setSelectedGender('female')}
          />
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Next Button */}
        <TouchableOpacity
          style={[
            styles.button,
            !selectedGender && styles.buttonDisabled,
          ]}
          onPress={handleNext}
          disabled={!selectedGender}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2121',
    marginBottom: 40,
    marginTop: 20,
  },
  optionsContainer: {
    gap: 20,
    alignItems: 'center',
  },
  optionButton: {
    width: width - 80,
    paddingVertical: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
  optionButtonSelected: {
    borderColor: '#7C3AED',
    backgroundColor: '#F3E8FF',
  },
  iconText: {
    fontSize: 40,
    marginBottom: 12,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#626C6C',
  },
  optionLabelSelected: {
    color: '#7C3AED',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: '#D4D4D4',
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E5E5',
  },
  dotActive: {
    backgroundColor: '#7C3AED',
    width: 24,
  },
});

export default GenderScreen;
