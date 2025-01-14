import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
// import customers from 'src/__mocks__/customers';

import axios from 'axios';

var users = [];

axios.get("http://localhost:5001/api/search_users", {})
  .then((response) => {
    users = response.data.users;
    console.log(users)
  })

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults users={users} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
