import Head from "next/head";
import styles from "../../styles/Users.module.css";
import Link from 'next/link'


export const getStaticProps = async ()=> {
   const res= await fetch("https://jsonplaceholder.typicode.com/users")
   const data = await res.json()

   return {
       props : {
           users : data
       }
   }

}

const Users = ({users}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users list | users</title>
        <meta name="keywords" content="users" />
      </Head>
      <h1>All Users goes here !!!!</h1>
     {
         users.map( user => (
             <Link href={'/users/' + user.id} key={user.id}> 
               <a className={styles.single}>
                   <h3>
                       {user.name}
                   </h3>
               </a>
             </Link>
         ))
     }
    </div>
  );
};

export default Users;
