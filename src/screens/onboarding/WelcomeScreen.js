import React from 'react';
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

const WelcomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Gender');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Text style={styles.logoMain}>Fit</Text>
          <Text style={styles.logoAccent}>It</Text>
          <Text style={styles.tagline}>Fit Your Health</Text>
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Bottom Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleGetStarted}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.spacing[5],
  },
  logoSection: {
    alignItems: 'center',
  },
  logoMain: {
    fontSize: SIZES.font[4xl],
    fontWeight: '600',
    color: COLORS.gray800,
    letterSpacing: 1,
  },
  logoAccent: {
    fontSize: SIZES.font[4xl],
    fontWeight: '600',
    color: COLORS.orange,
    marginLeft: SIZES.spacing[1],
  },
  tagline: {
    fontSize: SIZES.font.base,
    color: COLORS.gray600,
    marginTop: SIZES.spacing[2],
    fontWeight: '400',
  },
  button: {
    width: width - SIZES.spacing[10],
    paddingVertical: SIZES.spacing[3] + 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.spacing[10],
  },
  buttonText: {
    fontSize: SIZES.font.lg,
    fontWeight: '600',
    color: COLORS.textInverse,
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

export default WelcomeScreen;
