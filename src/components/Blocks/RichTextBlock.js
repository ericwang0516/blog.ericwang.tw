import styles from './RichTextBlock.module.css';

export default function RichTextBlock({ contentHtml }) {
  if (!contentHtml) return null;

  return (
    <div 
      className={styles.richTextBlock}
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
