import styles from './BoxTitle.module.css';

type Props = {
  title: string;
};

export const BoxTitle = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <p>{title}</p>
    </div>
  );
};
