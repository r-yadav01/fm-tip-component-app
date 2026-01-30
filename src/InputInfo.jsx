import styled from 'styled-components';

export function InputInfo({ about, iconPath, value, onValueChange }) {
  const inputId = about.replace(/\s+/g, '');

  return (
    <FormField>
      <Label htmlFor={inputId}>{about}</Label>
      <TextInput
        type='number'
        id={inputId}
        value={value === 0 ? '' : value}
        placeholder='0'
        onChange={(e) => onValueChange(Number(e.target.value))}
      />
      <ImageWrapper>
        <img
          src={`./src/assets/${iconPath}`}
          alt={iconPath}
        />
      </ImageWrapper>
    </FormField>
  );
}

const FormField = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;

  * {
    /* outline: 1px dashed red; */
  }
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
`;

const TextInput = styled.input`
  text-align: right;
  /* border: none; */
  border-radius: 0.25rem;
  padding: 0.25rem;
`;

const ImageWrapper = styled.span`
  position: absolute;
  top: calc(0.75rem + 1.15rem);
  left: 0.5rem;
  height: 0.75rem;
`;
