import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  error: {
    color: '#f090a0',
    textAlign: 'center',
  },
  item: {
    marginTop: 4,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    padding: 4,
  },
  from: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fromName: {
    fontWeight: 'bold',
  },
  fromPhone: {
    fontWeight: 'bold',
    fontSize: 10,
    textAlignVertical: 'bottom',
    paddingLeft: 4,
  },
  messageHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
