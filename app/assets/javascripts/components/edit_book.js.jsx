class EditBook extends React.Component {
    render() {
        return (
            <div>
                <h1>Editing Book</h1>
                <ReactRouter.Link to="show" params={{ id: this.context.router.getCurrentParams().id }} className="btn btn-link">Show</ReactRouter.Link>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
EditBook.contextTypes = { router: React.PropTypes.func };
