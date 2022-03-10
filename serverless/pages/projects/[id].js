import ProjectDetails from "../../Components/ProjectDetails";


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map( project=>{
        return{
            params: {id: project.id.toString()}
        }
    })

    return{
        paths, fallback: false
    }

}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();

    return{
        props: {project: data}
    }
}

const Details = ({project}) =>{

    return(
        <div className='bg-gray-10' >
            <ProjectDetails  />
        </div>
    )



}

export default Details;