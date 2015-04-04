class IndexBooks extends React.Component {
    constructor() {
        this.state = {
            books: []
        };
    }
    componentDidMount() {
        $.ajax({
            url: this.context.router.getCurrentPathname().replace(/\/$/, '') + ".json",
            success: (results) => {
                this.setState({ books: results });
            }
        });
    }
    handleClickDestroy(url, e) {
        e.preventDefault();
        if (! confirm('Are you sure?')) {
            return;
        }
        $.ajax({
            url: url,
            method: 'DELETE',
            success: (result) => {
                console.log(result.notice);
            }
        })
    }
    render() {
        var rows = this.state.books.map((book, i) => {
            return (
                <tr key={i}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.price}</td>
                    <td><ReactRouter.Link to="show" params={{ id: book.id }}>Show</ReactRouter.Link></td>
                    <td><ReactRouter.Link to="edit" params={{ id: book.id }}>Edit</ReactRouter.Link></td>
                    <td><a href="" onClick={this.handleClickDestroy.bind(this, book.url)}>Destroy</a></td>
                </tr>
            );
        });
        return (
            <div>
                <h1>Listing Books</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th colSpan="3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <br/>
                <ReactRouter.Link to="new" className="btn btn-default">New Book</ReactRouter.Link>
            </div>
        );
    }
}
IndexBooks.contextTypes = { router: React.PropTypes.func };
