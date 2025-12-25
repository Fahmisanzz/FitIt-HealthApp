import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

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
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoSection: {
    alignItems: 'center',
  },
  logoMain: {
    fontSize: 48,
    fontWeight: '600',
    color: '#1F2121',
    letterSpacing: 1,
  },
  logoAccent: {
    fontSize: 48,
    fontWeight: '600',
    color: '#FF6B35',
    marginLeft: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#626C6C',
    marginTop: 8,
    fontWeight: '400',
  },
  button: {
    width: width - 40,
    paddingVertical: 14,
    backgroundColor: '#7C3AED',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
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

export default WelcomeScreen;
