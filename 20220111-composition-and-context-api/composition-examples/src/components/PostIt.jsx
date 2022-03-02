const PostIt = ({ title, children }) => {
  return (
    <div className="postIt">
      <h3 className="postIt__title">{title}</h3>
      {children}
    </div>
  );
};

export default PostIt;
