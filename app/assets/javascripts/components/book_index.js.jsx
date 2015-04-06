class BookIndex extends React.Component {
    constructor() {
        this.state = {
            books: []
        };
    }
    reloadBooks() {
        $.ajax({
            url: '/books.json',
            success: (results) => {
                this.setState({ books: results });
            }
        });
    }
    componentDidMount() {
        this.reloadBooks();
    }
    render() {
        return (
            <div>
                <h1>Listing Books</h1>
                <BookIndexTable books={this.state.books} updateFlash={this.props.updateFlash} reloadBooks={this.reloadBooks.bind(this)}/>
                <br/>
                <ReactRouter.Link to="new" className="btn btn-default">New</ReactRouter.Link>
            </div>
        );
    }
}

class BookIndexTable extends React.Component {
    render() {
        return (
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
                    {this.props.books.map((book, i) => <BookIndexTableRow key={i} book={book} updateFlash={this.props.updateFlash} reloadBooks={this.props.reloadBooks}/>)}
                </tbody>
            </table>
        );
    }
}

class BookIndexTableRow extends React.Component {
    handleClickDestroy(url, e) {
        e.preventDefault();
        if (! confirm('Are you sure?')) {
            return;
        }
        $.ajax({
            url: url,
            method: 'DELETE',
            success: (result) => {
                this.props.updateFlash(result.notice);
                this.props.reloadBooks();
            }
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.book.id}</td>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.price}</td>
                <td><ReactRouter.Link to="show" params={{ id: this.props.book.id }}>Show</ReactRouter.Link></td>
                <td><ReactRouter.Link to="edit" params={{ id: this.props.book.id }}>Edit</ReactRouter.Link></td>
                <td><a href="" onClick={this.handleClickDestroy.bind(this, this.props.book.url)}>Destroy</a></td>
            </tr>
        );
    }
}
