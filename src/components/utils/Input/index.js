import { TextInput } from 'react-native-paper';
import { colors } from '../../../constants';

export default function Input({ label, placeholder, state, setState }) {
  return (
    <TextInput
      mode="flat"
      style={{ backgroundColor: 'white' }}
      placeholder={placeholder}
      label={label}
      value={state}
      onChangeText={(text) => setState(text)}
      right={<TextInput.Icon icon="close" size={15} color={colors.gray[600]} />}
    />
  );
}
