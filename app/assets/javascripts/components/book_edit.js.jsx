class BookEdit extends React.Component {
    constructor() {
        this.state = {};
    }
    componentDidMount() {
        $.ajax({
            url: `/books/${this.props.params.id}.json`,
            method: 'GET',
            success: (result) => {
                this.setState({ book: result });
            }
        });
    }
    render() {
        var form;
        if (this.state.book) {
            form = <BookForm action={`/books/${this.props.params.id}.json`} method="PATCH" submit="Update" updateFlash={this.props.updateFlash} book={this.state.book}/>;
        }
        return (
            <div>
                <h1>Editing Book</h1>
                {form}
                <ReactRouter.Link to="show" params={{ id: this.props.params.id }} className="btn btn-link">Show</ReactRouter.Link>
                <ReactRouter.Link to="index" className="btn btn-link">Back</ReactRouter.Link>
            </div>
        );
    }
}
