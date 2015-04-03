class NewBook extends React.Component {
    render() {
        return (
            <div>
                <h1>New Book</h1>
                <BookForm action={this.context.router.makePath('index')} method="POST"/>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
NewBook.contextTypes = { router: React.PropTypes.func };
