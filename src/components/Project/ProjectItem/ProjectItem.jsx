export const ProjectItem = ({ title, thumbnail }) => {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <h2>{title}</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li></li>
      </ul>
    </li>
  );
};
