import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '#components/ScreenContent';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Home" />
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
