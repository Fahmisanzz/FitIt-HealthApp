// Date helpers
export const formatDate = (day, month, year) => {
  const date = new Date(`${month} ${day}, ${year}`);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const calculateAge = (year) => {
  const currentYear = new Date().getFullYear();
  return currentYear - parseInt(year);
};

// Weight helpers
export const calculateBMI = (weight, height) => {
  // height in cm
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

// Storage helpers (for future use with AsyncStorage)
export const saveUserProfile = async (profile) => {
  try {
    // TODO: Implement AsyncStorage
    console.log('Profile saved:', profile);
    return true;
  } catch (error) {
    console.error('Error saving profile:', error);
    return false;
  }
};

export const getUserProfile = async () => {
  try {
    // TODO: Implement AsyncStorage
    return null;
  } catch (error) {
    console.error('Error getting profile:', error);
    return null;
  }
};

// Validation helpers
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidWeight = (weight) => {
  const w = parseFloat(weight);
  return w > 0 && w < 500;
};

export const isValidHeight = (height) => {
  const h = parseFloat(height);
  return h > 50 && h < 300;
};
