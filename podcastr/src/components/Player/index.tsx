import styles from "./styles.module.scss";
export default function Player (){
  
  return (
  <div className={styles.playerContainer}>
    <header>
      <img src="/playing.svg" alt="Tocando agora"/>
      <strong>Tocando agora</strong>

      <div className={styles.emptyPlayer}>
        
      </div>
    </header>

  </div>
  )
}