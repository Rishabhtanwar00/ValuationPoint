import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisible } from '../actions/links';

const Modal = ({ setVisible, isVisible, showpopup }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{showpopup && (
				<div className='model'>
					<div className='model-content'>
						<h2>Hello</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
							iste, fugiat distinctio recusandae quidem nulla enim qui aut
							perferendis quia.
						</p>
						<button onClick={() => setVisible(true)}>Yes</button>
						<button onClick={() => setVisible(false)}>No</button>
					</div>
				</div>
			)}
		</>
	);
};

Modal.propTypes = {
	setVisible: PropTypes.func,
	isVisible: PropTypes.bool,
	showPopup: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isVisible: state.links.isVisible,
	showpopup: state.links.showpopup,
});

export default connect(mapStateToProps, { setVisible })(Modal);
