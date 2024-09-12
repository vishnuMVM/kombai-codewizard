function SvgIcon1({ className, sanitizedHtmlContent1 }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent1 }} />;
}

export default SvgIcon1;
