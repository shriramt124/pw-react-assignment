

function Person(props){
    const {
      age= 21,
      name="arjun"
    } = props;
    return (
      <>
      <p>person name is : {name} and age is : {age}</p>
      </>
    )
  }
  
  export default Person;