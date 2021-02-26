//reason for this function to be async is that we need to fetch all data and we get all ids and return all idsto next ,,,and based on the id next will generate routes for us

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
    // paths : [ {}, {params : { id}} , {} .....]
  };
};

//now we tell next to what pages to build
export const getStaticProps = async (context)=>{
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return {
      props : {
          user :data
      }
  }

}

const Details = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default Details;
