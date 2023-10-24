


export default function Portfolio({ projects }) {
    return (
      <div>
        <h1>My Projects</h1>
        <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((project) => (
          <li className="list-group-item" key={project.title}>
            {`${project.title} ${project.link} ${project.img}`}
          </li>
        ))}
      </ul>
      </div>
    );
  }