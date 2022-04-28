import React, { useState } from 'react';
import styles from './App.module.css';
import './App.module.css';
import poweredImage from './assets/img/powered.png'
import leftArrowImage from './assets/img/leftarrow.png'
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  function handleCalculateButton(){
    if(heightField && weightField){
      setShowItem(calculateImc(heightField,weightField));
    }else{
      alert('Digite todos os campos');
    }
  }

  function handleBackButton(){
    setShowItem(null);
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
          <div className={styles.headerContainer}>
            <img src={poweredImage} alt="" width={150}/>
          </div>
      </header>
      <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule seu IMC.</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea , parâmetro adota pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa. </p>
            <input
              type="number" 
              placeholder='Digite a sua Altura. Ex: 1.5 (em métros)' 
              value={heightField > 0 ? heightField : ''} 
              onChange={e => setHeightField(e.target.valueAsNumber)}
              disabled={showItem ? true : false}
            />
            <input
              type="number" 
              placeholder='Digite o seu Peso. Ex: 70.5 (em kg)' 
              value={weightField > 0 ? weightField : ''} 
              onChange={e => setWeightField(e.target.valueAsNumber)}
              disabled={showItem ? true : false}
            />
            <button onClick={handleCalculateButton}  disabled={showItem ? true : false}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!showItem &&
              <div className={styles.grid}>
                {levels.map((item,key)=>(
                  <GridItem key={key} item={item}/>
                ))}
              </div>
            }
            {showItem &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImage} alt="" width={25}/>
                </div>
                <GridItem item={showItem}/>
              </div>
            }
          </div>
      </div>
    </div>
    
  );
}

export default App;
