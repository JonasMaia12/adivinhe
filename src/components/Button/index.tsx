import styles from "./styles.module.css"

type ButtonProps = React.ComponentProps<"button"> & {
  title: string
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} className={styles.button}>
      {title}
    </button>
  )
}
