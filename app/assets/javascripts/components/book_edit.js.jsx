class BookEdit extends React.Component {
    constructor() {
        this.state = {};
    }
    componentDidMount() {
        var url = this.context.router.makePath('show', { id: this.context.router.getCurrentParams().id }) + ".json";
        $.ajax({
            url: url,
            method: 'GET',
            success: (result) => {
                this.setState({ book: result });
            }
        });
    }
    render() {
        var form;
        if (this.state.book) {
            form = <BookForm action={this.context.router.makePath('show', { id: this.context.router.getCurrentParams().id })} method="PATCH" submit="Update" book={this.state.book}/>;
        }
        return (
            <div>
                <h1>Editing Book</h1>
                {form}
                <ReactRouter.Link to="show" params={{ id: this.context.router.getCurrentParams().id }} className="btn btn-link">Show</ReactRouter.Link>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
BookEdit.contextTypes = { router: React.PropTypes.func };
