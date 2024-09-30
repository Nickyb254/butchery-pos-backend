import {Table, Container} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import RegisterSales from './RegisterSales';
import EditSale from './EditSale';
import { useGetAllSalesQuery, useDeleteSaleMutation } from './SalesApiSlice';

export default function SalesList() {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllSalesQuery(undefined, {
    // pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })

  const [deleteSale, {
    isSuccess: isDelSuccess,
    isError: isDelError,
    error: delerror
  }] = useDeleteSaleMutation()

  let sales
  if(data){
    const {ids, entities} = data
    sales = ids.map(id => entities[id])
  }  
  
  return (
    <Container className='main-container'>
      <div >      
        <ListGroup>
          <ListGroup.Item><h1>Sales</h1> </ListGroup.Item>
        </ListGroup>
        
        <Table striped bordered hover>
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Mass sold</th>
              <th>Transaction by</th>
              <th>Date</th>
              <th colSpan={2}>Modify Entry</th>
            </tr>
          </thead>
          <tbody>
          {sales?.map((sale, index) => (
              <tr key={sale._id}>
                <td>{index + 1}</td> 
                <td>{sale.product}</td>                        
                <td>{sale.price}</td>                        
                <td>{sale.mass}</td>                        
                <td>{sale.servedBy}</td>                        
                <td>{sale.date}</td>                        
                <td><Button variant='danger' onClick={() => {deleteSale(sale._id)}}> Delete </Button></td>
                <td><EditSale sale={sale} /> </td>
              </tr>          
            ))}
          </tbody>
        </Table>
        <RegisterSales />
      </div>
    </Container>
  );
}


//ORIGNAL CODE ........................................

// const [sales, setSales] = useState([])
  // const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch      
  
    //fetch All Sales
  // useEffect(() => { 
  // if (fetchData) {
  //   axiosInstance.get('/sales')
  //   .then(response => {
  //       // console.log(response)
  //       setSales(response.data.saleProducts)
  //       setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
  //   })      
  //   .catch((error) => {
  //       console.log(error);
  //   })
  // }}, [fetchData])

  
//delete Sale
  // const onDelete = async (salesId) =>{   
  //    try{
  //     await axiosInstance.delete(`/sales/${salesId}`)
  //     .then(() => setFetchData(true))
  //    } catch (error){
  //     console.log(error)
  //    }
  // }
