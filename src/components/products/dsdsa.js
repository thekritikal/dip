<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{Products.map((product) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={product.id} xs={12} md={4}>
								<Card className={classes.card}>
									<Link
										color="textPrimary"
										href={'Product/' + product.id}
										className={classes.link}
										>
										<CardMedia
											className={classes.cardMedia}
											image={product.image1}
											title="Image title"
										/>
									</Link>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.productName}
										>
											{product.brand.substr(0, 40)}
										</Typography>
										<Typography
											gutterBottom
											variant="h3"
											component="h3"
											className={classes.productTitle}
										>
											{product.name.substr(0, 60)}
										</Typography>
										<div className={classes.productText}>
											<Typography color="textSecondary">
												{product.price} uah
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>






{/* <div className="product__spacing" >
{Products.map((product) => {
	return (

					<div className="card__container" item key={product.id}>									
						<div className="img__container" href={'Product/' + product.id}>
							<img className="img__of__product" src={product.image1}></img>
						</div>
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

	);
})}
</div> */}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import './products.css'

// // const useStyles = makeStyles((theme) => ({
// // 	cardMedia: {
// // 		paddingTop: '100%', // 16:9
// // 		paddingLeft: '10px',

// // 	},
// // 	link: {
// // 		margin: theme.spacing(1, 1.5),
// // 	},
// // 	cardHeader: {
// // 		backgroundColor:
// // 			theme.palette.type === 'light'
// // 				? theme.palette.grey[200]
// // 				: theme.palette.grey[700],
// // 	},
// // 	productTitle: {
// // 		fontSize: '16px',
// // 		textAlign: 'center',
// // 	},
// // 	productName: {
// // 		fontSize: '16px',
// // 		fontWeight: 'bold',
// // 		textAlign: 'center',
// // 	},
// // 	productText: {
// // 		display: 'flex',
// // 		justifyContent: 'center',
// // 		alignItems: 'baseline',
// // 		fontSize: '12px',
// // 		textAlign: 'left',
// // 		marginBottom: theme.spacing(2),
// // 	},
// // }));

// const Products = (props) => {
// 	const { Products } = props;
// 	// const classes = useStyles();
// 	if (!Products || Products.length === 0) return <p>Can not find any Products, sorry</p>;
// 	return (
// 		<React.Fragment>
// 			<Container maxWidth="md" component="main">
// 				<Grid container spacing={10} alignItems="flex-end">
// 					{Products.map((product) => {
// 						return (
// 							// Enterprise card is full width at sm breakpoint
// 							<Grid item key={product.id} xs={12} md={4}>
// 								<div className="product__spacing">
// 									<div className="card__container" item key={product.id}>									
// 										<div className="img__container" href={'Product/' + product.id}>
// 											<img className="img__of__product" src={product.image1}></img>
// 										</div>
// 										<div className="product__brand">
// 											{product.brand.substr(0, 40)}
// 										</div>
// 										<div className="product__name">
// 											{product.name.substr(0, 60)}
// 										</div>
// 										<div className="product__price">
// 											{product.price} uah
// 										</div>
// 									</div>
// 								</div>
// 							</Grid>
// 						);
// 					})}
// 				</Grid>
// 			</Container>
// 		</React.Fragment>
// 	);
// };
// export default Products;