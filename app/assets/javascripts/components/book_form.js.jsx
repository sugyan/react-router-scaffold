class BookForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        var params = {};
        Object.keys(this.refs).forEach((key) => {
            params[key] = React.findDOMNode(this.refs[key]).value;
        });
        $.ajax({
            url: this.props.action,
            method: this.props.method,
            data: { book: params },
            success: (result) => {
                this.context.router.transitionTo('index');
            }
        });
    }
    render() {
        var book = this.props.book;
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input ref="title" className="form-control" defaultValue={book ? book.title : null}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Price</label>
                        <div className="col-sm-10">
                            <input ref="price" className="form-control" defaultValue={book ? book.price : null} type="number"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary">Create Book</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
BookForm.contextTypes = { router: React.PropTypes.func };
