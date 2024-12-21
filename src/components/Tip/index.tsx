import tipImg from "../../assets/tip.svg"
import styles from "./styles.module.css"

type TipProps = {
  tip: string
}

export function Tip({ tip }: TipProps) {
  return (
    <div className={styles.tip}>
      <img src={tipImg} alt="Ícone da dica" />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
}
