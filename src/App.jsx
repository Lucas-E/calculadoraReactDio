import React from "react";
import { useState } from "react";
import { Input } from "./components/Input/Input";
import { Container, Content, Grid } from "./style";
import { Fragment } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [operationString, setOperationString] = useState('0');

  const handleAddNumber = (number) => {
    if(operationString == '0' || operationString == 'Operação Inválida'){
      setOperationString(prev => `${number}`);
    }else{
      setOperationString(prev => `${prev}${number}`);
    }
  };
  const handleClear = () => {
    setOperationString('')
  }
  const handleDelete = () =>{
    let operationList = operationString.split('')
    operationList.pop()
    let newOperationString = operationList.join('')
    setOperationString(newOperationString)
  }
  const handleEqual = () => {
    setOperationString(prev => eval(prev))
  }
  const handlePercent = () => {
    setOperationString(prev => Number(prev) ? Number(prev/100) : 'Operação Inválida')
  }

  return (
    <Fragment>
      <Container>
        <Content>
          <Input value={operationString} />
          <Grid>
            <Button label="C" onClick={() => handleClear('')}/>
            <Button label="del" onClick={handleDelete}/>
            <Button label="%" onClick={handlePercent}/>
            <Button label="/" onClick={() => handleAddNumber('/')}/>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="*" onClick={() => handleAddNumber('*')}/>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={() => handleAddNumber('-')}/>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={() => handleAddNumber('+')}/>
            <div></div>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="=" onClick={handleEqual}/>
          </Grid>
        </Content>
      </Container>
    </Fragment>
  );
};

export default App;
