import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 320px;
  height: 320px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const RegisterTitle = styled.h1`
  font-size: 36px;
  color: #334155;
  font-weight: 700;
`
export const Label = styled.label`
  font-size: 14px;
  color: #64748b;
  font-weight: 700;
`

export const Input = styled.input`
  width: 280px;
  height: 40px;
  margin-bottom: 30px;
`
export const Select = styled.select`
  width: 280px;
  height: 40px;
  font-weight: 400;
  outline: none;
  margin-bottom: 30px;
`
export const Option = styled.option`
  font-weight: 300;
`
export const Button = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  width: 120px;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
`
