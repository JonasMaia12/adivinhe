import styles from "./styles.module.css"

type InputProps = React.ComponentProps<"input">

export function Input({ ...props }: InputProps) {
  return <input type="text" className={styles.input} {...props} />
}
