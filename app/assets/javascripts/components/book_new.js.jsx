class BookNew extends React.Component {
    render() {
        return (
            <div>
                <h1>New Book</h1>
                <BookForm action={this.context.router.makePath('index')} method="POST" submit="Create"/>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
BookNew.contextTypes = { router: React.PropTypes.func };
