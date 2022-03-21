import { Pressable, StyleSheet, Text, View } from 'react-native';

interface NavbarProps {
  title?: string;
  onPress: () => void;
}

export const Navbar = ({title, onPress}: NavbarProps) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={{padding: 8}} onPress={onPress}>
        <Text style={styles.delete}>Delete all</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 18,
    height: 85,
    width: '100%',
  },
  title: {
    fontSize: 26,
    color: '#fff'
  },
  delete: {
    fontSize: 18,
    color: 'red',
  },
});