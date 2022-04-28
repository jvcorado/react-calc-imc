import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/img/up.png';
import downImage from '../../assets/img/down.png';

type Props = {
    item: Level;
};


export const GridItem = ({item}:Props)=>{

    return(
        <div 
        className={styles.main}
        style={{backgroundColor: item.color}}>
           <div className={styles.gridIcon}>
               {item.icon === 'up' && <img src={upImage} alt='' width={30}></img>}
               {item.icon === 'down' && <img src={downImage} alt='' width={30}></img>}
           </div>
           <div className={styles.gridtTitle}>
               {item.title}
           </div>

            {item.yourImc &&
                <div className={styles.gridYourImc}>Seu IMC é de {item.yourImc.toFixed(2)}</div>  
            }

           <div className={styles.gridInfo}>
            <>
                IMC está entre <strong>{item.imc[0]}
                </strong> e <strong>{item.imc[1]}</strong>
            </>
           </div>
        </div>
    )
}