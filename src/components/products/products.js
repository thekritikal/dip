import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './products.css'


const Products = (props) => {
	const { Products } = props;
	if (!Products || Products.length === 0) return <p>Can not find any Products, sorry</p>;
	return (
		<React.Fragment>
			<Container component="main">
				<Grid container spacing={10} alignItems="flex-end">
					{Products.map((product) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={product.id} xs={12} md={4}>
								<div className="product__spacing">	
									<div className="card__container" item key={product.id}>	
									<Link href={'Product/' + product.id}>								
										<div className="img__container">
											<img className="img__of__product" src={product.image1}></img>
										</div>
									</Link>
										<div className="product__brand">
											{product.brand.substr(0, 40)}
										</div>
										<div className="product__name">
											{product.name.substr(0, 60)}
										</div>
										<div className="product__price">
											{product.price} uah
										</div>
									</div>
								</div>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Products;