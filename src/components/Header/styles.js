import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 80px;
  background: #242424;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

export const Form = styled.form`
  width: 500px;
  height: 40px;
  display: flex;
  margin-left: 50%;
  margin-right: 40px;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'input',
  disabled: props.loading,
}))`
  background-color: #f38fff;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  & [disabled] {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
