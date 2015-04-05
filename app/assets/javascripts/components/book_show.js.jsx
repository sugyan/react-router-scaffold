class BookShow extends React.Component {
    constructor() {
        this.state = {
            book: {}
        };
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
        return (
            <div>
                <dl className="dl-horizontal">
                    <dt>ID</dt>
                    <dd>{this.state.book.id}</dd>
                    <dt>Title</dt>
                    <dd>{this.state.book.title}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.book.price}</dd>
                    <dt>Created</dt>
                    <dd>{this.state.book.created_at}</dd>
                    <dt>Updated</dt>
                    <dd>{this.state.book.updated_at}</dd>
                </dl>
                <ReactRouter.Link to="edit" params={{ id: this.context.router.getCurrentParams().id }} className="btn btn-link">Edit</ReactRouter.Link>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
BookShow.contextTypes = { router: React.PropTypes.func };
