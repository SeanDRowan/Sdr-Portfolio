import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Portfolio({ projects }) {
    return (
      <div>
        <h1>My Projects</h1>

        <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
        <Col key={idx}>
        
       
          <Card style={{ width: '90%' }}  >
          <Card.Title> {project.title}</Card.Title>
             
      
          <Card.Link href={project.link}><Card.Img  src={project.img} /></Card.Link>
          <button id ='btn'>
          <Card.Link href={project.github}><Card.Img  src="assets/GitHub_Logo_White.png" /></Card.Link>
          </button>
            
          </Card>
             
          </Col>
      ))}
          </Row>

          </div>
    )};        
        
      