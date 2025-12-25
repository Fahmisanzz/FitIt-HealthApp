import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';

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
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.spacing[5],
    paddingVertical: SIZES.spacing[7],
  },
  title: {
    fontSize: SIZES.font['3xl'],
    fontWeight: '600',
    color: COLORS.gray800,
    marginBottom: SIZES.spacing[10],
    marginTop: SIZES.spacing[5],
  },
  optionsContainer: {
    gap: SIZES.spacing[5],
    alignItems: 'center',
  },
  optionButton: {
    width: width - SIZES.spacing[20],
    paddingVertical: SIZES.spacing[7] + 2,
    borderRadius: SIZES.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 2,
    borderColor: COLORS.gray200,
  },
  optionButtonSelected: {
    borderColor: COLORS.primary,
    backgroundColor: '#F3E8FF',
  },
  iconText: {
    fontSize: 40,
    marginBottom: SIZES.spacing[3],
  },
  optionLabel: {
    fontSize: SIZES.font.lg,
    fontWeight: '500',
    color: COLORS.gray600,
  },
  optionLabelSelected: {
    color: COLORS.primary,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: SIZES.spacing[5],
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray300,
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 28,
    color: COLORS.textInverse,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SIZES.spacing[2],
    paddingBottom: SIZES.spacing[5],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gray200,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
    width: 24,
  },
});

export default GenderScreen;
