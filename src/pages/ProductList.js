import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product/ProductCard';
//import products from 'src/__mocks__/products';
import axios from 'axios';

var rooms = [];

axios.get("http://localhost:5001/api/search_rooms", {})
  .then((response) => {
    rooms = response.data.rooms;
    console.log(rooms)
  })

const ProductList = () => (

  <>
    <Helmet>
      <title>Products | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {rooms.map((room) => (
              <Grid
                item
                key={room.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard room={room} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
