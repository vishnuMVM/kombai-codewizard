function SvgIcon2({ className, sanitizedHtmlContent3 }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent3 }} />;
}

export default SvgIcon2;
