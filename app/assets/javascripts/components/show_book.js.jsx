class ShowBook extends React.Component {
    render() {
        return (
            <div>
                show
                <ReactRouter.Link to="edit" params={{ id: this.context.router.getCurrentParams().id }} className="btn btn-link">Edit</ReactRouter.Link>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
ShowBook.contextTypes = { router: React.PropTypes.func };
