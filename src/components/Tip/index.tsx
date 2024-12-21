import tipImg from "../../assets/tip.svg"
import styles from "./styles.module.css"

type TipProps = {
  tip: string
  category: string
}

export function Tip({ tip, category }: TipProps) {
  return (
    <div className={styles.tip}>
      <img src={tipImg} alt="Ícone da dica" />

      <div>
        <h1>{category}</h1>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
}
