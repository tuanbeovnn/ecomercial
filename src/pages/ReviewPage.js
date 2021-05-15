import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReviewRequest, fetchReviewRequest } from "../redux/actions";
import ReactPaginate from 'react-paginate';
import ReactStars from "react-rating-stars-component";
const size = 4;
class ReviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            name: '',
            email: '',
            rating: 0,
            comment: ''
        }
    }
    ratingChanged = (newRating) => {
        this.setState({
            rating: newRating
        })
    };
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { productId } = this.props;
        const { name, email, rating, comment, reviews } = this.state
        const body = { name, email, rating, comment, idProduct: productId };
        this.props.addReview(body, data => {

            if (!data) {
                this.setState(
                    {
                        error: true
                    }
                )
            } else {
                this.setState({
                    success: true,
                    reviews: [data.details, ...reviews],
                    name: '',
                    email: '',
                    rating: 0,
                    comment: ''
                })

            }
        })
    }
    componentDidMount() {
        const { productId } = this.props;
        const callback = (data) => {
            if (data) {
                const reviews = data.list;
                const total = data.total;
                const page = data.currentPage;
                this.setState({
                    reviews,
                    total,
                    page
                })
            }
        }
        this.props.fetchReviews({ id: productId, page: 0, size }, callback);
    }

    handlePageClick = (e) => {
        const { productId } = this.props;
        const callback = (data) => {
            console.log(data);
            if (data) {
                const reviews = data.list;
                const total = data.total;
                const page = data.currentPage;
                this.setState({
                    reviews,
                    total,
                    page
                })
            }
        }
        this.props.fetchReviews({ id: productId, page: e.selected, size }, callback);
    }

    render() {
        const { reviews, total, page } = this.state;
        const totalPage = Math.ceil(total / size) || '';
        return (
            <div>
                <div className="pro-avg-ratting">
                    <h4>4.5 <span>(Overall)</span></h4>
                    <span>Based on 9 Comments</span>
                </div>
                <div className="ratting-list">
                    <div className="sin-list float-left">
                        <i className="fat fa-star" />
                        <i className="fat fa-star" />
                        <i className="fat fa-star" />
                        <i className="fat fa-star" />
                        <i className="fat fa-star" />
                        <span>(5)</span>
                    </div>

                </div>
                <div className="rattings-wrapper">
                    {reviews.map((item, index) => {
                        return (
                            <div key={index} className="sin-rattings">
                                <div className="ratting-author">
                                    <h3>{item.name}</h3>
                                    <div className="ratting-star">
                                        {new Array(5).fill(0).map((star, index) => {
                                            return <i key={index} className={"fat fa-star" + (index < item.rating ? '' : '-o')} />
                                        })}
                                        <span>({item.rating})</span>
                                    </div>
                                </div>
                                <p>{item.comment}</p>
                            </div>
                        )
                    })}
                </div>
                {reviews.length ?
                    <div style={{ clear: 'both', padding: '20px 0px 30px' }}>
                        <ReactPaginate

                            previousLabel={<><i className="fa fa-angle-left" />Back</>}// bien 2 node thanh 1 node
                            nextLabel={<>Next<i className="fa fa-angle-right" /></>}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={totalPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            initialPage={page}
                            disableInitialCallback={true}
                        />
                    </div>
                    : ""
                }
                <div className="ratting-form-wrapper fix">
                    <h3>Add your Comments</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="ratting-form row">
                            <div className="col-12 mb-15">
                                <label>Rating: </label>
                                <ReactStars
                                    count={5}
                                    onChange={this.ratingChanged}
                                    size={20}
                                    activeColor="#ffd700"
                                    key={this.state.rating}
                                />
                            </div>
                            <div className="col-md-6 col-12 mb-15">
                                <label htmlFor="name">Name:</label>
                                <input
                                    id="name"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="col-md-6 col-12 mb-15">
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    type="text"
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.state.email}

                                />
                            </div>
                            <div className="col-12 mb-15">
                                <label htmlFor="your-review">Your Review:</label>
                                <textarea
                                    name="comment"
                                    id="your-review"
                                    placeholder="Write a review"
                                    defaultValue={""}
                                    onChange={this.onChange}
                                    value={this.state.comment}

                                />
                            </div>
                            <div className="col-12">
                                <input defaultValue="add review" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

        fetchReviews: (params, callback) => {
            dispatch(fetchReviewRequest(params, callback));
        },
        addReview: (body, callback) => {
            dispatch(addReviewRequest(body, callback));
        }
    }
}
export default connect(null, mapDispatchToProps)(ReviewPage);