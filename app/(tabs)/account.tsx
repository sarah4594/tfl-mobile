import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '#components/ScreenContent';

export default function Account() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/account.tsx" title="My Account" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
