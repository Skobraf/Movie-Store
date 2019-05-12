import { connect } from 'react-redux';

const Product = ({ title }) => (
<div>
Product:
{title}
</div>
);
const mapStateToProps = state => ({
  title: state.product._source.original_title,
});
export default Page(connect(mapStateToProps)(Product), async (req, { dispatch }) => {
  const product = dispatch(fetchProduct(get(req, 'query.id')));
  await Promise.all([product]);
});
