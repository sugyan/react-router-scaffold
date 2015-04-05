class BookEdit extends React.Component {
    constructor() {
        this.state = {};
    }
    componentDidMount() {
        $.ajax({
            url: this.props.api.show,
            method: 'GET',
            success: (result) => {
                this.setState({ book: result });
            }
        });
    }
    render() {
        var form;
        if (this.state.book) {
            form = <BookForm action={this.props.api.show} method="PATCH" submit="Update" book={this.state.book}/>;
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
