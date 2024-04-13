import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '#components/ScreenContent';

export default function Favorites() {
  return (
    <>
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/favorites.tsx" title="Favorites" />
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
