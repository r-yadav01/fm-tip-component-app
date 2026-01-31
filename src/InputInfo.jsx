import styled from 'styled-components';

export function InputInfo({ about, iconPath, value, onValueChange, errorMsg }) {
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

      {/* {value !== '' && !value && <Error error={value}>{errorMsg}</Error>} */}

      <ImageWrapper>
        <img
          src={`./src/assets/${iconPath}`}
          alt={iconPath}
        />
      </ImageWrapper>
    </FormField>
  );
}

// const Error = styled.p`
//   /* display: none; */
//   font-size: 0.75rem;
//   color: red;
//   display: ${(p) => (p.error ? 'none' : 'block')};
// `;

const FormField = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  color: hsl(186, 14%, 43%);
`;

const TextInput = styled.input`
  text-align: right;
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  background-color: hsl(189, 47%, 97%);
  height: 2rem;
  font-size: 1.25rem;
  color: hsl(183, 100%, 15%);
  font-weight: 600;
  border: 1px solid hsl(189, 40%, 90%);
`;

const ImageWrapper = styled.span`
  position: absolute;
  top: 2rem;
  left: 0.75rem;
  height: 0.75rem;
`;
