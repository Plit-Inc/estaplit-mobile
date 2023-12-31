import { TextInput } from 'react-native-paper';
import { colors } from '../../../constants';

export default function Input({
  label,
  placeholder,
  fontSize,
  textColor,
  state,
  setState,
  withIcon,
}) {
  const clearInput = () => {
    setState('');
  };
  return (
    <TextInput
      mode="flat"
      style={{ backgroundColor: 'white', fontSize, marginBottom: 0 }}
      theme={{
        colors: {
          text: textColor,
        },
      }}
      placeholder={placeholder}
      label={label}
      value={state}
      onChangeText={(text) => setState(text)}
      right={
        withIcon ? (
          <TextInput.Icon
            icon="close"
            size={15}
            color={colors.gray[600]}
            onPress={clearInput}
          />
        ) : null
      }
    />
  );
}
