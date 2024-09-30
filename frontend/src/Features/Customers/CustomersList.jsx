import {Table, Container} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RegisterCustomer from './RegisterCustomer';
import EditCustomer from './EditCustomer';
import { useGetCustomersQuery } from './CustomerApiSlice';

export default function CustomersList() {
  const {data, error, isLoading} = useGetCustomersQuery('customersList', {
        // pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
  let customers
    if(data){
        const {ids, entities} = data
        customers = ids.map(id=>entities[id])
    }

  return (
    <Container className='main-container'>
      <div className="container mt-3">      
          <ListGroup>
            <ListGroup.Item><h1>List of Boma Butchery Customers</h1> </ListGroup.Item>
          </ListGroup>
        
        <Table striped bordered hover>
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Customer Names</th>          
              <th>Email</th>          
              <th>Phone Number</th>          
            </tr>
          </thead>
          <tbody>
          {customers?.map((customer, index) => ( 
              <tr key={customer._id}>
                <td>{index + 1}</td> 
                <td>{customer.customer_name}</td>
                <td>{customer.email}</td>                    
                <td>{customer.customer_phone}</td>                    
                <td><EditCustomer id={customer._id} customer={customer}  /> </td>
              </tr>          
            ))}        
          </tbody>
        </Table>
      <RegisterCustomer />
      </div>
    </Container>
  );
}


//ORIGNAL CODE........................................

  // const axiosPrivate = useAxiosPrivate()
  // const [customers, setCustomers] = useState([])  
  // const [fetchData, setFetchData] = useState(true)
  
  //INITIALLY WAS PASSED AS PROP TO REGISTER EMPLOYEE COMPONENT
  // const postCustomer = async(data) => {
  //   try{
  //   await axiosInstance.post('/customers', data)
  //   .then((result) => {      
  //     // fetchCustomers()
  //     setFetchData(true)
  //      console.log(result)
  //   })
  //   }catch(error) {console.log(error)}
  // }

    //update customer entry
    // const UpdateCustomer = async (customer) => {  
    //   try{
    //     await axiosInstance.patch(`/customers/${customer.customer_id}`, customer)
    //     .then((result) => {
    //         // fetchCustomers()
    //         setFetchData(true)
    //         handleClose()
    //         console.log(result)
    //       })
    //     }
    //   catch(error) {console.log(error)}
    // }


  //get all customers
 
  // const fetchCustomers =async ()=>{
//     try{
//    await axiosInstance.get('/customers')
//     .then(response => {
//         setCustomers(response.data.customers)
//         setFetchData(false)
//         console.log(response.data.customers)     
//     })      
//     }catch(error) {
//         console.log(error);
//     }
//   }

//     //fetch All customers
//  useEffect(() => {   
//   fetchCustomers()
//   }, [fetchData])
