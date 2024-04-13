import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '#components/ScreenContent';

export default function Tickets() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/tickets.tsx" title="My Tickets" />
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
