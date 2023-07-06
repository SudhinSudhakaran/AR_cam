import React, {FunctionComponent, Ref} from 'react';
import {View} from 'react-native';
import {HelperText, Text, TextInput} from 'react-native-paper';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Themes} from '../../themes';

interface InputFieldProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  validationText: string;
  ref: Ref<TextInput>;
  error: boolean;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  label,
  value,
  setValue,
  validationText,
  ref,
  error,
}) => {
  return (
    <View
      style={{
        marginTop: responsiveHeight(0),
      }}>
      <TextInput
        ref={ref}
        mode="outlined"
        style={{
          backgroundColor: Themes.Colors.WHITE_COLOR,
          width: responsiveWidth(90),
          alignSelf: 'center',
        }}
        activeUnderlineColor={'green'}
        error={error}
        label={<Text style={{}}>{label}</Text>}
        value={value}
        onChangeText={text => setValue(text)}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoComplete={'off'}
        autoCorrect={false}
        returnKeyType={'next'}
        onSubmitEditing={() => {
          // passwordRef.current.focus();
        }}
      />
      <HelperText
        type="error"
        visible={error}
        style={{fontSize: 10, marginLeft: responsiveWidth(3)}}>
        {validationText}
      </HelperText>
    </View>
  );
};

export default InputField;
