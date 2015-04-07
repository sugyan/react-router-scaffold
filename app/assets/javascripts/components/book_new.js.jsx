class BookNew extends React.Component {
    render() {
        return (
            <div>
                <h1>New Book</h1>
                <BookForm action="/books.json" method="POST" submit="Create" updateFlash={this.props.updateFlash}/>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
